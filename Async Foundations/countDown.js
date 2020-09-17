function countDown(seconds)
{
    let timerId = setInterval(() =>
    {
        console.log("Timer:", seconds);
        seconds--;
        if(seconds===0)
        {   
            console.log("Ring Ring Ring!!!");
            clearInterval(timerId);
        }

    }, 1000);
}

countDown(3);