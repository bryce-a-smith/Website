"use strict";

function init() {
  //Get HTML elements into variables
  //inputs
  //number of scoops
  const numberOfScoopsInput = document.getElementById("number-of-scoops-input");
  //cone or cup
  const coneRadio = document.getElementById("cone-radio");
  const cupRadio = document.getElementById("cup-radio");
  //toppings
  const toggleSection = document.getElementById("toggle-section");
  const toppingsSection = document.getElementById("toppings-section");
  const sprinklesCheckbox = document.getElementById("sprinkles-checkbox");
  const whippedCreamCheckbox = document.getElementById("whipped-cream-checkbox");
  const hotFudgeCheckbox = document.getElementById("hot-fudge-checkbox");
  const cherryCheckbox = document.getElementById("cherry-checkbox");
  //button
  const submitOrderButton = document.getElementById("submit-order-button");

  //outputs
  const basePriceAmount = document.getElementById("base-price-amount");
  const taxAmount = document.getElementById("tax-amount");
  const totalDueAmount = document.getElementById("total-due-amount");

  //Write functions
  function toggleToppingsSection() {
    if (coneRadio.checked) {
      toppingsSection.style.display = "none";
    }

    if (cupRadio.checked) {
      toppingsSection.style.display = "block";
    }
  }

  function calculatePriceScoops(numOfScoops) {
    if (numOfScoops >= 1 && numOfScoops <= 4) {
      return 2.25 + (numOfScoops - 1) * 1.25;
    } else {
      alert("Please enter a number between 1 and 4");
      return -1;
    }
  }

  function calculatePriceToppings() {
    let priceOfToppings = 0;
    if (cupRadio.checked) {
      if (sprinklesCheckbox.checked) {
        priceOfToppings += 0.5;
      }
      if (whippedCreamCheckbox.checked) {
        priceOfToppings += 0.25;
      }
      if (hotFudgeCheckbox.checked) {
        priceOfToppings += 1.25;
      }
      if (cherryCheckbox.checked) {
        priceOfToppings += 0.25;
      }

      return priceOfToppings;
    } else {
      return 0;
    }
  }

  function displayCosts() {
    const numberOfScoops = Number(numberOfScoopsInput.value);

    const priceOfScoops = calculatePriceScoops(numberOfScoops);
    if (priceOfScoops == -1) {
      return;
    }

    const priceOfToppings = calculatePriceToppings();

    const priceBase = priceOfScoops + priceOfToppings;
    const tax = priceBase * 0.07;

    //display
    basePriceAmount.innerText = `$${priceBase.toFixed(2)}`;
    taxAmount.innerText = `$${tax.toFixed(2)}`;
    totalDueAmount.innerText = `$${(priceBase + tax).toFixed(2)}`;
  }

  //Wire-up functions
  //toggle toppings section
  if (toggleSection) {
    toggleSection.onclick = toggleToppingsSection;
  }

  if (submitOrderButton) {
    submitOrderButton.onclick = displayCosts;
  }
}

window.onload = init;
