document.addEventListener('DOMContentLoaded',initializePage)
function getById(id){return document.getElementById(id);};

function initializePage(){


}

function getURI (){
    let recipeID =  edemamResult.uri.split("_").shift();
    console.log(recipeID)
}