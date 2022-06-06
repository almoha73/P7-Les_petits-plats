import {recipes} from '../data/recipes.js'
import {Recipe} from '../factory/Recipe.js'
import {ButtonMenuFactory} from '../factory/ButtonFactory.js'
console.log(recipes);
import { variables } from '../utils/variables.js';
import { globalFunctions } from '../utils/globalFunctions.js';

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




// essai de tri dans la console à partir de l'objet recipe et de la valeur tapée dans l'input  

export function filterField(){
    variables.formControl.addEventListener('input', (e) => {
   
    const filterValue = e.target.value.trim().toLowerCase();
   
    //création nouveau tableau d'objets filtré par nom ou par description ou par ingrédient en fonction de la valeur de l'input

    const recipeConcat = recipes.filter(recipe => (recipe.name.toLowerCase().includes(filterValue))|| (recipe.description.toLowerCase().includes(filterValue)) || filterInIngredients(recipe, filterValue))
    console.log(recipeConcat)

        if(filterValue.length > 2){

            //On vide le container des cartes
            variables.container.innerHTML = ''

            //On affiche les nouvelles cartes en fonction du nouveau tableau généré par le tri
            globalFunctions.recipesPreview(recipeConcat)
            //On affiche les tris dans les boutons en fonction du nouveau tableau généré par le tri
            globalFunctions.buttonReset()
            globalFunctions.buttonListPreview(recipeConcat)
            }else{
                variables.container.innerHTML = ''
                globalFunctions.buttonReset()
                globalFunctions.recipesPreview(recipeConcat)
                globalFunctions.buttonListPreview(recipes)
            }
        })        
    }


function filterInIngredients(r, filterValue){
    const n = (r.ingredients.find(({ingredient}) =>  ingredient.toLowerCase().includes(filterValue)))
    if(n){return true}else return false;
}



    