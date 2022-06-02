import {} from './dropdown/dropdown.js'
import { filterField } from './Filter/principalField.js'
import {RecipeDisplay} from './factory/Recipe.js'
import { ButtonMenuFactory} from './factory/ButtonFactory.js'
import {recipes} from './data/recipes.js';

recipes.forEach((recipe) => {
    const recipeDisplay = new RecipeDisplay(recipe);
    recipeDisplay.buildCard();
  });

filterField()

const buttonMenuFactory = new ButtonMenuFactory()





