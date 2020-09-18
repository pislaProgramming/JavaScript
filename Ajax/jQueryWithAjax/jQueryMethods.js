$.ajax(
    {
        method: "GET",
        url: "some.api.com"
    }
)
.done((result) =>
{
    // the result is already parsed
})
.fail((error) =>
{

});