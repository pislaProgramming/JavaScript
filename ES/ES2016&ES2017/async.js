/*
    The purpose of async functions is to simplify writing
    asynchronous code specifically Promises

    await pauses the execution of the async functions and is followed by a Promise.
    The await keyword waits for the promise to resolve
*/

async function getMostFollowers(...usernames)
{
    let baseUrl = "https://api.github.com/users/";
    let urls = usernames.map(username => $.getJSON(baseUrl + username));
    let results = await Promise.all(urls);
    let max = results.sort((a,b) => a.followers < b.followers)[0];
    
    return `${max.name} has the most followers with ${max.followers}`;
}

async function starWasString(id)
{
    let str = '';
    let results = await $.getJSON(`https://swapi.co/api/people/${id}/`);
    str += `${results.name} is featured in `;
    let movies = results.films[0];
    let moreResults = await $.getJSON(movies);
    str += `${moreResults.title}, directed by ${moreResults.director} `;
    let planetData = moreResults.planets[0];
    let finalResults = await $.getJSON(planetData);
    str += `and it takes place on ${finalResults.name}`;

    return str;

}