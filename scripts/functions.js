
//TODO don't add duplicate favorites

function saveToFavorites(recipeID){

    var favoritesListJSON = localStorage.getItem('favoritesList');

    var favoritesList = JSON.parse(favoritesListJSON);

    let favRecipe = edamamResult.hits.find(matchEdamamUniqueID.bind(null,recipeID)).recipe

    if (favoritesList === null){
        favoritesList = [];
    }

    favoritesList.push(favRecipe)

    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));

}

function matchEdamamUniqueID(recipeID,hit){
    let searchedRecipeID =  hit.recipe.uri.split("_").pop();

    if (searchedRecipeID === recipeID) {
        console.dir(Array.isArray(hit.recipe))
        return true
    }
}



//create a variable that points straight to the recipe object.

function renderSingleRecipeCard(element) {

    let recipeID =  element.recipe.uri.split("_").pop();

    return `<div class="recipe-card" data-recipeID="${recipeID}"><a href="${element.recipe.shareAs}"><img src="${element.recipe.image}"></a></div><br>
    <button data-recipeID="${recipeID}" id="add-button">Add to Favorites</button>`
}
