$("#btn").click(() =>
{
    $.getJSON("https://dog.ceo/api/breeds/image/random")
    .done((result) =>
    {
        $("#photo").attr("src", result.message);
    })
    .fail((error) =>
    {
        console.log(error);
    });
})