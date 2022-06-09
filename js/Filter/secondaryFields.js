import { recipes } from "../data/recipes.js";
import { globalFunctions } from "../utils/globalFunctions.js";
import { variables } from "../utils/variables.js";
//import { filterPrincipalField } from "./principalField.js";

console.log(recipes);
console.log(variables.inputIngredient);
export function filterSecondaryField(array) {
  /// utilisation du champ de l'input ingredient seul
    
            variables.inputIngredient.addEventListener("input", (e) => {
            
                    function second(){

                      let filterValue = e.target.value.trim().toLowerCase();
          console.log(filterValue);
            let ingredientArray = array.filter(recipe => globalFunctions.filterIngredients(recipe, filterValue));
            console.log(ingredientArray);
        
                  variables.container.innerHTML = "";
                  variables.buttonIngredientsList.innerHTML = "";
                    globalFunctions.recipesPreview(ingredientArray)
                    globalFunctions.buttonIngredientListPreview(ingredientArray, filterValue)
                const liste = Array.from(
                  document.querySelectorAll(
                    ".dropdown-menu__ingredients .dropdown-menu__item"
                  )
                )
                    console.log(liste);
                    const cards= document.querySelectorAll(".card")
                    console.log(cards);
                      liste.forEach(elt => {
                        elt.addEventListener('click', (e) => {
                          console.log(e.target.innerHTML)
                         filterValue = e.target.innerHTML
                          console.log(filterValue);
                          document.querySelector(".form-control-ingredient").value = filterValue
                          console.log(ingredientArray);
                          let newingredientArray = ingredientArray.filter(recipe => globalFunctions.filterIngredients(recipe, filterValue.toLowerCase()));
                          console.log(newingredientArray);
                          variables.buttonIngredientsList.innerHTML = "";
                          variables.container.innerHTML = "";
                          globalFunctions.recipesPreview(newingredientArray)
                          globalFunctions.buttonIngredientListPreview(newingredientArray, filterValue)
                          globalFunctions.buttonReset()
                          globalFunctions.buttonListPreview(newingredientArray)
                          const cards= document.querySelectorAll(".card")
                          console.log(cards);
                          const liste = Array.from(
                            document.querySelectorAll(
                              ".dropdown-menu__ingredients .dropdown-menu__item"
                            )
                          )
                          console.log(liste);
                          if(cards.length > 1){
                            
                            second()
                          } 
                        })
                        
                      }) 
                      
                    }
                      
                    second()
                
              })   
  } 
  
  filterSecondaryField(recipes)

          // variables.inputAppliance.addEventListener("input", (e) => {
          //   const filterValue = e.target.value.trim().toLowerCase();
          //   const applianceArray = recipes.filter((recipe) =>
          //     recipe.appliance.toLowerCase().includes(filterValue)
          //   );
          //   console.log(applianceArray);
        
          //   if (filterValue.length > 2) {
          //     variables.container.innerHTML = "";
          //     globalFunctions.recipesPreview(applianceArray);
          //     globalFunctions.buttonReset()
          //    globalFunctions.buttonApplianceListPreview(applianceArray, filterValue)
          //   } 
          // });
        
          // variables.inputUstensil.addEventListener("input", (e) => {
          //   const filterValue = e.target.value.trim().toLowerCase();
          //   const ustensilArray = recipes.filter((recipe) =>
          //     recipe.ustensils.find(rec => rec.toLowerCase().includes(filterValue))
          //   );
          //   console.log(ustensilArray);
        
          //   if (filterValue.length > 2) {
          //     variables.container.innerHTML = "";
          //     globalFunctions.recipesPreview(ustensilArray);
          //     globalFunctions.buttonReset()
          //    globalFunctions.buttonUstensilsListPreview(ustensilArray, filterValue)
          //   } 
          // });

      
        
  


