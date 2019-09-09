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

const emails = users.map((user) => user.email);
// console.log(emails);

const yearsSum = users.reduce((total, user) => {
    return total + user.yearsOfExperience / users.length;
}, 0);
// console.log(yearsSum);

const longestEmail = users.reduce((longest, user) => {
   if (longest.length < user.email.length) {
       longest = user.email;
   }
   return longest;
}, "");
// console.log(longestEmail);


let userNames = users.reduce((instructor, user, i) => {
    if(i < users.length -1) {
        instructor += user.name + ", ";
    } else {
        instructor += `and ${user.name}.`
    }
    return instructor
    },"Your instructors are: ");
// console.log(userNames);

const langs = users.reduce((listOfLangs, user) => {
    for (const lang of user.languages) {
        if (listOfLangs.indexOf(lang) === -1) {
            listOfLangs.push(lang);
        }
    }
    return listOfLangs;
}, []);
// console.log(langs);

// let currentLangList = users.map(user => user.languages)

let listOfLangs = users.reduce((accumulator, user) => {
   user.languages.map(language => accumulator.push(language));
   return accumulator;
}, []);
listOfLangs = new Set(listOfLangs);
listOfLangs = Array.from(listOfLangs);
console.log(listOfLangs);

// node map-filter-reduce.js