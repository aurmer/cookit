const EDAMAM_APP_ID = "f6abb6f3"
const EDAMAM_APP_KEY = "f7c310e699facfc88650ff8ad19f04b4"

const HITS_PER_REQUEST = 96

let queryPage = 0
let queryPending = false

function buildEdamamRequest() {
  //const searchForm = document.querySelector('#search-form')
  const mainQuery = document.querySelector('#search-q').value
  // const minTime = searchForm.querySelector('#minTime').values[0]
  // const maxTime = searchForm.querySelector('#maxTime').values[1]
  // const minCal = searchForm.querySelector('#minCal').values[0]
  // const maxCal = searchForm.querySelector('#maxCal').values[1]
  // const maxIngred = searchForm.querySelector('#maxIngred').value.parseIntOrReturnZero()

  const minTime = ""
  const maxTime = ""
  const minCal = ""
  const maxCal = ""
  const maxIngred = ""

  const fromIdx = queryPage * HITS_PER_REQUEST
  const toIdx = queryPage * HITS_PER_REQUEST + HITS_PER_REQUEST

  let url = "https://api.edamam.com/search"
  let getQuery = `?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}&q=${mainQuery}&from=${fromIdx}&to=${toIdx}`


  if(minTime > 0 || maxTime > 0) {
    getQuery += "&time=" + printRange(minTime,maxTime)
  }

  if(minCal > 0 || maxCal > 0) {
    getQuery += "&calories=" + printRange(minCal,maxCal)
  }

  if(maxIngred > 0) {
    getQuery += `&ingr=${maxIngred}`
  }

  //each of the checkboxes will have value of this format `&${param}=${value}`
  $('#search-form input:checked').each(element => getQuery += element.value)

  return url + getQuery
}

function runEdamamSearch(appendFlag) {
  let requestURL = buildEdamamRequest()
  console.log('~~~ Sending API request to Edamam ~~~')

  queryPending = true
  let myRequest = $.getJSON({
    url: requestURL,
    success: handleEdamamData.bind(null,appendFlag)
  })
}

function handleEdamamData(appendFlag,result) {
  queryPending = false
  console.log(`~~~ Received response from Edamam ${queryPage} ~~~`)

  const recipeArray = extractRecipeArray(result)
  const resultsHTML = recipeArray.map(element=>renderSingleRecipeCard(element)).join('')

  const resultsDIV = document.querySelector('#search-results div')
  if(appendFlag === true) {
    /* This is for the infinite scroll feature which isn't complete
    let temp = document.createElement('template')
    temp.innerHTML = resultsHTML
    resultsDIV.appendChild = temp
    */
  } else {
    resultsDIV.innerHTML = resultsHTML
  }

}

function extractRecipeArray(edamamResult) {
  return edamamResult.hits.map(returnRecipe)
}

function returnRecipe(element) {
  return element.recipe
}


function receiveEdamamData() {

}
/* Incomplete feature -- infinite scroll
window.addEventListener('scroll', _.throttle(endlessScroll, 1000));

function endlessScroll() {
  if(queryPending === false) {
    const scrollY = window.scrollY
    const windowHeight = window.innerHeight
    const docHeight = $(document).height()

    console.log(`${scrollY} <> ${docHeight} - ${windowHeight} - 300}`)

    if(scrollY > docHeight - windowHeight - 300) {
      queryPending = true
      queryPage += 1

      runEdamamSearch(true)
    }
  }
} */
