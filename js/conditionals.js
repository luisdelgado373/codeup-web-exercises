"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
// var userConsent = confirm("Would you like to enter a number?");
// if (userConsent) {
//     var userNumber = +prompt("Enter your number here:");
//         var isNum = !isNaN(userNumber);
//         if (isNum) {
//             if (userNumber % 2 === 0) {
//                 alert("Your number is even!");
//                 alert("Your number plus 100 is: " + (userNumber + 100));
//                 } else {
//                 alert("Your number is odd..");
//                 alert("Your number plus 100 is: " + (userNumber + 100));
//                 }
//                     if (userNumber >= 0) {
//                         alert("Your number is positive");
//                     } else {
//                         alert("Your number is negative");
//                     }
//         } else {
//             alert("That is not a number!");
//         }
// }
//
// console.log(userNumber);
/* ########################################################################## */
function userConsent() {
    confirm("Would you like to enter a number?");
}
function userNumber() {
    +prompt("Enter your number here:");
}
function isPositive() {
    return Math.sign(num) === 1;
}
function add100() {
    return userNumber + 100
}
function isEven() {
    return userNumber % 2 === 0;
}
function isNum() {
    isNum = !isNaN(userNumber);
}
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(colorName) {
//     if (colorName === "blue") {
//         return "blue is the color of the sky";
//     } else if (colorName === "red") {
//         return "Strawberries are red";
//     } else if (colorName === "cyan") {
//         return "I don't know anything about cyan";
//     } else {
//         return "I dont know anything about " + colorName;
//     }
// }
// console.log(analyzeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)


// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// var colorName = prompt("What is your favorite color?");
// switch(colorName) {
// case "blue":
//     alert("blue is the color of the sky");
//     break;
// case "red":
//     alert("Strawberries are red");
//     break;
// case "cyan":
//     alert("I don't know anything about cyan");
//     break;
// default:
//     alert("I dont know anything about " + colorName);
//     break;
// }
// console.log(colorName);
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColor = prompt("Type in a color here:");
// function analyzeColor(colorName) {
//     if (colorName === "blue") {
//         alert("blue is the color of the sky");
//         // return "blue is the color of the sky";
//     } else if (colorName === "red") {
//         alert("Strawberries are red");
//         // return "Strawberries are red";
//     } else if (colorName === "cyan") {
//         alert("I don't know anything about cyan");
//         // return "I don't know anything about cyan";
//     } else {
//         alert("I dont know anything about " + colorName);
//         // return "I dont know anything about " + colorName;
//     }
// }
// // alert(analyzeColor(userColor));
// console.log(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber, total) {
//     if (luckyNumber === 1) {
//         return total - (total * .10);
//     } else if (luckyNumber === 2) {
//         return total - (total * .25);
//     } else if (luckyNumber === 3) {
//         return total - (total * .35);
//     } else if (luckyNumber === 4) {
//         return total - (total * .5);
//     } else if (luckyNumber === 5) {
//         return "Your items will be free today!";
//     } else {
//         return("Sorry, you weren't selected");
//     }
// }
// console.log("Your lucky number was 1, your new total is $" + calculateTotal(1,100));
// console.log("Your lucky number was 3, your new total is $" + calculateTotal(3,100));
// console.log(calculateTotal(5,100));
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

// var luckyNumber = Math.floor(Math.random() * 6);
// var total = prompt("What was the total for your bill?");
// function calculateTotal(luckyNumber, total) {
//     if (luckyNumber === 1) {
//         alert("Your total for today was: $" + total + ". Your new total after the discount is: $" + (total - (total * .10)));
//     } else if (luckyNumber === 2) {
//         alert("Your total for today was: $" + total + ". Your new total after the discount is: $" + (total - (total * .25)));
//     } else if (luckyNumber === 3) {
//         alert("Your total for today was: $" + total + ". Your new total after the discount is: $" + (total - (total * .35)));
//     } else if (luckyNumber === 4) {
//         alert("Your total for today was: $" + total + ". Your new total after the discount is: $" + (total - (total * .5)));
//     } else if (luckyNumber === 5) {
//         alert("Your items will be free today!");
//     } else {
//         alert("Sorry, you weren't selected");
//     }
// }
// console.log(calculateTotal(luckyNumber, total));