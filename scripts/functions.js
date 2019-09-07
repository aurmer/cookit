
//TODO don't add duplicate favorites

// function saveToFavorites(recipeID){

//     var favoritesListJSON = localStorage.getItem('favoritesList');

//     var favoritesList = JSON.parse(favoritesListJSON);

//     let favRecipe = edamamResult.hits.find(matchEdamamUniqueID.bind(null,recipeID)).recipe

//     if (favoritesList === null){
//         favoritesList = [];
//     }

//     favoritesList.push(favRecipe)

//     localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
// }

// function matchEdamamUniqueID(recipeID,hit){
//     let searchedRecipeID =  hit.recipe.uri.split("_").pop();

//     if (searchedRecipeID === recipeID) {
//         console.dir(Array.isArray(hit.recipe))
//         return true
//     }
// }

function prepRecipePage(recipe) {
  //TODO just request it here to simplify
  localStorage.setItem("recipe", JSON.stringify(recipe))
}


function parseIntOrReturnZero(str) {
  if (typeof str !== "string") {
    str = this
  }

  if( isNaN(str) ) {
    return 0
  } else {
    return parseInt(str)
  }
}

String.prototype.parseIntOrReturnZero = parseIntOrReturnZero

function printRange(min,max) {
  let out_str = ""

  if(min > 0) {
    out_str += min
    if(max > 0) {
      out_str += "-" + max
    }
    else {
      out_str += "%2B"
    }
  }
  else if(max > 0) {
    out_str += max
  }

  return out_str
}
