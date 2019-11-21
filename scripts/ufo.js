class Ufo
{
    constructor()
    {
        this.setStartingPosition();
        this.height = $("#ufo").height();
        this.width = $("#ufo").width();
    }

    setStartingPosition()
    {
        $('#ufo').offset(
            {
                top: $('#education-container').offset().top + $('#education-container').height() ,
                left: $( document ).width()
            }
        );
    }

    calculateEndingPosition()
    {
        return {
            top: $('#experience-container').offset().top + $('#experience-container').height(),
            left: -100
        };
    }

    getCurrentPosition()
    {
        return $('#rocket').offset();
    }


    playAnimationAfterWait()
    {
        let duration = 500;
        let durationDown = 200;
        let numberOfStages = 5;
        let newPosition = this.calculateEndingPosition();
        let currentPosition = this.getCurrentPosition();
        let distanceWidth = currentPosition.left - newPosition.left;
        let distanceHeight = currentPosition.top - newPosition.top;
        let waitingDuration = 800;
        let stepHeightUp = 30;
        let stepHeightDown = -5;
        //let stepWidth = distanceWidth / numberOfStages;
        let stepWidth = 26;
        console.log(stepWidth);

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
        }, waitingDuration)


    }
}