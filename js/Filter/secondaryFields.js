import { recipes } from "../data/recipes.js";
import { globalFunctions } from "../utils/globalFunctions.js";
import { variables } from "../utils/variables.js";
import { filterPrincipalField } from "./principalField.js";

console.log(recipes);
console.log(variables.inputIngredient);
export function filterSecondaryField() {
  /// utilisation du champ de l'input ingredient seul
    
  variables.inputIngredient.addEventListener("input", (e) => {
            const filterValue3 = e.target.value.trim().toLowerCase();
          console.log(filterValue3);
            const ingredientArray = recipes.filter(recipe => globalFunctions.filterIngredients(recipe, filterValue3));
            console.log(ingredientArray);
        
                if (filterValue3.length > 2) {
                //     variables.container.innerHTML = "";
                //   globalFunctions.recipesPreview(ingredientArray);
                //   globalFunctions.buttonReset()
                // globalFunctions.buttonIngredientListPreview(ingredientArray, filterValue)


                const liste = Array.from(
                  document.querySelectorAll(
                    ".dropdown-menu__ingredients .dropdown-menu__item"
                  )
                )
                    console.log(liste);
                liste.forEach(elt => {
                  elt.addEventListener('click', (e) => {
                    console.log(e.target.innerHTML)
                    let filterValue3 = e.target.innerHTML
                    console.log(filterValue3);
                    document.querySelector(".form-control-ingredient").value = filterValue3
                    console.log(ingredientArray);
                    const ingredientArray2 = ingredientArray.filter(recipe => globalFunctions.filterIngredients(recipe, filterValue3.toLowerCase()));
          
                    console.log(ingredientArray2);
                    globalFunctions.display(ingredientArray2)
                  })
              });
                }
          })  
            
        
          variables.inputAppliance.addEventListener("input", (e) => {
            const filterValue = e.target.value.trim().toLowerCase();
            const applianceArray = recipes.filter((recipe) =>
              recipe.appliance.toLowerCase().includes(filterValue)
            );
            console.log(applianceArray);
        
            if (filterValue.length > 2) {
              variables.container.innerHTML = "";
              globalFunctions.recipesPreview(applianceArray);
              globalFunctions.buttonReset()
             globalFunctions.buttonApplianceListPreview(applianceArray, filterValue)
            } 
          });
        
          variables.inputUstensil.addEventListener("input", (e) => {
            const filterValue = e.target.value.trim().toLowerCase();
            const ustensilArray = recipes.filter((recipe) =>
              recipe.ustensils.find(rec => rec.toLowerCase().includes(filterValue))
            );
            console.log(ustensilArray);
        
            if (filterValue.length > 2) {
              variables.container.innerHTML = "";
              globalFunctions.recipesPreview(ustensilArray);
              globalFunctions.buttonReset()
             globalFunctions.buttonUstensilsListPreview(ustensilArray, filterValue)
            } 
          });

      
        
  }


