
//would like to need to toggle them on and off to add or remove search parameters

document.addEventListener('DOMContentLoaded',initializePage)
function getById(id){return document.getElementById(id);};

function initializePage(){

    console.dir(edamamResult)

    var calorieSlider = getById("calorie-range");
    var calorieOutput = getById("calorie-output");
    calorieOutput.innerHTML = 'Calories: ' + calorieSlider.value;

    calorieSlider.oninput = function() {
    calorieOutput.innerHTML = 'Calories: ' + this.value;
    }


    let recipesHTML = edamamResult.hits.map(renderSingleRecipeCard).join('')

    document.querySelector('#recipes-container').innerHTML = recipesHTML
}

//Press the test button to add all items to an array
//Array items would be used to search for matching parameters and filter the results.
//I think this would be tied to the "Search" button on the search bar so it knows to check for items in the array to limit the search.

//Added event listeners for specified items that will be on the document

document.addEventListener('click', function(event){
    let targetEl = event.target;
    if (targetEl.id === "search-button") {
        addAdvSearchPar();
        console.dir(targetEl)
        console.dir(advSearchParameters);
    }
    if (targetEl.id === 'add-button') {
        let recipeID = $(targetEl).data("recipeid")
        saveToFavorites(recipeID);
        console.log('you clicked the add button');
    }
    if (targetEl.id === 'enable-calorie-count'){
        enableCalorieCount()
    }
});


function enableCalorieCount(){
    let slider = getById('calorie-range')
    let button = getById('enable-calorie-count')
    let output = getById('calorie-output')
    console.log(slider)
    if(slider.disabled === true){
        console.log('slider is enabled')
        slider.disabled = false;
        slider.value = 2500
        output.innerHTML = 'Calories: ' + slider.value;
        button.value = "Disable Calorie Count"

    } else if(slider.disabled === false){
        console.log('slider is disabled')
        slider.disabled = true;
        slider.value = 0;
        button.value = "Enable Calorie Count"
        output.innerHTML = 'Calories: ' + slider.value;
        console.log(slider.value)
    }
}
