let p1 = new Promise((resolve, reject) =>
{   
    let num = Math.random();
    if(num < 0.5)
        resolve(num);
    else
        reject(num);
});

p1
    .then((result) =>
    {
       return result*10;
    })
    .then((result) =>
    {
        console.log(Math.floor(result));
    })
    .catch((error) =>
    {
        console.log("Promise p1 was rejected", error);
    });