//Creating advanced search feature here
//Would like to create a list of parameters based off information in edeman-data.js
//Then need to toggle them on and off to add or remove search parameters
document.addEventListener('DOMContentLoaded',initializePage)
function getById(id){return document.getElementById(id);};

function initializePage(){
console.dir(edemamResult)

let recipesHTML = edemamResult.hits.map(renderSingleRecipeCard).join('')

document.querySelector('#recipes-container').innerHTML = recipesHTML

function getById(id)
    {
        return document.getElementById(id);
    }
}

document.addEventListener('click', function(event){
    let targetEl = event.target;    
    if (targetEl.id === "test-button") {
        addAdvSearchPar()
        console.log("you pressed the test button")
    }

});

function  inputSearchResults(){
    
    document.addEventListener('click', function(event){
        let targetEl = event.target;    
        addAdvSearchPar(targetEl)
    });
}

advSearchParameters =[];

function addAdvSearchPar (element){
    if ($('input:checked')){
        advSearchParameters.push(element.value)
        
    }

    console.dir(advSearchParameters)
}



function renderSingleRecipeCard(element) {
return `<div class="recipe-card"><a href="${element.recipe.shareAs}"><img src="${element.recipe.image}"></a></div>`
}