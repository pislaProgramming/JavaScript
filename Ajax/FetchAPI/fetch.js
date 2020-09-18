fetch(url,{
        method: "POST",
        body: JSON.stringify(
            {
                name: "blue",
                login: "bluecat"
            }
        )
})
.then((result) =>
{
    if(!result.ok)
    {
        throw Error(result.status);
    }
    return result.json();
})
.then((response) =>
{
    // do something
})
.catch((error) =>
{
    // handle error
});