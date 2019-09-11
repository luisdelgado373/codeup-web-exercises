// =================== Fetch Bonuses
//
// -- Ex. 1
//
// In your data directory, create a profiles.json file with the following...
//
// {
//     "sandy123": "brown",
//     "bob234": "green",
//     "sally345": "blue"
// }
//
// Add an input field and submit button (you will need to prevent the default behaviour) that when clicked, runs the following function...
// Create a function that takes in a username and fetch's the color preference based on the username and sets the background color to that color.
function userColor() {
    return fetch ('data/profiles.json')
}
//
//
//
// -- Ex. 2
//
// Using the Star Wars API, log the first film a Star Wars character's homeworld appeared in
function getSwapi(personNumber) {
    return fetch(`https://swapi.co/api/people/${personNumber}/`)
        .then(data => data.json())
        .then(data => console.log(data))
}
console.log(getSwapi('3'));
//
//
//
// -- Ex. 3
//
// Using the GitHub API and reduce(), find the average hour of the last 3 pushes. Ignore minutes.
//
//
//
// -- Ex. 4
//
// Create star-chars.json file in your data folder and paste in the following...
//
// [
//     {
//         "name": "Rey",
//         "coolness": 9
//     },
//     {
//         "name": "Luke Skywalker",
//         "coolness": 9
//     },
//     {
//         "name": "Darth Vadar",
//         "coolness": 10
//     }
// ]
//
// Create a function that fetches this array and returns an array of homeworlds for the characters.
//     It will look something like the following...
//
// ['Jakku', 'Tatooine', 'Tatooine']
//
