import { recipes } from "../data/recipes.js";
//import { Recipe } from "../factory/Recipe.js";
//import { ButtonMenuFactory } from "../factory/ButtonFactory.js";
import { variables } from "../utils/variables.js";
import { globalFunctions } from "../utils/globalFunctions.js";
import { filterSecondaryField } from "./secondaryFields.js";
import {} from '../index.js'
// tri dans la console à partir de l'objet recipe et de la valeur tapée dans l'input


export function filterPrincipalField() {
  variables.formControl.addEventListener("input", (e) => {
    const filterValue = e.target.value.trim().toLowerCase();

    //création nouveau tableau d'objets filtré par nom ou par description ou par ingrédient en fonction de la valeur de l'input
    const newArray = globalFunctions.recipeConcat(recipes, filterValue)

    if (filterValue.length > 2) {
      //On vide le container des cartes
      //On affiche les nouvelles cartes en fonction du nouveau tableau généré par le tri
      //On affiche les tris dans les boutons en fonction du nouveau tableau généré par le tri
      globalFunctions.display(newArray)
     
    } else {
       //sinon on affiche les 50 cartes 
       globalFunctions.display(recipes)
    }
    console.log(newArray);
    filterSecondaryField(newArray)
  })

  
}  
filterSecondaryField(recipes)
  //   function secondField(){
  //        variables.inputIngredient.addEventListener("input", (e) => {
  //       let filterValue2 = e.target.value.trim().toLowerCase();
  //       const ingredientArray = newArray.filter(recipe => globalFunctions.filterIngredients(recipe, filterValue2));
  //       console.log(ingredientArray);
  //       variables.container.innerHTML = "";
  //       globalFunctions.display(ingredientArray)
  //       globalFunctions.buttonReset()
  //       globalFunctions.buttonIngredientListPreview(ingredientArray, filterValue2)        
  //       const cards = Array.from(document.querySelectorAll('.card'))
  //       console.log(cards);
  //       const liste = Array.from(
  //       document.querySelectorAll(
  //         ".dropdown-menu__ingredients .dropdown-menu__item"
  //       )
  //     )
  //     console.log(liste);  
      
      

  //     if(document.querySelector(".form-control-primary").value.trim() === ''){
        
  //       filterSecondaryField()
  //     } else{
  //       liste.forEach(elt => {
  //         elt.addEventListener('click', (e) => {
  //           console.log(e.target.innerHTML)
  //           let filterValue3 = e.target.innerHTML
  //           console.log(filterValue3);
  //           document.querySelector(".form-control-ingredient").value = filterValue3
  //           console.log(ingredientArray);
  //           const ingredientArray2 = ingredientArray.filter(recipe => globalFunctions.filterIngredients(recipe, filterValue3.toLowerCase()));
  
  //           console.log(ingredientArray2);
  //           globalFunctions.display(ingredientArray2)
  //         })
  
  
          
          
  //       })
  //     }
          
  //   })

      
       
  //   }
  //   secondField()
   
  // })

    
 

// FONCTION FILTRATION DES CARTES EN FONCTION INGREDIENTS/NOM/DESCRIPTION

// export function filterField(){
//     // Filtre et affichage des cartes champ principal pour lettres > 2 / reset inférieur à 2

//     const container = document.querySelector('.fluid-grid')
//     //console.log(container);
//     const recipeCards = Array.from(document.querySelectorAll('.card'))
//     //console.log(recipeCards);
//     const formControl = document.querySelector('.form-control')
//     //console.log(formControl);
//     const recipeCardsCopy = recipeCards.slice()

//     formControl.addEventListener('input', (e) => {
//         /// tri a partir des cartes affichees
//         const filterValue = e.target.value.toLowerCase();
//             for(let i = 0; i < recipeCardsCopy.length; i++){
//                 if(filterValue.length > 2){

//                     if(!recipeCardsCopy[i].textContent.toLowerCase().includes(filterValue)){
//                         recipeCardsCopy[i].remove()
//                         recipeCards.pop(recipeCardsCopy[i])
//                     }

//                 }else{
//                     container.append(recipeCardsCopy[i])
//                 }

//             }

//         //console.log(recipeCards);
//     })

// }
