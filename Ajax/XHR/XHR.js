let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let XHR = new XMLHttpRequest;
// Current State
XHR.onreadystatechange = () =>
{
    // Request is done and worked
    if(XHR.readyState == 4 && XHR.status == 200)
    {
        console.log(XHR.responseText);
    }
};
XHR.open("GET", "https://api.github.com/zen");
XHR.send();