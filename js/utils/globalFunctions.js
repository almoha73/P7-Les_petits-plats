import { Recipe } from "../factory/Recipe.js";
import { ButtonMenuFactory } from "../factory/ButtonFactory.js";
import { variables } from "./variables.js";
import { recipes } from "../data/recipes.js";

export const globalFunctions = {
  recipesPreview(array) {
    variables.container.innerHTML = "";
    array.forEach((recipe) => {
      const recipeDisplay = new Recipe(recipe);
      recipeDisplay.buildCard();
    });
    
  },

  intersection(intersectionArray, array){
    intersectionArray = array.reduce((a, b) => a.filter(c => b.includes(c)))
    return intersectionArray
  },

  newIntersectionObj(intersectionArray, array1){
    for(let el of intersectionArray){
      let newRecipeArray = recipes.filter(elt => elt.id === el)
      array1.push(newRecipeArray)
    }
   return array1 = array1.flat()
    
  },

  buttonListPreview(array) {
    const buttonMenuFactory = new ButtonMenuFactory();
    buttonMenuFactory.workArrayForButton(array);
    buttonMenuFactory.buildButton()
    
  },

  buttonIngredientListPreview(array, filterValue){
    const buttonMenuFactory = new ButtonMenuFactory();
    buttonMenuFactory.buttonIngredientsByValue(array,filterValue)
  },
  buttonApplianceListPreview(array, filterValue){
    const buttonMenuFactory = new ButtonMenuFactory();
    buttonMenuFactory.buttonApplianceByValue(array,filterValue)
  },
  buttonUstensilsListPreview(array, filterValue){
    const buttonMenuFactory = new ButtonMenuFactory();
    buttonMenuFactory.buttonUstensilsByValue(array,filterValue)
  },
  buttonReset() {
    variables.buttonUstensilsList.innerHTML = "";
    variables.buttonIngredientsList.innerHTML = "";
    variables.buttonApplianceList.innerHTML = "";
  },

  // Fonction générale pour enlever les doublons d'un array d'objets
  duplicateRemove(array) {
    let newArray = [...new Set(array)];
    return newArray
  },

  filterIngredients(object, filterValue) {
    const n = object.ingredients.find(({ ingredient }) =>
      ingredient.toLowerCase().includes(filterValue)
    );
    if (n) {
        console.log(n);
      return true;
    } else return false;
  },


  display(array){
        variables.container.innerHTML = "";
        globalFunctions.recipesPreview(array);
        globalFunctions.buttonReset();
        globalFunctions.buttonListPreview(array);
  },

  

  // recipeConcat(array, filterValue){
  //   const array1 = array.filter(
  //       (recipe) =>
  //         recipe.name.toLowerCase().includes(filterValue) ||
  //         recipe.description.toLowerCase().includes(filterValue) ||
  //         globalFunctions.filterIngredients(recipe, filterValue)
  //     )
  //     return array1
  // }
  
};
