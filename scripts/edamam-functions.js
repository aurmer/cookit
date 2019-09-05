const EDAMAM_APP_ID = "f6abb6f3"
const EDAMAM_APP_KEY = "f7c310e699facfc88650ff8ad19f04b4"

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

  let url = "https://api.edamam.com/search"
  let getQuery = `?app_key=${EDAMAM_APP_KEY}&app_id=${EDAMAM_APP_ID}&q=${mainQuery}`


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

function runEdamamSearch() {
  let requestURL = buildEdamamRequest()

  let myRequest = $.getJSON({
    url: requestURL,
    success: handleEdamamData
  })
}

function handleEdamamData(result) {
  let recipeArray = extractRecipeArray(result)

  console.dir(recipeArray)
}

function extractRecipeArray(edamamResult) {
  return edamamResult.hits.map(returnRecipe)
}

function returnRecipe(element) {
  return element.recipe
}


function receiveEdamamData() {

}
