"use strict";

function getEnvironment() {
  const host = window.location.hostname;
  if (host.startsWith("dev.")) return "DEV";
  if (host.startsWith("qa.")) return "QA";
  return null;
}

function showEnvLabel(envLabel) {
  const env = getEnvironment();

  if (!envLabel) return;
  if (env) envLabel.textContent = env;
}

async function fetchLastDeployed() {
  const host = window.location.hostname;
  let branch = "main";
  if (host.startsWith("dev.")) branch = "dev";
  if (host.startsWith("qa.")) branch = "qa";

  const url = `https://api.github.com/repos/bryce-a-smith/Website/commits?sha=${branch}&per_page=1`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`GitHub API ${response.status}`);

  const data = await response.json();
  return data[0].commit.committer.date;
}

async function init() {
  const envLabel = document.getElementById("env-label");
  const lastDeployed = document.getElementById("last-deployed");

  // Check if the required elements are present in the DOM
  if (!envLabel || !lastDeployed) {
    console.warn("One or more required elements not found. Skipping initialization.");
  }

  showEnvLabel(envLabel);

  try {
    if (lastDeployed) {
      const raw = await fetchLastDeployed();
      lastDeployed.textContent = new Date(raw).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      });
    }
  } catch (err) {
    console.error("Failed to fetch last deployed date:", err);
    if (lastDeployed) {
      lastDeployed.textContent = "Unavailable";
    }
  }
}

document.addEventListener("DOMContentLoaded", init);
