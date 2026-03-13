"use strict";

/*
function formatDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
*/

function formatDate(iso, options) {
  if (!iso) return "unavailable";
  const defaults = { month: "short", day: "numeric", year: "numeric" };
  return new Date(iso).toLocaleDateString("en-US", options || defaults); // allows overriding defaults with custom options
}

function formatDowntime(mins) {
  if (!mins) return "—";
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return h > 0 ? (m > 0 ? `${h}h ${m}m` : `${h}h`) : `${m}m`;
}

function renderIncident(inc) {
  const lessons = (inc.lessonsLearned || []).map((l) => `<li>${l}</li>`).join("");

  const envs = (inc.environments || []).map((e) => `<code>${e}</code>`).join(" &nbsp; ");

  return `
    <div class="incident-card">
      <div class="incident-header">
        <span class="incident-id">${inc.id}</span>
        <span class="incident-badge incident-badge--${inc.status.toLowerCase()}">${inc.status}</span>
        <span class="incident-badge incident-badge--${inc.severity.toLowerCase()}">${inc.severity}</span>
      </div>

      <h3 class="incident-title">${inc.title}</h3>

      <div class="incident-meta">
        <span><strong>Start</strong> ${formatDate(inc.startTime)}</span>
        <span><strong>Resolved</strong> ${formatDate(inc.resolvedTime)}</span>
        <span><strong>Duration</strong> ${formatDowntime(inc.downtimeMinutes)}</span>
      </div>

      <p class="incident-envs">${envs}</p>

      <p class="incident-summary">${inc.summary}</p>

      ${
        lessons
          ? `
        <details class="incident-lessons">
          <summary>Lessons learned</summary>
          <ul>${lessons}</ul>
        </details>
      `
          : ""
      }
    </div>
  `;
}

async function init() {
  const list = document.getElementById("incidents-list");

  try {
    const res = await fetch("../incidents.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const incidents = await res.json();

    if (!incidents.length) {
      list.innerHTML = "<p>No incidents recorded.</p>";
      return;
    }

    list.innerHTML = incidents
      .sort((a, b) => new Date(b.startTime) - new Date(a.startTime))
      .map(renderIncident)
      .join("");
  } catch (err) {
    console.error("Failed to load incidents:", err);
    list.innerHTML = "<p>Failed to load incident data.</p>";
  }
}

document.addEventListener("DOMContentLoaded", init);
