// #whXxOBlYS0H
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.

fetch (`https://dummyjson.com/recipes`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        let recipes = data.recipes
        console.log(recipes)

        let recipesDiv = document.createElement('div')
        for (const recipe of recipes) {
            let recipeDiv = document.createElement('div')


            recipeDiv.innerText = `
                "id": ${recipe.id},
                "name": ${recipe.name},
                "instructions": ${recipe.instructions},
                "prepTimeMinutes": ${recipe.prepTimeMinutes},
                "cookTimeMinutes": ${recipe.cookTimeMinutes},
                "servings": ${recipe.servings},
                "difficulty": ${recipe.difficulty},
                "cuisine": ${recipe.cuisine},
                "caloriesPerServing": ${recipe.caloriesPerServing},
                "tags": ${recipe.tags},
                "userId": ${recipe.userId},
                "rating": ${recipe.rating},
                "reviewCount": ${recipe.reviewCount},
                "mealType": ${recipe.mealType},
                "ingredients":`

            let ingredients = recipe.ingredients;

            let ingredientsList = document.createElement('ol')
            for (const ingredient of ingredients) {
                let ingredientsItem = document.createElement('li')
                ingredientsItem.innerText = ingredient
                ingredientsList.appendChild(ingredientsItem)
            }

            let img = document.createElement('img')
            img.src = recipe.image

            recipeDiv.append(ingredientsList, img);
            recipesDiv.appendChild(recipeDiv);
        }

    document.body.appendChild(recipesDiv)

    })
