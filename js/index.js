import {} from './dropdown/dropdown.js'
import { filterField } from './Filter/principalField.js'
import {Recipe} from './factory/Recipe.js'
import { ButtonMenuFactory} from './factory/ButtonFactory.js'
import {recipes} from './data/recipes.js';

recipes.forEach((recipe) => {
    const recipeDisplay = new Recipe(recipe);
    recipeDisplay.buildCard();
  });

filterField()

const buttonMenuFactory = new ButtonMenuFactory()





