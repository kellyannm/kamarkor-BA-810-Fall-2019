//Number 1
function convertTemp(temp, toScale){
    if(toScale === 'C'){
        return (temp - 32) / 1.8;
    } else if (toScale === 'F'){
        return (temp * 1.8) + 32;
    } else {
        return 'Error';
    }
}

console.log(convertTemp(20,'G'));


//Number 2

function compare(x, y){
    let result = x > y ? x : y;
    return result;
}

console.log(compare(145, 87));


//Number 3

function math(mathExpression){
    let values = mathExpression.split(" ");
    switch(values[1]){
        case "+":
            return parseFloat(values[0]) + parseFloat(values[2]);
            break;
        case "-":
            return parseFloat(values[0]) - parseFloat(values[2]);   
            break;
        case "*":
            return parseFloat(values[0]) * parseFloat(values[2]);
            break;
        case "/":
            return parseFloat(values[0]) / parseFloat(values[2]);
            break;
    }
}

console.log(math('4 - 5'));


//Number 4

function reverseString(myString){
    return myString.split('').reverse().join('');
}

console.log(reverseString('cat'));


//Number 5

function sortNumbers(a, b, c){
    let myArray = [a, b, c];

    myArray.sort(function(a, b){return a-b});

    myArray.forEach(item => {
        console.log(item);
    })
}

sortNumbers(6, 56, 8);

//Number 6

function calcAverage(studentArray){
    let average = 0;
    studentArray.forEach(item => {
        average += item[1];
    })

    studentArray.sort(function(a,b){return a[1] - b[1]});
    console.log(studentArray);

    return average /  studentArray.length;
}

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

console.log(calcAverage(students));

//Number 7

function circle(radius){
    this.radius = radius;

    this.area = function(){
        return Math.PI * this.radius ** 2;
    }

    this.circumference = function(){
        return 2 * Math.PI * this.radius;
    }
}

let circle1 = new circle(3);

console.log(circle1.area());
console.log(circle1.circumference());

//Number 8

function Grain(maxPPG, quantity) {
    this.maxPPG = maxPPG;
    this.quantity = quantity;

    this.QuantityTimesmaxPPG = function(){
        return this.maxPPG * this.quantity;
    }
}

function Mash(volume){
    this.volume = volume;
    this.grains = new Array();

    this.addGrain = function(maxPPG, quantity){
        this.grains.push(new Grain(maxPPG, quantity));
    }

    this.calcEOG = function(){
        let OG = 0;
        this.grains.forEach(item => {
            OG += item.QuantityTimesmaxPPG();
        });
        return OG / this.volume;
    }

}

let myMash = new Mash(7);

myMash.addGrain(37, 9);
myMash.addGrain(35, .75);

console.log(myMash.calcEOG());



