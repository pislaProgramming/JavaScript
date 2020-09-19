function doubleValues(arr)
{
    var newArr = [];
    arr.forEach((value) =>
    {
        newArr.push(value*2);
    });

    return newArr;
}

function onlyEvenValues(arr)
{
    var newArr = [];
    arr.forEach((value) =>
    {   
        if(value%2===0)
            newArr.push(value);
    });

    return newArr;
}

function showFirstAndLast(arr)
{
    var newArr = [];
    arr.forEach((value) =>
    {
        newArr.push(value.slice(0,1) + value.slice(-1));
    });
    return newArr;
}

function addKeyAndValue(arr, key, value)
{
    arr.forEach((object) =>
    {
        object[key] = value;
    });
    return arr;
}

function vowelCount(str)
{
    const vowels = ["a", "e", "i", "o", "u"];
    var foundVowels = {};
    var splitArr = str.split("");

    splitArr.forEach((letter) =>
    {
        if(vowels.includes(letter.toLowerCase()))
        {   
            let vowel = letter.toLowerCase();
            if(vowel in foundVowels)
                foundVowels[vowel]++;
            else
                foundVowels[vowel] = 1;
        }

    });
    return foundVowels;
}   