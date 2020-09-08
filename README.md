# omdb-api - https://fcasaloti.github.io/omdb-api-react/

OMDB is an application developed using React that gets movie data from omdbapi.com. Users can search for a movie using a textbox and the application fetch data using an API. All the results are displayed in a table. Users can Nominee movies that are copied from the results table to the Nominations table.

# Some considerations
* Users can Nominee only 5 movies
* When a movie is nominated, the button "Nominee" is disabled
* The button "Nominee" is enabled when the movie is removed from Nominations
* Data in Nominations is persistent, even though the user closes the browser


# Using this application

You can access the application accessing https://fcasaloti.github.io/omdb-api-react/.

If you want to access it locally, you can download the folder, execute "npm install" and then "npm start".

This application uses:

* ReactJS
* Bootstrap
* Axios

