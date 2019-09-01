

document.addEventListener('DOMContentLoaded',initializePage)

function initializePage() {

  let recipesHTML = edemamResult.hits.map(renderSingleRecipeCard).join('')

  document.querySelector('#recipes-container').innerHTML = recipesHTML
}

function renderSingleRecipeCard(element) {
  return `<div class="recipe-card"><a href="${element.recipe.shareAs}"><img src="${element.recipe.image}"></a></div>`
}

