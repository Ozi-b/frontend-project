# frontend-project

The goal of this project was to create a workout app that lists different exercises and allow you to create a workout plan as well as log your performance
and stats.

The API I used was the REST API to try to accomplish this. (https://wger.de/en/software/api)
I also used the BootStrap library to stylize the document as well as jquery.

Key feature goals:
1) Showcase exercises and refine search for an exact exercise.
2) Create a workout plan with your selected exercises, and conduct the workout with sets, reps, time ect which are all customizable.
3) Showcases your performance at the end of the workout and logs the data for you to see your progress with a chart that adapts over time.
4) Have a cardio section serperately from weights/workout section to finely tune charts for cardio.
5) Have a nutrtion section to track your calories, macros and micros and have chart for it aswell.

Issues
REST API:
  1) Filtering resources with the method that it describes does not actually work for most endpoints. 
  For example, if you look up "https://wger.de/api/v2/exerciseinfo/?language=2" this should return all exercises with the english language, yet it still
  returned multiple languages. Although "https://wger.de/api/v2/exercise/?language=2" will actually filter the languages.
  
BootStrap library:
  1) BootStrap is incredibly powerful yet confusing and when I was using it, it would not recognize the body of the html correctly. I have no idea how to fix it...
  
 
 What has been accomplished:
 1) Workouts cards populate the page with the set data
 2) Next/Prev buttons "somewhat" work.
 3) Workout filter drop down functions but only for abs and arms (didnt have enough time to establish the rest of the dropdown list) and only filters the 
  workouts that are already on the page.
  
  Lessons learned:
  1) Probably best to write functioning code first instead of stylizing the html page
  2) Learn the BootStrap library so I can implement each code with full understanding instead of copying and pasting the examples.
  3) Test an API's functionality before deciding which one to use.
