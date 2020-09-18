let btn = document.querySelector("#btn");
let photo = document.querySelector("#photo");
// listen for clicks
btn.addEventListener("click", () =>
{
    // make the request
    let XHR = new XMLHttpRequest();  

    XHR.onreadystatechange = () =>
    {
        if(XHR.readyState == 4 && XHR.status == 200)
        {   
            let sourceImg = JSON.parse(XHR.responseText).message;
            photo.src = sourceImg;
        }
    };
    XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
    XHR.send();
});
