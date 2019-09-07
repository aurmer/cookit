document.addEventListener('DOMContentLoaded',initializePage)
function getById(id){return document.getElementById(id);};


function CookTime (totalTime) {
    return moment.duration(totalTime, 'minutes').asHours().toFixed(1)
}

function createRecipePage (serverResponse) {
    {
      let currentRecipe = serverResponse[0]

        let recipeIngredients = currentRecipe.ingredients

            let ingredientsList = recipeIngredients.map(function(ingredient){

                return `
                    <li>${ingredient.text}</li><br>
                `
            })
            console.dir(ingredientsList)
            // return ingredientsList.join("")


        return `
        <div class="tile is-horizontal is-parent">
        <div class="tile is-child box">
        <p class="title">Ingredients</p>
        <ul id="ingredients">
        </ul>
        ${ingredientsList.join("")}
        </div>

        <div class="tile is-child box">
        <div class="card-image">
            <figure class="image is-4by6">
            <img src="${currentRecipe.image}" class="modal-button">
            </figure>
        </div>
        <p class="recipe-title">${currentRecipe.label}</p>
        <p class="subtitle" id="cook-time">Cook!t Time: ${CookTime(currentRecipe.totalTime)} Hours</p>
        <p><a class="button is-success" href="${currentRecipe.url}">Cook!t Now</a></p>
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

function handleRecipeResponse (serverResponse) {
  let favsHTML = createRecipePage(serverResponse)
  // let cardMap = currentRecipe.map(recipeInfo)

  let recipeContainer = getById('recipe-content');
  recipeContainer.innerHTML = favsHTML;
}

function initializePage(){

    // https://api.edamam.com/search?app_id=f6abb6f3&app_key=f7c310e699facfc88650ff8ad19f04b4&r=r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408

    // var favoritesListJSON = localStorage.getItem('favoritesList');

    // var favoritesList = JSON.parse(favoritesListJSON);

    getRecipeWeClickedOn()


}
    //go through ingredients and put each item in it.

function getRecipeWeClickedOn() {
  const requestURL = "https://api.edamam.com/search?app_id=f6abb6f3&app_key=f7c310e699facfc88650ff8ad19f04b4&r=" + encodeURIComponent(localStorage.getItem("recipe").replace(/"/g, ''))
  console.log(requestURL)

  $.getJSON({
    url: requestURL,
    success: handleRecipeResponse
  })
}
