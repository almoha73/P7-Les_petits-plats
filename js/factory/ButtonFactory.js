import {} from "../index.js";
import { recipes } from "../data/recipes.js";

export class ButtonMenuFactory {
  constructor() {
    this.ingredientsArray = [];
    this.applianceArray = [];
    this.ustensilsArray = [];

    this.workArrayForButton();
    this.removeDupplicate();
    this.buildButton();
  }

  buildButton() {
    const buttonIngredientsList = document.querySelector(
      ".dropdown-menu__ingredients"
    );
    //console.log(this.ingredientsArray);
    buttonIngredientsList.innerHTML = `${this.ingredientsArray
      .sort()
      .join("")}`;

    const buttonApplianceList = document.querySelector(
      ".dropdown-menu__appliances"
    );
    //console.log(this.applianceArray);
    buttonApplianceList.innerHTML = `${this.applianceArray.sort().join("")}`;

    const buttonUstensilsList = document.querySelector(
      ".dropdown-menu__ustensils"
    );
    //console.log(this.ustensilsArray);
    buttonUstensilsList.innerHTML = `${this.ustensilsArray.sort().join("")}`;
  }

  workArrayForButton() {
    for (let elt of recipes) {
      let ingredients = elt.ingredients;
      for (let i = 0; i < ingredients.length; i++) {
        this.ingredientsArray.push(
          `<li class="dropdown-menu__item data-filter="ingredients">${ingredients[i].ingredient}</li>`
        );
      }

      let appliance = elt.appliance;
      this.applianceArray.push(
        `<li class="dropdown-menu__item data-filter="appliances">${appliance}</li>`
      );

      let ustensiles = elt.ustensils;
      for (let i = 0; i < ustensiles.length; i++) {
        this.ustensilsArray.push(
          `<li class="dropdown-menu__item data-filter="ustensils">${ustensiles[i]}</li>`
        );
      }
    }
  }

  removeDupplicate() {
    const ingredientObject = new Set(this.ingredientsArray);
    this.ingredientsArray = Array.from(ingredientObject);

    const applianceObject = new Set(this.applianceArray);
    this.applianceArray = Array.from(applianceObject);

    const ustensilsObject = new Set(this.ustensilsArray);
    this.ustensilsArray = Array.from(ustensilsObject);
  }
}
