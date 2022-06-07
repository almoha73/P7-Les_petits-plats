import {} from './dropdown/dropdown.js'
import { filterPrincipalField } from './Filter/principalField.js';
import { filterSecondaryField } from './Filter/secondaryFields.js';
import {Recipe} from './factory/Recipe.js'
import { ButtonMenuFactory} from './factory/ButtonFactory.js'
import {recipes} from './data/recipes.js';
import {globalFunctions} from './utils/globalFunctions.js'
import {variables} from './utils/variables.js'
// INITIALISATION DE LA PAGE D'ACCUEIL

//AFFICHAGE DES 50 RECETTES
globalFunctions.recipesPreview(recipes)

//AFFICHAGE DES DONNEES TOTALES DANS LES LISTES DES 3 BOUTONS
globalFunctions.buttonListPreview(recipes)
  
// ACCES A LA FONCTION DE TRI DU CHAMP PRINCIPAL
filterPrincipalField()

