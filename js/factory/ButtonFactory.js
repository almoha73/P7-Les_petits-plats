import {} from "../index.js";
import { recipes } from "../data/recipes.js";
import { variables } from "../utils/variables.js";

export class ButtonMenuFactory {
  constructor() {
    this.ingredients = new Set();
    this.appliance = new Set();
    this.ustensils = new Set();
    //this.buildButton();
  }

  buildButton() {
    
    //console.log(this.ingredientsArray);
    const listIngredients = Array.from(this.ingredients).sort();
    //console.log(listIngredients);
    listIngredients.forEach((e) => {
      const elt = `<li class="dropdown-menu__item" data-filter="ingredients">${e}</li>`;
      variables.buttonIngredientsList.innerHTML += elt;
    });
    
    const listAppliance = Array.from(this.appliance).sort();
    //console.log(listAppliance);
    listAppliance.forEach((e) => {
      const elt = `<li class="dropdown-menu__item" data-filter="appliances">${e}</li>`;
    variables.buttonApplianceList.innerHTML += elt;
    });

    //console.log(this.ustensilsArray);
    const listUstensils = Array.from(this.ustensils).sort();
    //console.log(listUstensils);
    listUstensils.forEach((e) => {
      const elt = `<li class="dropdown-menu__item" data-filter="ustensils">${e}</li>`;
    variables.buttonUstensilsList.innerHTML += elt;
    });
  }

  workArrayForButton(array) {
    array.forEach((recipe) => {
      this.appliance.add(recipe.appliance);
      recipe.ingredients.forEach((i) => {
        this.ingredients.add(i.ingredient);
      });
      recipe.ustensils.forEach((i) => {
        this.ustensils.add(i);
      });
    });
    this.buildButton()
  }
  
}


