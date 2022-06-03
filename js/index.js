import {} from './dropdown/dropdown.js'
import { filterField } from './Filter/principalField.js'
import {Recipe} from './factory/Recipe.js'
import { ButtonMenuFactory} from './factory/ButtonFactory.js'
import {recipes} from './data/recipes.js';

// INITIALISATION DE LA PAGE D'ACCUEIL

//AFFICHAGE DES 50 RECETTES
recipes.forEach((recipe) => {
    const recipeDisplay = new Recipe(recipe);
    recipeDisplay.buildCard(recipes);   
});

//AFFICHAGE DES DONNEES TOTALES DANS LES LISTES DES 3 BOUTONS
const buttonMenuFactory = new ButtonMenuFactory()
buttonMenuFactory.workArrayForButton(recipes)
  
// ACCES A LA FONCTION DE TRI DU CHAMP PRINCIPAL
filterField()

