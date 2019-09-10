// function wait(number) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve()
//         }, number);
//     });
// }
//
// OR
//
// function wait(number) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, number);
//     });
// }
//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
// fetch('https://swapi.co/api/people/87/')
//     .then(function(data) {
//         return data.json();
//     })
//     .then(function(data) {
//         console.log(data);
// });
//
// function getPush(username) {
//     return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token 401005f4b32996665715e5255e7d26160b0e3774'}})
//         .then(response => response.json())
//         .then(response => response[0].created_at)
// }
// console.log(getPush('luisdelgado373'));

// function getCommits(username) {
// return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'token 401005f4b32996665715e5255e7d26160b0e3774'}})
//     .then(response => response.json())
//     .then(response => console.log(response))
// }
//
// console.log(getCommits('luisdelgado373'));