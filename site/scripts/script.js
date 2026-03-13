"use strict";

function getEnvironment() {
  const host = window.location.hostname;
  if (host.startsWith("dev.")) return "DEV";
  if (host.startsWith("qa.")) return "QA";
  return null;
}

function showEnvLabel() {
  const env = getEnvironment();
  const label = document.getElementById("env-label");
  if (!label) return;
  if (env) label.textContent = env;
}

function init() {
  showEnvLabel();
}

document.addEventListener("DOMContentLoaded", init);
