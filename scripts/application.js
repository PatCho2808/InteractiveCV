class Application
{
    constructor()
    {
        this.rocket = new Rocket();
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
            if(this.currentSection == "contact-container")
            {
                this.onEndOfApplication();
            }
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
    }


    scrollToNextSection()
    {
        let nextSection = $('#' + this.currentSection).prev().attr('id');
        let nextSectionPosition = $('#' + nextSection).offset().top;
        $('html, body').animate({scrollTop : nextSectionPosition}, { duration : 800});
        this.currentSection = nextSection;
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
        $( window ).unbind('scroll');
    }

    onEndOfApplication()
    {
        this.enableScroll();
    }

}