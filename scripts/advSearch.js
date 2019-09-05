
//would like to need to toggle them on and off to add or remove search parameters

document.addEventListener('DOMContentLoaded',initializePage)
function getById(id){return document.getElementById(id);};

function initializePage(){

    console.dir(edamamEnumData)

    // var calorieSlider = getById("calorie-range");
    // var calorieOutput = getById("calorie-output");
    // calorieOutput.innerHTML = 'Calories: ' + calorieSlider.value;

    // calorieSlider.oninput = function() {
    // calorieOutput.innerHTML = 'Calories: ' + this.value;
    // }
}
//Press the test button to add all items to an array
$( function() {
    $( "#slider-range" ).slider({
        orientation: "vertical",
        max: 5000,
        min: 0,
        range: true,
        values: [ 0, 0 ],
        slide: function( event, ui ) {
            $( "#max-amount" ).val(ui.values[ 1 ] + " Cal");
            $( "#min-amount" ).val(ui.values[ 0 ] + " Cal");
            //can use the same below value to output data to the search
            console.log($( "#max-amount" ).val($( "#slider-range" ).slider( "values", 1 )))
        }
    });

    
    $( "#max-amount" ).val($( "#slider-range" ).slider( "values", 1 ) + " Cal")
    $( "#min-amount" ).val($( "#slider-range" ).slider( "values", 0 ) + " Cal" );
} );
            //Array items would be used to search for matching parameters and filter the results.
            //I think this would be tied to the "Search" button on the search bar so it knows to check for items in the array to limit the search. 
            
            //Added event listeners for specified items that will be on the document

console.dir($( "#slider-range" ).slider.value)

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


//Array to hold parameters for search
//**** need to create a function to clear this array or set it as undefined after "closing" the advanced search section****/

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

    let favRecipe = $.grep(edamamEnumData.hits, function(item){
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