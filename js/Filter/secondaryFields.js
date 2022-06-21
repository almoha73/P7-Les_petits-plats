
import { globalFunctions } from '../utils/globalFunctions.js';
import { Tags } from '../Tags/tag.js';
import { variables } from '../utils/variables.js';

import { recettes } from '../index.js'
import { ingredientsArray, AllIds } from '../utils/data.js'



 
let ingredientsArrayCopy = ingredientsArray
console.log(ingredientsArrayCopy);

let allRecipeIdArray = []//tableau des ID des 50 recettes
let tagArray = []//tableau qui stoque les array des ID différents tags (ID des 50 recettes compris)
let intersection; // tableau qui stoque l'intersection des ID du tagArray
let removeDuplicate;
let ingredientsArrayFiltered;// tableau qui stoque les objets d'ingredientsArray filtrés en fonction du lien cliqué
let newArray = []// tableau des ID des objets d'ingredientsArray filtrés avec possible doublons
let uniqueArr; // tableau des ID des objets d'ingredientsArray filtrés sans doublons
let recipesArray = [] //nouveau tableau d'objet (avec la structure de recipes) filtré à partir des ID du tableau uniqueArr

//tagArray.push(AllIds)
console.log(tagArray);
    
export function filterIngredients(){
    let liste = Array.from(
        document.querySelectorAll(
          ".dropdown-menu__ingredients .dropdown-menu__item"
        )
      );
    
    //console.log(liste);
        liste.forEach(elt => {
            elt.addEventListener('click', (e) => {
                console.log(e.target);
                let filterValue = e.target.innerHTML
                console.log(filterValue);
                listeA(filterValue)
                filterIngredients()
                
       
                
            })   
           
        })
         closeTag()
    }

function listeA(filterValue){
        //filtrage du tableau ingredientsArray en fonction du lien cliqué et récupération des ID
        //console.log(ingredientsArrayCopy);
        ingredientsArrayFiltered = ingredientsArrayCopy.filter(elt => elt.name.toLowerCase().includes(filterValue.toLowerCase()))
        
        console.log(ingredientsArrayFiltered);
        newArray = []
        for(let el of ingredientsArrayFiltered){
                newArray.push(el.id)

                newArray = newArray.flat()
        uniqueArr = [...new Set(newArray)]
        
        }
        //tagArray = []
        tagArray.push(uniqueArr)
        
        console.log(tagArray);
        intersection = []
        console.log(intersection);
        intersection = globalFunctions.intersection(intersection, tagArray);
        console.log(intersection);
        recipesArray = []
        recipesArray = globalFunctions.newIntersectionObj(intersection, recipesArray)
        console.log(recipesArray);


       //globalFunctions.display(recipesArray)
        globalFunctions.buttonReset()
        globalFunctions.buttonListPreview(recipesArray)
        
        globalFunctions.recipesPreview(recipesArray)
        const tag = new Tags(filterValue, 'ingredients')
        tag.buildTag()
        
       
       
 }
    



function closeTag(){
    
    let filterListIngredients = Array.from(document.querySelectorAll('.filter-list__item-ingredients'))
            console.log(filterListIngredients);
       
        for(let i = 0; i < filterListIngredients.length; i++){
            
                filterListIngredients[i].addEventListener('click', (e) => {
                    e.target.remove()
                   
                    console.log(tagArray);
                  
                    if(filterListIngredients.length > 2) {
                        
                        tagArray = tagArray.filter(elt => elt !== tagArray[i])
                        console.log(tagArray);
                        recipesArray = []
                        intersection = []
                        //tagArray[i] = AllIds
                        intersection = globalFunctions.intersection(intersection, tagArray);
                        console.log(intersection);
                       
                        recipesArray = globalFunctions.newIntersectionObj(intersection, recipesArray)
                        console.log(recipesArray);
                        
                        globalFunctions.display(recipesArray)
                        
                        filterIngredients()
                    }   
                    
                    if(filterListIngredients.length === 2){
                       
                        if(filterListIngredients[i] === filterListIngredients[0]){
                            tagArray = tagArray[1]
                            recipesArray = []
                            console.log(tagArray); 
                            recipesArray = globalFunctions.newIntersectionObj(tagArray, recipesArray)
                        console.log(recipesArray);
                        globalFunctions.display(recipesArray)
                        filterIngredients()
                        }else if(filterListIngredients[i] === filterListIngredients[1]){
                            
                            tagArray = tagArray[0]
                            recipesArray = []
                            console.log(tagArray); 
                            recipesArray = globalFunctions.newIntersectionObj(tagArray, recipesArray)
                        console.log(recipesArray);
                        globalFunctions.display(recipesArray)
                        
                        filterIngredients()
                        }
   
                    }
                    if(filterListIngredients.length === 1){
                        
                        tagArray = AllIds
                            recipesArray = []
                            console.log(tagArray); 
                            recipesArray = globalFunctions.newIntersectionObj(tagArray, recipesArray)
                        console.log(recipesArray);
                        globalFunctions.display(recipesArray)
                        
                        tagArray = []
                        filterIngredients()
                    }
                    
                    if(filterListIngredients === undefined){
                        globalFunctions.display(recettes)
                        filterIngredients()
                    }
                    

                })          
                
                
     
    
        }
        
}

        
        
    


//filterIngredients() 

