"use strict";
//commit
window.onload = init;

function init() {
  const addBtn = document.getElementById("addBtn");
  const subtractBtn = document.getElementById("subtractBtn");
  const multiplyBtn = document.getElementById("multiplyBtn");
  const divideBtn = document.getElementById("divideBtn");
  addBtn.onclick = onAddBtnClicked;
  subtractBtn.onclick = onSubtractBtnClicked;
  multiplyBtn.onclick = onMultiplyBtnClicked;
  divideBtn.onclick = onDivideBtnClicked;
}

const num1Field = document.getElementById("number1Field");
const num2Field = document.getElementById("number2Field");
const answerField = document.getElementById("answerField");
const messagePara = document.getElementById("messagePara");

function displayErrorMessage() {
  messagePara.innerText = `One or more of your entries are invalid.
  Try Again.`;
}

function onAddBtnClicked() {
  const num1 = Number(num1Field.value);
  const num2 = Number(num2Field.value);

  if (isNaN(num1) || isNaN(num2)) {
    displayErrorMessage();
  } else {
    answerField.value = num1 + num2;
    messagePara.innerText = "";
  }
}
function onSubtractBtnClicked() {
  const num1 = Number(num1Field.value);
  const num2 = Number(num2Field.value);

  if (isNaN(num1) || isNaN(num2)) {
    displayErrorMessage();
  } else {
    answerField.value = num1 - num2;
    messagePara.innerText = "";
  }
}
function onMultiplyBtnClicked() {
  const num1 = Number(num1Field.value);
  const num2 = Number(num2Field.value);

  if (isNaN(num1) || isNaN(num2)) {
    displayErrorMessage();
  } else {
    answerField.value = num1 * num2;
    messagePara.innerText = "";
  }
}
function onDivideBtnClicked() {
  const num1 = Number(num1Field.value);
  const num2 = Number(num2Field.value);

  if (isNaN(num1) || isNaN(num2)) {
    displayErrorMessage();
  } else {
    answerField.value = num1 / num2;
    messagePara.innerText = "";
  }
}
