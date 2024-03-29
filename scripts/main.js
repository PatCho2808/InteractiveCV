$(document).ready(function()
{
    let application = new Application();

    $('body').keydown(function(e)
    {
        if(e.which == 32 && application.getIsEnabledScrollingBySpace())
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

        if(e.which == 27) // pressed space
        {
            application.onEscapeUp();
        }
    });

    $('input, textarea').focusin(function(e)
    {
        console.log("focus");
        application.enableScrollingBySpace(false);
    });

    $('input, textarea').focusout(function(e)
    {
        console.log("focus");
        application.enableScrollingBySpace(true);
    });

    $( window ).resize(function() {
        application.onResize();
    });


});



