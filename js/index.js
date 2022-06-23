
import { filterPrincipalField } from "./Filter/secondaryFields.js";
import { filter } from "./Filter/secondaryFields.js";
import { globalFunctions } from "./utils/globalFunctions.js";
import {} from "./dropdown/dropdown.js";
import { recipes } from "./data/recipes.js";
import { loadData } from "./utils/data.js";


export const recettes = recipes
console.log(recettes);
loadData()
globalFunctions.display(recettes)
filterPrincipalField();

filter()
