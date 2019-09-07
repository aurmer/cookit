document.addEventListener('DOMContentLoaded',initializePage)
function getById(id){return document.getElementById(id);};


function initializePage(){

    // https://api.edamam.com/search?app_id=f6abb6f3&app_key=f7c310e699facfc88650ff8ad19f04b4&r=r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408
    
    // var favoritesListJSON = localStorage.getItem('favoritesList');
    
    // var favoritesList = JSON.parse(favoritesListJSON);
    
    let favRecipe = edamamResult.hits[0].recipe
    console.dir(favRecipe)
    console.log(favRecipe.calories)


    function createRecipePage (favRecipe) {
        let favsHTML = favRecipe.map(recipeInfo)
        {
            return `
            <div class="tile is-horizontal is-parent">
            <div class="tile is-child box">
            <p class="title">Ingredients</p>
            <ul id="ingredients">
            </ul>
            ${recipeInfo.calories}
            </div>
            
            
            <div class="tile is-parent is-10">
            <div class="tile is-child box">
            <p class="recipe-title">Name of Recipes</p>
            <p class="subtitle" id="cook-time">Cook!t Time 00:00</p>
            <p>Additional Information</p>
            </div>
            </div>
            </div>
            </div>
            `
        }
        return favsHTML.join("")
    }


     
    function getById(id)
    {
        return document.getElementById(id);
    }
    
    let recipeContainer = getById('recipe-content');
    recipeContainer.innerHTML = favsHTML;
    
}
    //go through ingredients and put each item in it. 