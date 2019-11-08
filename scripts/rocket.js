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
            top :  $('#saturn').offset().top,
            left: $('#saturn').width()
        }
    }

    calculateExperiencePosition()
    {
        return {
            top: $('#space-station').offset().top + $('#space-station').height() - this.width * 1.5,
            left: $('#experience-container').width() / 2 - this.height / 2
        }
    }

    animateToNextSection()
    {
        switch(this.currentSection)
        {
            case 0:
                this.afterStart();
                this.animateToSkills();
                break;
            case 1 :
                this.animateToEducation();
                break;
            case 2 :
                this.afterStart();
                this.animateToExperience();
                break;
        }
        this.currentSection++;
    }

    animateToEducation()
    {
        let newPosition = this.calculateEducationPosition();

        $('#rocket')
            .animate({top: newPosition.top - 100 },{ duration : 700})
            .animate({top: newPosition.top },{ duration : 700})
            .animate(
                { deg: 80 },
                {
                    duration: 100,
                    step: function(now) {
                        now = now - 40;
                        $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                    },
                    complete: function() {
                        $('#rocket').css("background-image",'url("images/rocket.png")');
                    }
                }
            )
    }

    animateToSkills()
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

    animateToExperience()
    {
        let newPosition = this.calculateExperiencePosition();
        let currentPosition = this.getCurrentPosition();
        let distanceY = currentPosition.top - newPosition.top;

        $('#rocket')
            .animate({top: "-=" + distanceY/3 + "px", left: "+=200px" },{ duration : 100})
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
            .animate({top: "-=" + distanceY/3 + "px"},{ duration : 100})
            .animate(
                { deg: -40 },
                {
                    duration: 100,
                    step: function(now) {
                        now = now - 40;
                        $(this).css({ transform: 'rotate(' + now  + 'deg)' });
                    }
                }
            )
            .animate({top: "-=" + distanceY/3 + "px", left: "-=200px" },{ duration : 100})
            .animate({left: "-=200px" },{ duration : 100})

    }

    getCurrentPosition()
    {
        return $('#rocket').offset();
    }

    afterStart()
    {
        this.replaceToRocketWithFlames();
    }

    afterLanding()
    {
        this.replaceToRocketWithoutFlames();
    }

    replaceToRocketWithFlames()
    {
        $('#rocket').css("background-image",'url("images/rocketWithFlames.png")');
    }

    replaceToRocketWithoutFlames()
    {
        $('#rocket').css("background-image",'url("images/rocket.png")');
    }

}