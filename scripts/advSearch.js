//Creating advanced search feature here
//Would like to create a list of parameters based off information in edeman-data.js
//Then need to toggle them on and off to add or remove search parameters
document.addEventListener('DOMContentLoaded',initializePage)
function getById(id){return document.getElementById(id);};

function initializePage(){
console.dir(edemamResult)
let recipesHTML = edemamResult.hits.map(renderSingleRecipeCard).join('')
document.querySelector('#recipes-container').innerHTML = recipesHTML
}

//Press the test button to add all items to an array
//Array items would be used to search for matching parameters and filter the results.
//I think this would be tied to the "Search" button on the search bar so it knows to check for items in the array to limit the search. 
document.addEventListener('click', function(event){
    let targetEl = event.target;    
    if (targetEl.id === "test-button") {
        addAdvSearchPar()
        console.log("you pressed the test button")
        console.dir(advSearchParameters)
    }
});

//Array to hold parameters for search

advSearchParameters =[];

//Function to add parameters to array
//Looks for all boxes that are checked and inputs value in array.

var addAdvSearchPar = function(){
    $('input:checked').each(function(){
        advSearchParameters.push($(this).val())
        console.dir($(this).val())
    });
}
//create a variable that points straight to the recipe object. 
function renderSingleRecipeCard(element) {
let recipeID =  element.recipe.uri.split("_").pop();

return `<div class="recipe-card" data-recipeID="${recipeID}"><a href="${element.recipe.shareAs}"><img src="${element.recipe.image}"></a></div>`
}