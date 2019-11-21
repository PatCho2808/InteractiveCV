class Ufo
{
    setStartingPosition(namOfTheContainer)
    {
        $('#ufo').offset(
            {
                top: $('#' + namOfTheContainer).offset().top + $('#' + namOfTheContainer).height() ,
                left: $( document ).width()
            }
        );
    }

    playUpAnimationAfterWait(namOfTheContainer)
    {
        this.setStartingPosition(namOfTheContainer);
        let interval = setInterval(function()
        {
            $('#ufo')
                .animate({top: "-=" + 60 + "%", left: "-=" + 90 + "%", deg: 50},
                    { duration : 800,
                        step: function(now) {
                            now = now - 40;
                            $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                        }})
                .animate({top: "-=" + 30 + "%", left: "+=" + 60 + "%", deg:10},
                    { duration : 800,
                        step: function(now) {
                            now = now - 40;
                            $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                        }})
                .animate({top: "-=" + 60 + "%", left: "-=" + 100 + "%", deg:50},
                    { duration : 500,
                        step: function(now) {
                            now = now - 40;
                            $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                        }});


            clearInterval(interval);
        }, 800)
    }

    playDownAnimationAfterWait(namOfTheContainer)
    {
        this.setStartingPosition(namOfTheContainer)
        let interval = setInterval(function()
        {
            $('#ufo')
                .animate({top: "-=" + 60 + "%", left: "-=" + 90 + "%", deg: 50},
                    { duration : 800,
                        step: function(now) {
                            now = now - 40;
                            $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                        }})
                .animate({top: "-=" + 30 + "%", left: "+=" + 60 + "%", deg:10},
                    { duration : 800,
                        step: function(now) {
                            now = now - 40;
                            $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                        }})
                .animate({top: "-=" + 60 + "%", left: "-=" + 100 + "%", deg:50},
                    { duration : 500,
                        step: function(now) {
                            now = now - 40;
                            $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                        }});


            clearInterval(interval);
        }, 800)
    }
}