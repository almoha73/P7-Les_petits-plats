import { loadData } from "../utils/data.js";
import { variables } from "../utils/variables.js";

import { recettes } from "../index.js";
import { globalFunctions } from "../utils/globalFunctions.js";
import { filter} from './secondaryFields.js'

import {
  ingredientsArray,
  AllIds,
  appareils,
  ustensiles,
  recipeTextArray
} from "../utils/data.js";






export const  filterPrincipalField = () => {
  
  variables.formControl.addEventListener('keyup', (e) => {
    let filterValue = e.target.value.trim().toLowerCase()
    if(filterValue.length > 2){
      let array = makeTagArray(filterValue)
      globalFunctions.display(array.recipesArray)
    console.log(array);
    filter()
    return array.tagArray
  }
 
})
}





export function makeTagArray(filterValue){
  
        const array1 = recipeTextArray.filter(elt => elt.text.includes(filterValue))
        console.log(array1);
        
       let recipesArray = []
       let tagArray = []
       let filterElementId = []
      
          for(let el of array1){
            let newRecipeArray = recettes.filter(elt => elt.id === el.id)
          console.log(newRecipeArray);
          recipesArray.push(newRecipeArray)
          filterElementId.push(el.id)
        }  
          tagArray.push(filterElementId)
          console.log(tagArray);
          recipesArray = recipesArray.flat();
          console.log(recipesArray);
        return {tagArray, recipesArray}      
     
  }




  