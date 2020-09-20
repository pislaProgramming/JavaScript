// Constructor function
function Person(name)
{
    this.name = name;
}
Person.prototype.sayHi = function()
{
    return "Hi " + this.name;
}
let alex = new Person("Alex");
// since we used new keyword, we ha established
// a link between the object and the protorype property
// we can access tha using __proto__
console.log(alex.__proto__ === Person.prototype);

// The Person.prototype object also have a property
// called constructor which points back to the function
console.log(Person.prototype.constructor === Person);


// Prototype chaining
function Vehicle(make, model, year)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}
Vehicle.prototype.turnOn = function()
{
    this.isRunning = true;
}
Vehicle.prototype.turnOff = function()
{
    this.isRunning = false;
}
Vehicle.prototype.honk = function()
{
    if(this.isRunning)
        return "beep";
}

// 1 - Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)
function Person(firstName, lastName, favoriteColor, favoriteNumber)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = new Array;
}

/* 2 - Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.fullName() // "Elie Schoppik"

*/
Person.prototype.fullName = function()
{
    return this.firstName + " " + this.lastName;
}

// 3 -  Add a property on the object created from the Person function called family which is an empty array. This will involve you going back and adding an additional line of code to your Person constructor you previously created in exercise 1.

/* 4 - Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor (HINT - take a look at the instanceof keyword). Make sure that your family array does not include duplicates! This method should return the length of the family array.


Examples: 
    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var anotherPerson = new Person()
    person.addToFamily(anotherPerson); // 1
    person.addToFamily(anotherPerson); // 1
    person.family.length // 1
    
    person.addToFamily("test"); // 1
    person.addToFamily({}); // 1
    person.addToFamily([]); // 1
    person.addToFamily(false); // 1
    person.family.length // 1
*/
Person.prototype.addToFamily = function(person)
{
    if(person.__proto__ === Person.prototype && !this.family.includes(person))
        this.family.push(person);

    return this.family.length;
}

// PART II 

// 1 - Implement your own version of Array.prototype.map. The function should accept a callback and return a new array with the result of the callback for each value in the array. 
Array.prototype.map = function(callback)
{
    let newArr = new Array;
    for(let i=0; i<this.length; i++)
        newArr.push(callback(this[i], i, this));

    return newArr;
}
/* 2 - Implement a function called reverse that reverses a string and place it on the String.prototype

Examples:
    "test".reverse() // "tset"
    "tacocat".reverse() // "tacocat"
*/
String.prototype.reverse = function()
{
    return this.split("").reverse().join("");
}