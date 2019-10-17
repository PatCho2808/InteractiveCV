$(document).ready(function()
{
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
            e.preventDefault();
            $('#rocket')
                .animate({top: 0, left: '30%'},{ duration : 500, queue: false})
                .animate(
                    { deg: 60 },
                    {
                        duration: 300,
                        step: function(now) {
                            now = now - 40;
                            $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                        },
                        queue : false
                    }
            );


        }


    });
});
