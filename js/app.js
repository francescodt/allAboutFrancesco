'use strict';
console.log('This is working!');

var username = prompt('What is your name?');
console.log(userName);
alert('Hello World, I mean ' + userName);

var lowerCaseName = userName.toLowerCase();

if (lowerCaseName === 'Francesco'){
    alert('Welcome back, Francesco');
}   else {
        alert('Welcome Back!')
        
}

var answerOne = confirm('Do you want to begin your coding journey?');

if(answerOne === true || answerOne !== true){
    alert('Let us go on a Journey throughout time and space.');
    console.log('Space time is going on.');
} else {
    console.log('Okay, stay grounded my friend.');

}

var myBooleanValueTrue = true;
var anotherBooleanValueFalse = false;
var thirdBooleanValueTrue = true;

if(myBooleanValueTrue && thirdBooleanValueTrue){
    alert('the && will run if both conditions return true.');
} else if(myBooleanValueTrue || anotherBooleanValueFalse){
    alert('The || will run if one or both of the values return true.');
    console.log('It is truthy just enough...');
// this may not work, something with the if and else if. you can remove the first if, and convert the second to if and should run
}

if(thirdBooleanValueTrue && anotherBooleanValueFalse) {
    console.log('This should not run');

}

alert('Welcome nerds.');

var spaceHandle = prompt('What is your space ship handle?')
var spaceShipPart = prompt('What part are you seeking?')

switch (spaceShipPart){
    case '1':
        console.log('This is space ship part one.');
    break;
    case '2':
        console.log('This is space ship part two.');
    break;
    case '3':
        console.log('This is space ship part three.');
    break;
    default: 
    alert('We do not have the parts you are looking for.');

}

// var emptyArray = [];

// var quizAnswers = ['b', 'd', 'a', 'a', 'c'];

// var nestedArray = [ ['yes', 'y'], ['no', 'n'], ['no', 'n'] ];

// var multiLineArray