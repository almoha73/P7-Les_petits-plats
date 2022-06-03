import {recipes} from '../data/recipes.js'

console.log(recipes);

// FONCTION FILTRATION DES CARTES EN FONCTION INGREDIENTS/NOM/DESCRIPTION

export function filterField(){
    // Filtre et affichage des cartes champ principal pour lettres > 2 / reset inférieur à 2
    
    const container = document.querySelector('.fluid-grid')
    //console.log(container);
    const recipeCards = Array.from(document.querySelectorAll('.card'))
    //console.log(recipeCards);
    const formControl = document.querySelector('.form-control')
    //console.log(formControl);
    const recipeCardsCopy = recipeCards.slice()

    formControl.addEventListener('input', (e) => {
        /// tri a partir des cartes affichees
        const filterValue = e.target.value.toLowerCase();
            for(let i = 0; i < recipeCardsCopy.length; i++){
                if(filterValue.length > 2){
                
                    if(!recipeCardsCopy[i].textContent.toLowerCase().includes(filterValue)){  
                        recipeCardsCopy[i].remove()
                        recipeCards.pop(recipeCardsCopy[i])   
                    }
                    
                }else{
                    container.append(recipeCardsCopy[i])
                }
            
            }

        console.log(recipeCards);


        // essai de tri dans la console à partir de l'objet recipe et de la valeur tapée dans l'input    
            let recipeArray = []
            
            recipeArray.push(recipes.filter(recipe => recipe.name.includes(filterValue)))
            console.log(recipes.filter(recipe => recipe.name.includes(filterValue.toLowerCase())))

            recipeArray.push(recipes.filter(recipe => recipe.description.includes(filterValue.toLowerCase())))
            console.log(recipes.filter(recipe => recipe.description.includes(filterValue.toLowerCase())))

            recipeArray.push(recipes.filter(recipe => recipe.ingredients.find(({ingredient}) =>  ingredient.includes(filterValue.toLowerCase()))))
            console.log(recipes.filter(recipe => recipe.ingredients.find(({ingredient}) =>  ingredient.toLowerCase().includes(filterValue.toLowerCase()))))

            
            console.log(recipeArray);

            function concat(array){
                for(let i = 0; i< array.length; i++){
                    array[i].concat(array[i++])
                    console.log(array);
                }
                return array;
            }
            concat(recipeArray)
            
            console.log(recipeArray);

            const newRecipeArray = new Set(recipeArray)
            console.log(newRecipeArray);
            
        
    })
    
}

