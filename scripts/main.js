$(document).ready(function()
{
    let application = new Application();

    $('body').keydown(function(e)
    {
        if(e.which == 32)
        {
            e.preventDefault();
        }

    });

    $('body').keyup(function(e)
    {
        if(e.which == 32) // pressed space
        {
            application.onSpaceUp();
        }
    });
});



