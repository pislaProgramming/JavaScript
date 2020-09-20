/*
    It creates an empty object
    Sets the keyword 'this' to be that empty object
    Adds the line "return this" to the end of the function
    Adds a property onto the empty object called "__proto__", which
    links the prototype property on the constructor function to the empty object
*/

function Dog(name, age)
{
    this.name = name;
    this.age = age;
    this.bark = function ()
    {
        return this.name + " just barked!";
    }
}
let rusty = new Dog("Rusty", 3);
rusty.bark();

// PART 1

// Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber. Your function MUST be named Person. 
function Person(firstName, lastName, favoriteColor, favoriteNumber)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
}

// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the object created from the Person functions' favorite number.
function multiplyFavoriteNumber(num)
{
    let person = new Person("Alex", "Pislariu", "blue", 3);
    return num * person.favoriteNumber;
}
// PART 2

// Given the following code - refactor the Child function to remove all the duplication from the Parent function. You should be able to remove 4 lines of code in the Child function and replace it with 1 single line.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child()
{    
    Parent.apply(this, arguments);
}