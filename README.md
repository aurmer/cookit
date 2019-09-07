# CookIt App

This is our Phase 1 final project. The assignment is to utilize multiple APIs to accomplish a task. Our users will be able to search for a recipe and invite their friends over to enjoy a homecooked meal.

<hr>


## Team

-  Aubrey Snider

   API integration/repo management

-  Taylor Blocker

   <strike>Google Calender API/Advanced Search/Add items to favorites list/</strike>Data Rendering/Card Creation

-  Robert Foreman

   Bulma/HTML/CSS
   
   <hr>

## API Usage

1. Edamam Recipe Search API

   This API will allow the user to look for a meal to cook. We will include information about the dish to let the user decide whether that is their choice.
   
   <hr>

## JS Library Usage

1. jQuery

   This was used for its convenient AJAX functions.

2. Moment.js

   Used to format all time-based information in recipe instructions.
   
   <hr>

## Our Process

-  We started off with a delivery service for recipe ingredients
-  Once we determined that the delivery aspect brought too many variables to the app (too much given the time constraints), we modified our plan to join information from the Recipe Search with nutrition facts from the USDA.
-  Upon realizing that Edamam's recipe database contains all the nutrition facts we wanted, we decided to turn the app into an "invite your guests to a homecooked meal". Google Calendars will serve as our second API.
-  API selection is difficult as we are all unexperienced. We keep picking goals which are bigger than we can chew. Google Calendar integration will have to wait until our next project when we have a stronger grasp on OAuth.
-  Edamam API didn't behave as we expected. Some of their database seems incomplete and we had to adjust course for each time we found an unexpected result. We are finding that full vetting of API's should occur AS SOON AS POSSIBLE so there is time to adjust project scope.
-  We assumed we would be get a recipe procedure from the database, but we had to settle for linking the user out to another page.

<hr>

## Known Issues

-  The individual recipe page depends on an API call. This could be greatly improved with some basic caching of the information from the main page search. This would allow the recipe page to load instantaneously as well as reduce the number of API calls (API subscription cost) per user session.
- Another feature would that could have helped with the above issue would be to add a loading bar to the page to show that content is in progress of loading.
- Need better communication in regards to what we were working on and where. Making sure what we can do can be integrated easily into the main functions of our pages.
-  Ultimately, we would want to keep the user on our site rather than linking out to another website to get the actual recipe. This Edamam API has turned up lacking in this respect, and given more time, we would shop around for a higher quality database to pull from.

<hr>

## Final Thoughts

-  Project management is a difficult task. We all have our own vision of what the project should look like, and it was difficult to stay on the same page while agreeing on what is the top priority.
-  We spent too much time initially envisioning the 'whatif' and we were left not able to finish our base functionalities.

<hr>

## Links

Github Repo:
aurmer/cookit

Website:
http://cookit-app.com/

Website Structure:
https://docs.google.com/document/d/1v--5kEWUClEG307lq5twAhEx9hX9usmztiFD2I5rn2I/edit?usp=sharing

List of Libraries:
https://momentjs.com/
https://jqueryui.com/

List of APIs:
Edaman - https://developer.edamam.com
Travis CI - https://travis-ci.org
Google Calendar - https://developers.google.com/calendar/
https://developers.google.com/calendar/quickstart/js

CSS:
https://bulma.io/
