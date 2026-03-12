"use strict";

function init() {
  const monitoringToggle = document.getElementById("monitoring-description-toggle");
  const monitoringDescription = document.getElementById("monitoring-description-p");

  monitoringToggle.addEventListener("click", () => {
    if (monitoringDescription.style.display === "none") {
      monitoringDescription.style.display = "block";
      monitoringToggle.textContent = "Read less";
    } else {
      monitoringDescription.style.display = "none";
      monitoringToggle.textContent = "Read more";
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
