class Application
{
    constructor()
    {
        this.rocket = new Rocket();
        this.ufo = new Ufo();
        this.alien = new Alien();
        this.firstSection = "personal-information-container";
        this.currentSection = this.firstSection;
        this.isEnabledScrollingBySpace = true;
        this.numberOfSections = 4; //starting from 0
        this.numberOfCurrentSection = 0;

        $(window).scrollTop( $('#' + this.firstSection).offset().top);

        this.assignRandomPlanetsToSkills();
    }

    onSpaceUp()
    {
        if(this.isEnabledScrollingBySpace)
        {
            this.rocket.animateToNextSection();
            this.scrollToNextSection();
            if(this.numberOfCurrentSection == this.numberOfSections)
            {
                this.onEndOfApplication();
            }
            this.onEnterSection(this.numberOfCurrentSection);
        }
    }

    onEnterSection(newSection)
    {
        switch(newSection)
        {
            case 0:

                break;
            case 1 :

                break;
            case 2 :
                this.alien.playAnimationAfterWait();
                break;
            case 3 :
                this.ufo.playUpAnimationAfterWait(this.currentSection);
                break;
            case 4:
                break;
        }
    }

    onEscapeUp()
    {
        this.returnToPreviousSection();
        this.rocket.animateToPreviousSection();
    }

    onResize()
    {
        this.rocket.setPositionAfterResize();
    }

    returnToPreviousSection()
    {
        let prevSection = $('#' + this.currentSection).next().attr('id');
        let prevSectionPosition = $('#' + prevSection).offset().top;
        $('html, body').animate({scrollTop : prevSectionPosition}, { duration : 800});
        this.currentSection = prevSection;
        if(this.numberOfSections > 0) this.numberOfSections--;
    }


    scrollToNextSection()
    {
        let nextSection = $('#' + this.currentSection).prev().attr('id');
        let nextSectionPosition = $('#' + nextSection).offset().top;
        $('html, body').animate({scrollTop : nextSectionPosition}, { duration : 800});
        this.currentSection = nextSection;
        if(this.numberOfCurrentSection < this.numberOfSections) this.numberOfCurrentSection++;
    }

    assignRandomPlanetsToSkills()
    {
        $(".littlePlanet").each(function()
        {
            let number = Math.floor((Math.random() * 5) + 1);
            $(this).addClass('littlePlanet' + number);
        })
    }

    enableScrollingBySpace(enable)
    {
        this.isEnabledScrollingBySpace = enable;
    }

    getIsEnabledScrollingBySpace()
    {
        return this.isEnabledScrollingBySpace;
    }

    getPositionOfCurrentSection()
    {
        return $('#' + this.currentSection).offset().top;
    }


    enableScroll()
    {
        $("body").css("overflow-y", "auto");
    }

    onEndOfApplication()
    {
        this.enableScroll();
    }

}