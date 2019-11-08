class Application
{
    constructor()
    {
        this.rocket = new Rocket();
        this.firstSection = "personal-information-container";
        this.currentSection = this.firstSection;
        this.isEnabledScrollingBySpace = true;

        $(window).scrollTop( $('#' + this.firstSection).offset().top);

        this.assignRandomPlanetsToSkills();
    }

    onSpaceUp()
    {
        if(this.isEnabledScrollingBySpace)
        {
            this.rocket.animateToNextSection();
            this.scrollToNextSection();
        }
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


}