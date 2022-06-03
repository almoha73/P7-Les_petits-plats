import {recipes} from '../data/recipes.js'
import {Recipe} from '../factory/Recipe.js'
import {ButtonMenuFactory} from '../factory/ButtonFactory.js'
console.log(recipes);

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
    const formControl = document.querySelector('.form-control')
    const recipeCards = Array.from(document.querySelectorAll('.card'))
//     //console.log(recipeCards);
const container = document.querySelector('.fluid-grid')
const buttonUstensilsList = document.querySelector(
    ".dropdown-menu__ustensils"
  );
//     //console.log(container);
    formControl.addEventListener('input', (e) => {
    let recipeName;
    let recipeDescription;
    let recipeIngredients
    const filterValue = e.target.value.trim().toLowerCase();
    //création nouveau tableau d'objets filtré par nom en fonction de la valeur de l'input
    recipeName = recipes.filter(recipe => recipe.name.toLowerCase().includes(filterValue))
    console.log(recipeName)
    
    //création nouveau tableau d'objets filtré par description en fonction de la valeur de l'input
    recipeDescription = recipes.filter(recipe => recipe.description.toLowerCase().includes(filterValue))
    console.log(recipeDescription)

    //création nouveau tableau d'objets filtré par ingreédient en fonction de la valeur de l'input
    recipeIngredients = recipes.filter(recipe => recipe.ingredients.find(({ingredient}) =>  ingredient.toLowerCase().includes(filterValue)))
    console.log(recipeIngredients);
    
    //concaténation des trois tableaux précédents
    const recipeConcat = recipeName.concat(recipeDescription, recipeIngredients)
    console.log(recipeConcat);

        if(filterValue.length > 2){
    
           /// fonction remove duplicate objets dans un array
            const seen = new Set
            const filteredArr = recipeConcat.filter(el => {
                const duplicate = seen.has(el.id);
                seen.add(el.id);
               
                return !duplicate;
                
            })
            
            console.log(filteredArr);// nouveau tableau d'objet trié et sans doublons

            //On vide le container des cartes
            container.innerHTML = ''

            //On affiche les nouvelles cartes en fonction du nouveau tableau généré par le tri
            filteredArr.forEach((recipe) => {    
                const recipeDisplay = new Recipe(recipe);
                recipeDisplay.buildCard();
                
            });
            //On affiche les tris dans les boutons en fonction du nouveau tableau généré par le tri
            buttonUstensilsList.innerHTML=''
            const buttonMenuFactory = new ButtonMenuFactory()
                buttonMenuFactory.workArrayForButton(filteredArr)
        }
        

            
    })
}


// Fonction générale pour enlever le doublons d'un array

function duplicateRemove(array, newArray){
    newArray = [...new Set(array)];
    
}
    