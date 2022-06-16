import { variables } from '../utils/variables.js'
import { recipes } from '../data/recipes.js';
import {} from '../index.js'
import { Recipe } from '../factory/Recipe.js';
//import { ingredientsArray, ustensiles, appareils, recipeTextArray, AllIds, makeIngredient} from "../utils/arrays.js";
import { globalFunctions } from '../utils/globalFunctions.js';
import { Tags } from '../Tags/tag.js';
import { ButtonMenuFactory } from '../factory/ButtonFactory.js'
import { makeIngredient, AllIds} from '../utils/arrays.js'

globalFunctions.display(recipes)

let ingredientsArray = []

//let ingredientsArrayCopy = ingredientsArray;
let allRecipeIdArray = []//tableau des ID des 50 recettes
let tagArray = []//tableau qui stoque les array des ID différents tags (ID des 50 recettes compris)
let intersection; // tableau qui stoque l'intersection des ID du tagArray
let removeDuplicate;
let ingredientsArrayFiltered;// tableau qui stoque les objets d'ingredientsArray filtrés en fonction du lien cliqué
let newArray = []// tableau des ID des objets d'ingredientsArray filtrés avec possible doublons
let uniqueArr; // tableau des ID des objets d'ingredientsArray filtrés sans doublons
let recipesArray = [] //nouveau tableau d'objet (avec la structure de recipes) filtré à partir des ID du tableau uniqueArr

tagArray.push(AllIds)

ingredientsArray = makeIngredient(recipes)

let liste = Array.from(
    document.querySelectorAll(
      ".dropdown-menu__ingredients .dropdown-menu__item"
    ))
console.log(liste);

export function filterIngredients(){
    
        liste.forEach(elt => {
   
            elt.addEventListener('click', (e) => {
                let filterValue = e.target.innerHTML
                
                listeA(filterValue)
                liste = Array.from(
                    document.querySelectorAll(
                      ".dropdown-menu__ingredients .dropdown-menu__item"
                    ))
                console.log(liste);
                filterIngredients()
                
                
            })
            
                
        })
        
    }

function listeA(filterValue){
        //filtrage du tableau ingredientsArray en fonction du lien cliqué et récupération des ID
        
        ingredientsArrayFiltered = ingredientsArray.filter(elt => elt.name.toLowerCase().includes(filterValue.toLowerCase()))
        console.log(ingredientsArray);
        console.log(ingredientsArrayFiltered);
        newArray = []
        for(let el of ingredientsArrayFiltered){
                newArray.push(el.id)

                newArray = newArray.flat()
        uniqueArr = [...new Set(newArray)]
        
        }
        tagArray = []
        tagArray.push(uniqueArr)
        //tagArray.flat()
        console.log(tagArray);
        intersection = []
        intersection = globalFunctions.intersection(intersection, tagArray);
        console.log(intersection);
        recipesArray = []
        recipesArray = globalFunctions.newIntersectionObj(intersection, recipesArray)
        console.log(recipesArray);

        ingredientsArray = makeIngredient(recipesArray)
        globalFunctions.buttonReset()
        globalFunctions.buttonListPreview(recipesArray)
        
        globalFunctions.recipesPreview(recipesArray)
        const tag = new Tags(filterValue, 'ingredients')
        tag.buildTag()
        
     
        closeTag()
        
       
        console.log(ingredientsArray);

       
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

      
}

filterIngredients() 

