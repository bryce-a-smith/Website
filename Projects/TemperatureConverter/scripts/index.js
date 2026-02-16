"use strict";

window.onload = init;

function init() {
  const convertFToCBtn = document.getElementById("convertFToCBtn");
  const convertCToFBtn = document.getElementById("convertCToFBtn");

if(convertFToCBtn) {
    convertFToCBtn.onclick = onConvertFToCBtnClicked;
}

if (convertCToFBtn) {
    convertCToFBtn.onclick = onConvertCToFBtnClicked;
}


}

// Select input elements
const fToBeConverted = document.getElementById("fahrenheitToBeConverted");
const cToBeConverted = document.getElementById("celciusToBeConverted");
const fahrenheitConverted = document.getElementById("fahrenheitConverted");
const celciusConverted = document.getElementById("celciusConverted");
const messagePara = document.getElementById("messagePara");

function displayErrorMessage() {
  messagePara.innerText = `Your entry is invalid.
  Try Again.`;
}

function onConvertFToCBtnClicked() {
  const fToBeC = Number(fToBeConverted.value);

  if (isNaN(fToBeC)) {
    displayErrorMessage();
  } else {
    celciusConverted.value = (((fToBeC - 32) * 5) / 9).toFixed(2);
    messagePara.innerText = "";
  }
}

function onConvertCToFBtnClicked() {
  const cToBeF = Number(cToBeConverted.value);

  if (isNaN(cToBeF)) {
    displayErrorMessage();
  } else {
    fahrenheitConverted.value = ((cToBeF * 9) / 5 + 32).toFixed(2);
    messagePara.innerText = "";
  }
}
