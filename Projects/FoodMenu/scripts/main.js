"use strict";

let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

function init() {
  //get html elements
  const categorySelect = document.getElementById("category-select");
  const itemSelect = document.getElementById("item-select");

  //write functions
  function loadItemSelect(category) {
    itemSelect.options.length = 0;
    itemSelect.size = category.length;
    for (const item of category) {
      let option = new Option(item);
      itemSelect.appendChild(option);
    }
  }

  function onSelectionChanged() {
    switch (categorySelect.value) {
      case "":
        itemSelect.options.length = 0;
        itemSelect.size = 0;
        let option = new Option("Select Item...");
        itemSelect.appendChild(option);
        break;
      case "drinks":
        loadItemSelect(menu.drinks);
        break;
      case "entrees":
        loadItemSelect(menu.entrees);
        break;
      case "desserts":
        loadItemSelect(menu.desserts);
        break;
    }
  }

  //wire-up functions
  categorySelect.onchange = onSelectionChanged;
}

window.onload = init;
