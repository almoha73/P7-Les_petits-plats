import { recipes } from "../data/recipes.js";
import {Appareil} from '../factory/Appareil.js'
import {Ustensils} from '../factory/Ustensils.js'
import {Ingredients} from '../factory/Ingredients.js'
import { TextCard} from '../factory/text.js'



console.log(recipes);
let AllIds = [];
var ingredientsArray=[];
let appareils=[];
let ustensiles=[];


recipes.forEach(recipe => {
  const {id, appliance, ustensils, ingredients} = recipe

 AllIds.push(id)
  
  // Tableau correspondance des ids des recettes pour chaque appareil par ordre alphabétique
  const app = getAppareil(appliance)
  
  if(app != undefined){
    app.id.push(id)
  }else {
    const appl = new Appareil(appliance, [id])
    appareils.push(appl)
    const ap = appareils.sort(SortArray)
    appareils = ap
  }

  // Tableau correspondance des ids des recettes pour chaque ustensile par ordre alphabétique
 for(let u of ustensils){
  const ustens = getUstensils(u)
  if(ustens != null){
    ustens.id.push(id)
  }else{
    const ust = new Ustensils(u, [id])
    ustensiles.push(ust)
    const us = ustensiles.sort(SortArray)
    ustensiles = us
  }
 }

 // Tableau correspondance des ids des recettes pour chaque ingredient par ordre alphabétique

 

 for(let i of ingredients){    
   const ingred = getIngredients(i.ingredient)
   if(ingred != undefined){
    ingred.id.push(id)
   }else{
    ingredientsArray.push(new Ingredients(i.ingredient, [id]))
    const ing = ingredientsArray.sort(SortArray)
    ingredientsArray = ing
   } 
 }


 
})

//////////////////////////////
let recipeTextArray= []



recipes.forEach(recipe => {    
   const{ingredients} = recipe
    const i = ingredients.map(ing => ing.ingredient.toLowerCase())
    
    recipeTextArray.push(new TextCard(recipe.id, recipe.name.toLowerCase().concat(',').concat(i).concat(',').concat(recipe.description.toLowerCase())))  
})

function SortArray(x, y){
  return x.name.localeCompare(y.name);
}
function getAppareil(string){
  return appareils.find(e => e.name === string)
}

function getUstensils(string){ 
    return ustensiles.find(e => e.name === string)
   
}

function getIngredients(string){
  return ingredientsArray.find(e => e.name === string)
}



 export {ingredientsArray, appareils, ustensiles, recipeTextArray, AllIds}
