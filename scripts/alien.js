class Alien
{
    setStartingPosition()
    {
        $("#alien").offset(
            {
                top: $("#saturn").offset().top,
                left: $("#saturn").offset().left + $("#alien").width() * 2
            }
        );
        console.log($("#alien").offset());
    }

    playAnimationAfterWait()
    {
        this.setStartingPosition();
        let alien = this;
        let interval = setInterval(function()
        {
            $('#alien').animate({top: "-=" + 10 + "%", left: "-=" + 10 + "%"}, {duration: 800});

            alien.startRepetitiveAnimation();
            clearInterval(interval);
        }, 800)
    }

    startRepetitiveAnimation()
    {
        this.repetitiveAnimationInterval = setInterval(this.repetitiveAnimation, 800)
    }

    repetitiveAnimation()
    {
        $("#alien").animate(
            { deg: 20 },
            {
                duration: 800,
                step: function(now) {
                    now = now - 40;
                    $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                },
            }
        )
            .animate(
            { deg: -5 },
            {
                duration: 800,
                step: function(now) {
                    now = now - 40;
                    $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                },
            });
    }

    stopRepetitiveAnimation()
    {
        clearInterval(this.repetitiveAnimationInterval);
    }
}