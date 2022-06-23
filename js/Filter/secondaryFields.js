//import { arr } from "./principalField.js";
import { recettes } from "../index.js";
import {
  ingredientsArray,
  AllIds,
  appareils,
  ustensiles,
} from "../utils/data.js";
import { makeTagArray} from "./principalField.js"
import { globalFunctions } from "../utils/globalFunctions.js";
import { Tags } from "../Tags/tag.js";
import { variables } from "../utils/variables.js";
//import { tagArray} from './principalField.js'


let tagArray;

export const  filterPrincipalField = () => {
  let filterList = document.querySelector('.filters-list')
  variables.formControl.addEventListener('keyup', (e) => {
    let filterValue = e.target.value.trim().toLowerCase()
    if(filterValue.length > 2){
      let array = makeTagArray(filterValue)
      globalFunctions.display(array.recipesArray)
    console.log(array);
 
    tagArray= array.tagArray
    
    filter()
    
  }else{
    globalFunctions.display(recettes)
    tagArray = []
    filterList.innerHTML = ''
    filter()
    
  }
})

}


let ingredientsArrayCopy = ingredientsArray;
let appareilsArrayCopy = appareils;
let ustensilesArrayCopy = ustensiles;
console.log(ingredientsArrayCopy, appareils, ustensiles);

let allRecipeIdArray = []; //tableau des ID des 50 recettes
 //tableau qui stoque les array des ID différents tags (ID des 50 recettes compris)
let intersection; // tableau qui stoque l'intersection des ID du tagArray
let removeDuplicate;
let arrayFiltered; // tableau qui stoque les objets d'ingredientsArray filtrés en fonction du lien cliqué
let newArray = []; // tableau des ID des objets d'ingredientsArray filtrés avec possible doublons
let uniqueArr; // tableau des ID des objets d'ingredientsArray filtrés sans doublons
let recipesArray = []; //nouveau tableau d'objet (avec la structure de recipes) filtré à partir des ID du tableau uniqueArr

//tagArray.push(AllIds)


export function filter() {
  let liste;
  

  if (
    (liste = Array.from(
      document.querySelectorAll(".dropdown-menu__item-ingredients")
    ))
  ) {
    //console.log(liste);
    liste.forEach((elt) => {
      elt.addEventListener("click", (e) => {
        console.log(e.target);
        let filterValue = e.target.innerHTML;
        console.log(filterValue, ingredientsArrayCopy, "ingredients");
        listeA(filterValue, ingredientsArrayCopy, "ingredients");
        filter()
        
      });
    });
  }

  if (
    (liste = Array.from(
      document.querySelectorAll(".dropdown-menu__item-appliances")
    ))
  ) {
    //console.log(liste);
    liste.forEach((elt) => {
      elt.addEventListener("click", (e) => {
        console.log(e.target);
        let filterValue = e.target.innerHTML;

        listeA(filterValue, appareilsArrayCopy, "appliances");
        filter()
       
      });
    });
  }

  if (
    (liste = Array.from(
      document.querySelectorAll(".dropdown-menu__item-ustensils")
    ))
  ) {
    //console.log(liste);
    liste.forEach((elt) => {
      elt.addEventListener("click", (e) => {
        console.log(e.target);
        let filterValue = e.target.innerHTML;

        listeA(filterValue, ustensilesArrayCopy, "ustensils");
        filter()
       
      });
      
    });
    closeTag();
  }


}

function listeA(filterValue, arrayCopy, type) {
  //filtrage du tableau ingredientsArray en fonction du lien cliqué et récupération des ID
  //console.log(ingredientsArrayCopy);
  arrayFiltered = arrayCopy.filter((elt) =>
    elt.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  console.log(arrayFiltered);
  newArray = [];
  for (let el of arrayFiltered) {
    newArray.push(el.id);

    newArray = newArray.flat();
    uniqueArr = [...new Set(newArray)];
  }
 console.log(tagArray);
    tagArray.push(uniqueArr);
 
  

  console.log(tagArray);
  intersection = [];
  intersection = globalFunctions.intersect(tagArray);
  console.log(intersection);
  recipesArray = [];
  recipesArray = globalFunctions.newIntersectionObj(intersection, recipesArray);
  console.log(recipesArray);

  //globalFunctions.display(recipesArray)
  globalFunctions.buttonReset();
  globalFunctions.buttonListPreview(recipesArray);

  globalFunctions.recipesPreview(recipesArray);
  const tag = new Tags(filterValue, type);
  tag.buildTag();

  
}

function closeTag() {
  let filterListItem = Array.from(document.querySelectorAll(`.filter-list__item`));
  console.log(filterListItem);
  let filterList = document.querySelector('.filters-list')
   
  filterListItem.forEach(elt => {
    elt.addEventListener("click", () => {

      if(filterListItem.length === tagArray.length){
        let index = filterListItem.indexOf(elt)
        console.log(index);
         elt.style.visibility = 'hidden'
         tagArray[index] = AllIds
       console.log(tagArray);
      }
       
      if(filterListItem.length < tagArray.length){
        let index = filterListItem.indexOf(elt) + 1
        console.log(index);
        console.log(tagArray);
         elt.style.visibility = 'hidden'
        tagArray[index] = tagArray[0]
        console.log(tagArray);
      }

      // if(filterListItem.length > tagArray){
      //   filterList.innerHTML = ''
      // }
      recipesArray = []
      intersection = []
      //tagArray[i] = AllIds
      intersection = globalFunctions.intersect(tagArray);
      console.log(intersection);
     
      // comparaison de tableaux
      const getResult = function (a1, a2) {
        var i = a1.length;
        if (i != a2.length) return false;
     
        while (i--) {
          if (a1[i] !== a2[i]) return false;
        }
        return true;
      };
      console.log(tagArray);
      if(getResult(intersection, AllIds) === true){
        globalFunctions.display(recettes)
        filterList.innerHTML = ''
        tagArray = []
        filter()
      }else{
        recipesArray = globalFunctions.newIntersectionObj(intersection, recipesArray)
        console.log(recipesArray);
        globalFunctions.display(recipesArray)
        filter()
      }

      
      })

      
  }) 
    
    
};
    
  
  




