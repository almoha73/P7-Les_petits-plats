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

    formControl.addEventListener('input', (e) => {
        const filterValue = e.target.value.toLowerCase();
            for(let i = 0; i < recipeCards.length; i++){
                if(filterValue.length > 2){
                
                    if(!recipeCards[i].textContent.toLowerCase().includes(filterValue)){
                        
                        recipeCards[i].remove()   
                    }
                    
                }else{
                    container.append(recipeCards[i])
                }
            
            }

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

