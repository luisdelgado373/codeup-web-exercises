function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; number * i++) {
        var sum = number * i;
    console.log(number + " x " + i + " = " + sum);
    }
}
showMultiplicationTable(7);

for(var x = 1; x <= 10; x++) {
var random = Math.floor(Math.random() * 181) + 20;
    if (random % 2 === 0) {
        console.log(random + " is even.");
    } else {
        console.log(random + " is odd.");
    }
}

for(var y =1; y<=9; y++) {
    console.log(y.toString().repeat(y));
}

for (var z = 100; z >=0; z-=5 ) {
        console.log(z);
    }

