"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX", imgURL: "https://b.fssta.com/uploads/application/nfl/team-logos/Cowboys.png" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO", imgURL: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/den.png" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX", imgURL: "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO", imgURL: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/kc.png" },
];

function init() {
  //get html elements into variables
  const footballTeamsSelect = document.getElementById("football-teams-select");
  const displayInfoButton = document.getElementById("display-info-button");
  const displayParagraph = document.getElementById("display-paragraph");
  const teamImage = document.getElementById("team-image");

  //write functions
  function loadTeamsList() {
    for (const team of teams) {
      let option = new Option(team.name, team.code);
      footballTeamsSelect.appendChild(option);
    }
  }

  function onTeamSelectionChanged() {
    if (footballTeamsSelect.value == "") {
      displayParagraph.innerText = "";
      teamImage.src = "";
    }
  }

  function getTeamByCode(code) {
    for (const team of teams) {
      if (team.code == code) {
        return team;
      }
    }
  }

  function displayInfo() {
    displayParagraph.innerText = "";
    let selectedTeam = getTeamByCode(footballTeamsSelect.value);
    console.log(selectedTeam); // Debug: Check the selected team object

    displayParagraph.innerText = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`;
    teamImage.src = selectedTeam.imgURL;
    return false;
  }

  loadTeamsList();

  if (displayInfoButton) {
    displayInfoButton.onclick = displayInfo;
  }

  footballTeamsSelect.onchange = onTeamSelectionChanged;
}

window.onload = init;
