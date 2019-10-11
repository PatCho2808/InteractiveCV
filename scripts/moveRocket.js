$(document).ready(function()
{
    $('body').keyup(function(e)
    {
        if(e.which == 32) // pressed space
        {
            $('#rocket')
                .animate({top: -250, left: -100},1000)
                .animate(
                { deg: 60 },
                {
                    duration: 1200,
                    step: function(now) {
                        now = now - 40;
                        $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                    }
                }
            );


        }

    });
});
