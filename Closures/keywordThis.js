/* 
    1. Global Context
    When 'this' is not inside of a declared object

*/
console.log(this) // window object

/* 
    Strict Mode 
    Prevent from declaring global variables inside a function    
*/
"use strict"
function whatIsThis()
{
    return this;
}

whatIsThis(); //undefined

/*
    2. Implicit Binding
    When 'this' is inside of a declared object
*/

let person1 = 
{
    firstName : "Alex",
    sayHi: () =>
    {
        return "Hi " + this.firstName; //Hi Alex
    },
    determineContext: () =>
    {
        return this === person; //true
    }
}

/*
    3. Explicit Binding
    Choose what we want the context of 'this' to be using call, apply or bind
*/

/* 
    Call
    Parameters: thisArg,a,b,c,...
    Invoke function immediatly
*/
function sayHi()
{
    return "Hi " + this.firstName;
}
let alex = 
{
    firstName: "Alex",
}
let ruso = 
{
    firstName: "Ruso"
}
sayHi.call(alex); //Hi Alex
sayHi.call(ruso); //Hi Ruso
/*
    Apply
    Parameters: thisArg,[a,b,c...]
    Invoke function immediatly
*/

/*
    Bind
    Parameters: thisArg,a,b,c,...
    Do not invoke function immediatly!!
    Return a function definition whith the value of keyword 'this'
    already set

    Partial application
*/
function addNumbers(a,b,c,d)
{
    return this.firstName + " just calculated " + (a+b+c+d);
}
let alexCalc = addNumbers.bind(alex,1,2,3,4); // function(){....}
alexCalc(); //Alex just calculated 10

//With bind - we do not need to know all the arguments up front!
let rusoCalc = addNumbers.bind(ruso,1,2);
rusoCalc(3,4); //Ruso just calculated 10

/* Asynchronous example */
let person =
{
    firstName: "alex",
    sayHi: () =>
    {
        setTimeout(function()
        {
            console.log("Hi "+ this.firstName);

        }.bind(this), 1000);
    }
}

/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject){
    
    return Array.prototype.slice.call(arrayLikeObject);
}

/* 
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments(){
    
    let sum = 0;  
    for(let index=0; index<arguments.length; index++)
        if(arguments[index]%2===0)
            sum+=arguments[index];
    return sum;
}

/* 
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, num){
    
    return function ()
    {   
        if(num > 0)
        {   
            num--;
            return fn.apply(this, arguments);
        }
        else
            return "Maxed Out!";
    }
}
/* 
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined
    
    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }
    
    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined
    

*/

function once(fn, thisArg){

    let count = 0;
    return function()
    {   
        count++;
        if(count===1)
            return fn.apply(thisArg, arguments);
    }   
}

// BONUSES! 

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"
    
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue" 
    
    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg){
    
    let outerArguments = arguments;
    console.log(outerArguments);
    return function()
    {   
        let innerArguments = arguments;
        console.log(innerArguments);
        return fn.apply(thisArg, Array.prototype.slice.call(outerArguments,2).concat(Array.prototype.slice.call(innerArguments)));
    }
}
/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure! 

Flip should return a new function that when invoked takes the correct number of required arguments to that function which are then reversed. HINT - you will need to use the .length property on functions to figure out the correct amount of arguments. For example:

flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) 




Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"
    
    function subtractFourNumbers(a,b,c,d){
        return a-b-c-d;
    }

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/


function flip(fn, thisArg){
    
    let outerArguments = arguments;
    return function()
    {   
        let innerArguments = arguments;
        return fn.apply(thisArg, Array.prototype.slice.call(outerArguments,2).concat(Array.prototype.slice.call(innerArguments)).slice(0, fn.length).reverse());
    }
}

/*
    4. The 'new' keyword
    When a new object is created
*/

function Person(firstName, lastName)
{
    this.firstName = firstName;
    this.lastName = lastName;
}
let elie = new Person("Elie", "Schoppik");




