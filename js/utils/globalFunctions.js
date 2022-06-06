
import { Recipe } from "../factory/Recipe.js";
import { ButtonMenuFactory } from "../factory/ButtonFactory.js";
import { variables } from "./variables.js";

export const globalFunctions = {
    recipesPreview(array){
        array.forEach((recipe) => {
            const recipeDisplay = new Recipe(recipe);
            recipeDisplay.buildCard();   
        });
    },

    buttonListPreview(array){
        const buttonMenuFactory = new ButtonMenuFactory()
        buttonMenuFactory.workArrayForButton(array)
    },

    buttonReset(){
        variables.buttonUstensilsList.innerHTML='';
        variables.buttonIngredientsList.innerHTML='';
        variables.buttonApplianceList.innerHTML='';
    },

    // Fonction générale pour enlever le doublons d'un array
    duplicateRemove(array, newArray){
    newArray = [...new Set(array)];
    
}
}