"use strict";

// which site this script belongs to -- only thing that differs from monitoring-pipeline
const CONFIG = { siteId: "portfolio" };

// -- data layer -- //

const SITES = [
  { id: "portfolio", owner: "bryce-a-smith", repo: "Website", rootDomain: "aldenbryce.com" },
  { id: "monitoring", owner: "bryce-a-smith", repo: "monitoring-pipeline", rootDomain: "status.aldenbryce.com" },
];

// -- pure utils -- //

function getBranchFromUrl(url) {
  const hostname = new URL(url).hostname;
  if (hostname.startsWith("dev.")) return "dev";
  if (hostname.startsWith("qa.")) return "qa";
  return "main";
}

function getBranch(hostname) {
  if (hostname.startsWith("dev.")) return "dev";
  if (hostname.startsWith("qa.")) return "qa";
  return "main";
}

function getEnv(hostname) {
  if (hostname.startsWith("dev.")) return "DEV";
  if (hostname.startsWith("qa.")) return "QA";
  return "Production";
}

function isProd(hostname) {
  return getEnv(hostname) === "Production";
}

function formatDate(iso, options) {
  if (!iso) return "unavailable";
  const defaults = { month: "short", day: "numeric", year: "numeric" };
  return new Date(iso).toLocaleDateString("en-US", options || defaults);
}

function setText(element, text) {
  if (element) element.textContent = text;
}

// -- api -- //

function getSite(siteId) {
  const site = SITES.find((s) => s.id === siteId);
  if (!site) throw new Error(`unknown siteId: ${siteId}`);
  return site;
}

async function fetchLastDeployed(siteId, branch) {
  const site = getSite(siteId);
  const url = `https://api.github.com/repos/${site.owner}/${site.repo}/commits?sha=${branch}&per_page=1`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`GitHub API ${res.status} -- ${site.repo}@${branch}`);

  const data = await res.json();
  if (!data.length) throw new Error(`no commits found -- ${site.repo}@${branch}`);

  return data[0].commit.committer.date;
}

// -- init -- //

async function init() {
  const host = window.location.hostname;
  const branch = getBranch(host);

  // header env badge -- hidden on prod
  const envLabelHeader = document.getElementById("env-label-header");
  if (envLabelHeader) {
    if (!isProd(host)) {
      envLabelHeader.textContent = getEnv(host);
      envLabelHeader.style.display = "inline-block";
    } else {
      envLabelHeader.style.display = "none";
    }
  }

  // footer last commit date
  const dateLastDeployedFooter = document.getElementById("date-last-deployed-footer");

  try {
    const raw = await fetchLastDeployed(CONFIG.siteId, branch);
    setText(
      dateLastDeployedFooter,
      formatDate(raw, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      }),
    );
  } catch (err) {
    console.error("fetchLastDeployed failed:", err);
    setText(dateLastDeployedFooter, "unavailable");
  }
}

document.addEventListener("DOMContentLoaded", init);
