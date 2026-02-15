// Select the side panel and toggle button
const sidePanel = document.getElementById("sidePanel");
const toggleBtn = document.getElementById("toggleBtn");

// Function to toggle the side panel
function toggleSidePanel() {
  sidePanel.classList.toggle("active"); // Toggle the 'active' class
}

// Attach event listener to the toggle button
toggleBtn.addEventListener("click", toggleSidePanel);
