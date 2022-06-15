import { ingredientsArray, ustensiles, appareils, recipeTextArray, AllIds } from "../utils/arrays.js";
import {} from '../index.js'
import { variables } from "../utils/variables.js";
import { recipes } from "../data/recipes.js";
import { globalFunctions } from "../utils/globalFunctions.js";
import { filterIngredients} from '../Filter/secondaryFields.js'

console.log(ingredientsArray, appareils, ustensiles, recipeTextArray);

export function filterPrincipalField(){
  variables.formControl.addEventListener('input', (e) => {
    const filterValue = e.target.value.trim().toLowerCase()
    console.log(filterValue);
    if(filterValue.length > 2){
        const array1 = recipeTextArray.filter(elt => elt.text.includes(filterValue))
        console.log(array1);
        
       let recipesArray = []
       let tagArray = []
       let filterElementId = []
       let intersection;
          for(let el of array1){
            let newRecipeArray = recipes.filter(elt => elt.id === el.id)
          console.log(newRecipeArray);
          recipesArray.push(newRecipeArray)
          filterElementId.push(el.id)
        } 
          tagArray.push(AllIds)
          tagArray.push(filterElementId)
          console.log(tagArray);
          recipesArray = recipesArray.flat();
          console.log(recipesArray);
          
          //tagArray = tagArray.flat()
         
          globalFunctions.display(recipesArray)
          filterIngredients()
  
    }else{
      globalFunctions.display(recipes)
      
    }
        
  })
}









  