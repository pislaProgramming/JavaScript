/*
    const
    Allow us to create constants or values which can not be redeclare
    Can mutate if it is an object, but not declare again
*/
const numbers = [1,2,3,4];
numbers.push(10); // it works

/*
    let
    Can reassing, can not redeclare
    Hoisting
    When you do not want the variables inside of a block to be accessivle outside
*/