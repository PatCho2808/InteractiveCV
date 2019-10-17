$(document).ready(function()
{
    let application = new Application();

    $('body').keyup(function(e)
    {
        if(e.which == 32) // pressed space
        {
            application.onSpaceUp();
        }
    });
});



