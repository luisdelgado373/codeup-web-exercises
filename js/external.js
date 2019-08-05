"use strict";

console.log ("Hello from external JavaScript");

alert("Welcome to my Website!");

var userInput = prompt("What is your favorite color?");

alert('Great! ' + userInput + ' is my favorite color too!');

// Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
//
//     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
//     Use an alert to show the results of each problem.

var littleMermaidDaysRented = prompt("How many days was Little Mermaid rented for?");
var brotherBearDaysRented = prompt("How many days was Brother Bear rented for?");
var herculesDaysRented = prompt("How many  days was Hercules rented for?");
var dailyPrice = 3;
var totalCost = (Number(littleMermaidDaysRented) + Number(brotherBearDaysRented) + Number(herculesDaysRented)) * dailyPrice;
alert("Your total cost for all 3 movies is $" + totalCost);


var googleWage = prompt("What is your hourly wage at Google?");
var amazonWage = prompt("What is your hourly wage at Amazon?");
var facebookWage = prompt("What is your hourly wage at Facebook?");


var googleTotal = (googleWage) * prompt("How many hours did you work this week at Google?");
var amazonTotal = (amazonWage) * prompt("How many hours did you work this week at Amazon?");
var facebookTotal = (facebookWage) * prompt("How many hours did you work this week at Facebook?");
var wageForWeek = googleTotal + amazonTotal + facebookTotal;
alert("You made $" + Number(wageForWeek) + " this week!");


var classFull = confirm("Is the class full?\nClick 'Cancel' for No and 'Ok' for Yes");
var scheduleConflict = confirm("Will attending this school create conflict with your current schedule?\nClick 'Cancel' for No and 'Ok' for Yes");
var enrollment = !classFull && !scheduleConflict;
alert("Based on your answers, your eligibility to enroll is: " + enrollment);


var itemsPurchased = prompt("How many items did you purchase?"); /* >2 */
var couponValid = confirm("Is your coupon valid?\nClick 'Cancel' for No and 'Ok' for Yes"); /* must be valid */
var isPremiumMember = confirm("Are you a Premium member?\nClick 'Cancel' for No and 'Ok' for Yes");
var offerValid = couponValid && (Number(itemsPurchased) >2 || isPremiumMember);
alert("It is " + offerValid + " that you can use this offer.")