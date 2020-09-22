/*
    A special kind of function which can pause
    execution and resume at any time
*/
function* pauseAndReturnValues(num)
{
    for(let i=0; i < num; i++)
        yield i;
}
let gen = pauseAndReturnValues(5);
gen.next(); // {value: 0, done: false}
gen.next(); // {value: 1, done: false}