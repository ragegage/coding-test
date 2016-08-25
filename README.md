This is an app that allows users to query information about films that were shot in San Francisco. Users can search by film title and see multiple results appear on the map. Clicking on those results will display information about the film as well as any fun facts that may have been recorded. A suggested search term is "terminator" - clicking on the marker at 16th and Utah will display a fun fact about the filming of the movie "Terminator - Genisys".

### Setup

To set up the project on your own machine, run `npm install`, then `webpack` and then `open index.html`, all in your terminal from within the same directory as this README.

### About the project

This project was build using React and Redux (the npm libraries `react`, `redux`, and `react-redux`), bundled using Webpack, and transpiled using Babel.

It is only a frontend, relying entirely on two major backends: the SF Films database, and Google's Maps API. This was done partially to lighten the dev load, and partially just for the fun of it.

There are several flaws in the user interface, chief among them being that a user can only search for movies by title, and not actors, director, or release year.
The main flaw (as I see it) in the app, however, is not related to the UI: because the app uses Google's geocoding service (part of their Maps API) to place the markers on the map, the app runs into load issues when too many queries get sent at once. A quick fix to that would be to implement a slight delay whenever a Geocoding request fails due to an OVER_QUERY_LIMIT error. A more robust fix might entail storing lat/lng data for each record in a proprietary database and using that to place markers on the map.
