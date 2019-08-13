while(true) {
    var userInput = prompt("Enter an odd number between 1 and 50.");
    if(userInput % 2 !== 0 && userInput > 0 && userInput <51) {
        break;
    }
}

var oddNumber = prompt("Enter an odd number between 1 and 50.");
for (var i = 1; i <= 50; ++i) {
    if (i % 2 === 0) {
        continue;
    }
    if (i === parseFloat(oddNumber)) {
        console.log("Yikes! Skipping the number: " + oddNumber);
    } else {
        console.log('Here is an odd number: ' + i);
    }
}