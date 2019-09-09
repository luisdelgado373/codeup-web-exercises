const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let moreThan3 = users.filter((user) => user.languages.length >= 3);
// console.log(moreThan3);

emails = users.map((user) => user.email.toString());
// console.log(emails);

const yearsSum = users.reduce((total, user) => {
    return total + user.yearsOfExperience / users.length;
}, 0);
// console.log(yearsSum);

// const userNames = users.reduce((total, user) => {
//     return total + user.name.toString();
// }, 0);
// console.log(userNames);


let userNames = users.reduce((finalString, person) => finalString + `${person.name}`, "");
console.log(userNames);

// node map-filter-reduce.js