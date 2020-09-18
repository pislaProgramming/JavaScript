let btn = document.querySelector("#btn");
let avatar = document.querySelector("#avatar");
let fullname = document.querySelector("#fullname");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let city = document.querySelector("#city");

btn.addEventListener("click", () =>
{   
    let url = "https://randomuser.me/api/";
    fetch(url)
        .then(handleErrors)
        .then(parseJSON)
        .then(updateProfile)
        .catch(printError)
});

function handleErrors(request)
{
    if(!request.ok)
    {
        throw Error(request.status);
    }
    return request;
}
function parseJSON(request)
{
    return request.json();
}
function updateProfile(response)
{
    let body = response.results[0];
    avatar.src = body.picture.medium;
    fullname.textContent =  body.name.first + " " + response.results[0].name.last; 
    username.textContent = body.login.username;
    email.textContent = body.email;
    city.textContent = body.location.city; 
}
function printError(error)
{
    console.log(error);
}