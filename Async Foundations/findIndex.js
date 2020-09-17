let arr = [3,4,6,2,1];
arr.findIndex((curElement, curIndex, array) =>
{
    return curElement===6;
});

function myFindIndex(array, callback)
{
    for(let i=0; i<array.length; i++)
        if(callback(array[i], i, array))
            return i;

    return -1;
}

console.log(myFindIndex(arr, function(element, index, array)
{
    return element===6;
}));