import {} from "../index.js";
import { recipes } from "../data/recipes.js";

export class ButtonMenuFactory {
  constructor() {
    this.ingredients = new Set();
    this.appliance = new Set();
    this.ustensils = new Set();
    this.workArrayForButton();
    this.buildButton();
  }

  buildButton() {
    const buttonIngredientsList = document.querySelector(
      ".dropdown-menu__ingredients"
    );
    //console.log(this.ingredientsArray);
    const listIngredients = Array.from(this.ingredients).sort();
    console.log(listIngredients);
    listIngredients.forEach((e) => {
      const elt = `<li class="dropdown-menu__item data-filter="ingredients">${e}</li>`;
      buttonIngredientsList.innerHTML += elt;
    });

    const buttonApplianceList = document.querySelector(
      ".dropdown-menu__appliances"
    );
    //console.log(this.applianceArray);
    const listAppliance = Array.from(this.appliance).sort();
    console.log(listAppliance);
    listAppliance.forEach((e) => {
      const elt = `<li class="dropdown-menu__item data-filter="appliances">${e}</li>`;
      buttonApplianceList.innerHTML += elt;
    });

    //buttonApplianceList.innerHTML = `${this.applianceArray.sort().join("")}`;

    const buttonUstensilsList = document.querySelector(
      ".dropdown-menu__ustensils"
    );
    //console.log(this.ustensilsArray);
    const listUstensils = Array.from(this.ustensils).sort();
    console.log(listUstensils);
    listUstensils.forEach((e) => {
      const elt = `<li class="dropdown-menu__item data-filter="ustensils">${e}</li>`;
      buttonUstensilsList.innerHTML += elt;
    });
  }

  workArrayForButton() {
    recipes.forEach((recipe) => {
      this.appliance.add(recipe.appliance);
      recipe.ingredients.forEach((i) => {
        this.ingredients.add(i.ingredient);
      });
      recipe.ustensils.forEach((i) => {
        this.ustensils.add(i);
      });
    });
  }
}


