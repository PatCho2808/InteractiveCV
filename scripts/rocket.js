class Rocket
{
    constructor()
    {
        $('#rocket').offset(this.calculateStartingPosition());
        this.width = $('#rocket').width();
        this.height = $('#rocket').height();
    }

    calculateStartingPosition()
    {
        let earthLeft = $('#earth').offset().left;
        let earthTop = $('#earth').offset().top;
        let rocketLeft = earthLeft - 100;
        let rocketTop = earthTop - 100;

        return { top : rocketTop, left : rocketLeft };
    }

    calculateSkillPosition()
    {
        return {
            top :  $('#skills-container').offset().top + $('#skills-container').height() / 2,
            left: $('#skills-container').width() / 2 - this.width / 2
        }
    }

    animateFromEarth()
    {
        let position = this.calculateSkillPosition();

        $('#rocket')
            .animate({top: position.top , left: position.left },{ duration : 500})
            .animate(
                { deg: 40 },
                {
                    duration: 300,
                    step: function(now) {
                        now = now - 40;
                        $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                    }
                }
            );
    }

}