let btnXHR = document.querySelector("#xhr");
let quote = document.querySelector("#quote");
let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

btnXHR.addEventListener("click", () =>
{
    let XHR = new XMLHttpRequest();
    XHR.onreadystatechange = () =>
    {   
        if(XHR.readyState == 4 && XHR.status==200)
        {
            quote.textContent = JSON.parse(XHR.responseText);
        }
    }

    XHR.open("GET", url);
    XHR.send();
});

let btnFetch = document.querySelector("#fetch");

btnFetch.addEventListener("click", () =>
{
    fetch(url)
    .then(handleErrors)
    .then(parseData)
    .then(updateHTML)
    .catch(displayError);


    function handleErrors(request)
    {
        if(!request.ok)
        {
            throw Error(request.status);
        }
        return request;
    }
    function parseData(response)
    {
        return response.json().then((message) =>
        {
            return message;
        }
        );
    }
    function updateHTML(result)
    {
        quote.textContent = result;
    }
    function displayError(error)
    {
        console.log(error);
    }
});

$("#jquery").click(() =>
{
    $.getJSON(url)
    .done((response) =>
    {
        quote.textContent = response;
    })
    .fail((error) =>
    {
        console.log(error);
    })
})

$("#axios").click( () =>
{
    axios.get(url)
    .then((response) =>
    {
      quote.textContent = response.data;
    })
    .catch((error) =>
    {
        console.log(error);
    })
});
