class Rocket
{
    constructor()
    {
        $('#rocket').offset(this.calculateStartingPosition());
        this.width = $('#rocket').width();
        this.height = $('#rocket').height();
        this.currentSection = 0;
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

    calculateEducationPosition()
    {
        return {
            top :  $('#education-container').offset().top + $('#skills-container').height() / 2,
            left: $('#education-container').width() / 2 - this.width / 2
        }
    }

    animateToNextSection()
    {
        switch(this.currentSection)
        {
            case 0: this.animateFromEarth();
                break;
            case 1 : this.animateFromSkills();
                break;
        }
        this.currentSection++;
    }

    animateFromSkills()
    {
        let newPosition = this.calculateEducationPosition();

        $('#rocket')
            .animate({top: newPosition.top },{ duration : 700});
    }

    animateFromEarth()
    {
        let newPosition = this.calculateSkillPosition();
        let currentPosition = this.getCurrentPosition();
        let distanceY = currentPosition.top - newPosition.top;

        $('#rocket')
            .animate({top: "-=" + distanceY/3 + "px", left: "+=10px" },{ duration : 100})
            .animate(
                { deg: 80 },
                {
                    duration: 100,
                    step: function(now) {
                        now = now - 40;
                        $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                    }
                }
            )
            .animate({top: "-=" + distanceY/3 + "px", left: newPosition.left },{ duration : 500})
            .animate(
                { deg: 40 },
                {
                    duration: 100,
                    step: function(now) {
                        now = now - 40;
                        $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                    }
                }
            )
            .animate({top: "-=" + distanceY/3 + "px" },{ duration : 200});


    }

    getCurrentPosition()
    {
        return $('#rocket').offset();
    }

    bouncingAnimation()
    {
        $('#rocket')
            .animate({top: "-=" + 10 + "px", left: "+=10px" },{ duration : 100})
            .animate({top: "+=" + 10 + "px", left: "+=10px" },{ duration : 100})
    }

}