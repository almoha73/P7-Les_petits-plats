import {} from "../index.js";

export let  variables = {
  formControl: document.querySelector(".form-control"),

  container: document.querySelector(".container.fluid-grid"),

  buttonIngredientsList: document.querySelector(".dropdown-menu__ingredients"),

  buttonApplianceList: document.querySelector(".dropdown-menu__appliances"),

  buttonUstensilsList: document.querySelector(".dropdown-menu__ustensils"),

  inputIngredient: document.querySelector(".form-control-ingredient"),

  inputAppliance: document.querySelector(".form-control-appliance"),

  inputUstensil: document.querySelector(".form-control-ustensil"),

  cards: document.querySelectorAll(".card"),

  liste: Array.from(
    document.querySelectorAll(
      ".dropdown-menu__ingredients .dropdown-menu__item"
    )
  ),
};
