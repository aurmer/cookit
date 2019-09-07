

document.addEventListener('DOMContentLoaded',initializePage)

function initializePage() {
  document.querySelector('#search-submit').addEventListener('click',clickSearch)

}

function clickSearch() {
  //runEdamamSearch()
  switchIndexSection()

  runEdamamSearch()

  // let resultsHTML = edamamResult.hits.map(element=>renderSingleRecipeCard(element.recipe)).join('')
  // document.querySelector('#search-results div').innerHTML = resultsHTML
}

function renderSingleRecipeCard(recipe) {
  return `<div class="column is-4">
      <div class="card is-shady">
          <div class="card-image">
              <a onclick='prepRecipePage("${recipe.uri}");window.location.href = "recipe.html"'>
              <figure class="image is-4by3">
              <img src="${recipe.image}" class="modal-button" data-target="modal-image2">
              </figure> </a>
          </div>
      <div class="card-content">
          <div class="content">
              <h4 classs="recipe-title">${recipe.label}</h4>
                  <p class="time">
                    ${recipe.healthLabels.reduce((a,st)=>
                      a+"<span style='background-color:#eee;'>"+st+"</span>&nbsp;&nbsp;&nbsp;",'')
                    }
                  </p>
          </div>
      </div>
      </div>
  </div>`
}

function switchIndexSection(section) {
  let searchContainer = document.querySelector('#search-container')
  let navContainer = document.querySelector('#nav-left')
  let searchTitle = searchContainer.querySelector('h1')
  let searchSection = searchContainer.querySelector('div')

  navContainer.appendChild(searchContainer)
  searchSection.insertAdjacentElement('afterbegin', searchTitle)
  searchContainer.classList.remove('is-offset-3')
  searchContainer.classList.remove('is-6')
  searchContainer.classList.add('is-10')
  searchTitle.style.margin = 0
  searchTitle.style.marginRight = ".2em"
  searchContainer.querySelector('div').style.alignItems = "center" //TODO fix dat shit
  document.querySelector('#search-main').style.display = "none"
  document.querySelector('#search-results').style.display = "block"
  document.querySelector('#main-hero').classList.remove('is-fullheight')
  document.querySelector('#search-results').classList.add('is-fullheight')

}
