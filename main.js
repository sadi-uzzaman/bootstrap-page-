function animalCalculator(depth) {
    var animal = 0;
    if (depth <= 10 ) {
        animal = depth * 50;
    }
    else if (depth <= 20 ) {
        var firstPart = 10 * 50;
        var remaining = depth - 10;
        var secondPart = remaining * 10;
        animal = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var remaining = depth - 20;
        var thirdPart = remaining * 300;
        animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}

var count = animalCalculator(22);
console.log(count);


function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(10000);
console.log("Number of mile is", result);

//woodCalculator
function woodCalculator(chair, table, bed) {
    var wood = 0;
    wood = chair * 1 + table * 3 + bed * 5;
    return wood;
}

var countwood = woodCalculator((chair = 0 ), (table = 2), (bed = 10));
console.log("Wood Required to build is", countWood);

//brickCalculator

function brickCalculator(floor) {
    var brik = 0;
    /** brik required for 15 feet heigh floor = 1000 pcs
     * So brik Required for 12 feet floor = 1000*12/15 = 800 pcs
     *          10 feet height floor = 1000*10/15 = 633 pcs (appx)
     */

    if (floor <= 10) {
        brick = floor * 1000;
    }
    else if (floor <= 20) {
        var firstPart = floor * 1000;
        var remaining = floor - 10;
        var secondPart = remaing * 800;
        brik = first + secondPart;
    }
    else {
        var firstPart = floor * 1000;
        var secondPart = floor * 800;
        var remaining = floor - 20;
        var thirdPart = remaining * Math.round(2000 / 3);
        brick = firstPart + secondPart + thirdPart;
    }
    return brick;
}

var count = brickCalculator(5);
console.log("Brick required to build this buildibng ", count, "pcs");

var marks = [89, 97, 89, 68, 94, 86, 79];


function largestNumber(numbers) {
    var larger = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];

        if (element > larger) {
            larger = element;
        }
    }
    return larger;
}
var numbers = [65, 45, 23, 11, 89, 91, 67, 61];

var output = largestNumber(numbers);
console.log("output", output);

function factorial(num) {
    var fact  = 1;
    for (var i = 1; i <= num; i++) {
        fact = fact*i;
    }
    return fact;
}

function factorialRecursive(num) {
    if (num == 1){
        console.log(num);
        return 1;
    }
    else {
        console.log(num, num - 1);
        return num = factorialRecursive(num-1);
    }
}
var result = factorialRecursive(10);
console.log("result", result);


var marks = [45, 81,,63, 56, 35, 23, 98];
var max = marks[0];

for (var i=0; i<marks.length; i++) {
    var element = marks[i];
    if (element > max) {
        max = emement;
    }
}
console.log("Heighest value is: ", max);



function getArraySum(numbers) {
    var sum = 0;

    for (var i = 0; i<numbers.length; i++) {
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var numbers = [45, 81, 63, 56, 35, 23, 98];

var result = getArraySum(numbers);

console.log("total of the numbers: ", result);

var total = getArraySum([ 43, 56, 12, 41, 86]);

console.log("total of the numbers: ", total);


var n = 128;

function isPrime(n) {
    for (i = 2; i<n; i++) {
        if(n % i == 0) {
            return "Not a Prime Number";
        }
    }
    return "Your Number is a prime number";
}
var result = isPrime(127);
console.log(result);

var name = "Javed Akbar";
if (name.length > 4) {
    name = "jubu";
}
console.log(name);

var name = [3, 6, 2, 7, 2, 1, 8, 9, 56, 2, 4, 6];

var uniqueName = [];

for (var i = 0; i<name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName);

function factorial(n) {
    var factorial(n) {
        for (var i = 1; i<=n; i++) {
            factorial = factorial * 1;
        }
        returnt factorial;
    }
    var result = factorial (10);
    console.log(result);
}