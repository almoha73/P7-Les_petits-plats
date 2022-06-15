import { variables } from '../utils/variables.js'
import { recipes } from '../data/recipes.js';
import {} from '../index.js'
import { Recipe } from '../factory/Recipe.js';
import { ingredientsArray, ustensiles, appareils, recipeTextArray, AllIds } from "../utils/arrays.js";
import { globalFunctions } from '../utils/globalFunctions.js';
import { Tags } from '../Tags/tag.js';
import { ButtonMenuFactory } from '../factory/ButtonFactory.js'

let ingredientsArrayCopy = ingredientsArray
let allRecipeIdArray = []//tableau des ID des 50 recettes
let tagArray = []//tableau qui stoque les array des ID différents tags (ID des 50 recettes compris)
let intersection; // tableau qui stoque l'intersection des ID du tagArray
let removeDuplicate;
let ingredientsArrayFiltered;// tableau qui stoque les objets d'ingredientsArray filtrés en fonction du lien cliqué
let newArray = []// tableau des ID des objets d'ingredientsArray filtrés avec possible doublons
let uniqueArr; // tableau des ID des objets d'ingredientsArray filtrés sans doublons
let recipesArray = [] //nouveau tableau d'objet (avec la structure de recipes) filtré à partir des ID du tableau uniqueArr

tagArray.push(AllIds)
export function filterIngredients(){
    
    let liste = Array.from(
        document.querySelectorAll(
          ".dropdown-menu__ingredients .dropdown-menu__item"
        ))
    
        liste.forEach(elt => {
   
            listeA(elt)
        
        })  
        
}

function listeA(elt){
    
    elt.addEventListener('click', (e) => {
        let filterValue = e.target.innerHTML
        //filtrage du tableau ingredientsArray en fonction du lien cliqué et récupération des ID
        ingredientsArrayFiltered = ingredientsArrayCopy.filter(elt => elt.name.toLowerCase().includes(filterValue.toLowerCase()))
        console.log(ingredientsArrayCopy);
        console.log(ingredientsArrayFiltered);
        
        for(let el of ingredientsArrayFiltered){
                newArray.push(el.id)

                newArray = newArray.flat()
        uniqueArr = [...new Set(newArray)]
        
        }
        
        tagArray.push(uniqueArr)
        //tagArray.flat()
        console.log(tagArray);
        intersection = globalFunctions.intersection(intersection, tagArray);
        console.log(intersection);
        
        recipesArray = globalFunctions.newIntersectionObj(intersection, recipesArray)
       console.log(recipesArray);
        globalFunctions.buttonReset()
        globalFunctions.buttonListPreview(recipesArray)
        
        globalFunctions.recipesPreview(recipesArray)
        const tag = new Tags(filterValue, 'ingredients')
        tag.buildTag()
        
        closeTag()
        tagArray = []
        
    })
    
}

function closeTag(){
    const filterListIngredients = document.querySelector('.filter-list__item-ingredients')
        console.log(filterListIngredients);
        tagArray = tagArray.flat()
        console.log(tagArray);
        tagArray = [...new Set(tagArray)]
        console.log(tagArray);
        recipesArray = []
        recipesArray = globalFunctions.newIntersectionObj(tagArray, recipesArray)
        console.log(recipesArray);

        filterListIngredients.addEventListener('click', (e) => {
            globalFunctions.display(recipesArray)
            filterListIngredients.style.display = 'none'
        })

       filterIngredients() 
}



