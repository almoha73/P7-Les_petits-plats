import { loadData } from "../utils/data.js";
import { variables } from "../utils/variables.js";

import { recettes } from "../index.js";
import { globalFunctions } from "../utils/globalFunctions.js";
import { filter} from '../Filter/secondaryFields.js'

import {
  ingredientsArray,
  AllIds,
  appareils,
  ustensiles,
  recipeTextArray
} from "../utils/data.js";



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
      
          for(let el of array1){
            let newRecipeArray = recettes.filter(elt => elt.id === el.id)
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
          
          filter()
  
    }else{
      globalFunctions.display(recettes)
      
    }
        
  })
}








  