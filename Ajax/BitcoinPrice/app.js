let btn = document.querySelector("button");
let price = document.querySelector("#price");
// make request
btn.addEventListener("click", () =>
{
    let XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () =>
    {
        if (XHR.readyState == 4 && XHR.status == 200)
        {
            let newValue = JSON.parse(XHR.responseText).bpi.EUR.rate;
            price.textContent = newValue + " EUR";
        }
    }
    XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
});