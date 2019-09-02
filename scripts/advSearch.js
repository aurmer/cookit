
//would like to need to toggle them on and off to add or remove search parameters

document.addEventListener('DOMContentLoaded',initializePage)
function getById(id){return document.getElementById(id);};

function initializePage(){

    console.dir(edemamResult)

    var calorieSlider = getById("calorie-range");
    var calorieOutput = getById("calorie-output");
    calorieOutput.innerHTML = calorieSlider.value;

    calorieSlider.oninput = function() {
    calorieOutput.innerHTML = this.value;
    }

    let recipesHTML = edemamResult.hits.map(renderSingleRecipeCard).join('')

    document.querySelector('#recipes-container').innerHTML = recipesHTML
}

//Press the test button to add all items to an array
//Array items would be used to search for matching parameters and filter the results.
//I think this would be tied to the "Search" button on the search bar so it knows to check for items in the array to limit the search. 

//Added event listeners for specified items that will be on the document

document.addEventListener('click', function(event){
    let targetEl = event.target;    
    if (targetEl.id === "test-button") {
        addAdvSearchPar();
        console.log("you pressed the test button");
        console.dir(advSearchParameters);
    }
    if (targetEl.id === 'add-button') {
        console.log(targetEl)
        let recipeID = $(targetEl).data("recipeid")
        saveToFavorites(recipeID);
        console.log('you clicked the add button');       }
});

//Array to hold parameters for search

advSearchParameters =[];

//Function to add parameters to array
//Looks for all boxes that are checked and inputs value in array.

var addAdvSearchPar = function(){
    $('input:checked').each(function(){
        advSearchParameters.push($(this).val());
        console.dir($(this).val());
    });
    $('#calorie-range').each(function(){
        advSearchParameters.push($(this).val());
    })
    
}


//create a variable that points straight to the recipe object. 

function renderSingleRecipeCard(element) {

    let recipeID =  element.recipe.uri.split("_").pop();

    return `<div class="recipe-card" data-recipeID="${recipeID}"><a href="${element.recipe.shareAs}"><img src="${element.recipe.image}"></a></div><br>
    <button data-recipeID="${recipeID}" id="add-button">Add to Favorites</button>`
}

function saveToFavorites(recipeID){

    var favoritesListJSON = localStorage.getItem('favoritesList');

    var favoritesList = JSON.parse(favoritesListJSON);

    let favRecipe = $.grep(edemamResult.hits, function(item){
        let searchedRecipeID =  item.recipe.uri.split("_").pop();

        if (searchedRecipeID === recipeID) {
            console.dir(item.recipe.label)
            return item.recipe
        }
    })

    if (favoritesList === null){
        favoritesList = [];
    }

    favoritesList.push(favRecipe)

    localStorage.setItem("favoritesList", JSON.stringify(favoritesList));

}