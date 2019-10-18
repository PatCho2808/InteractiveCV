class Application
{
    constructor()
    {
        this.rocket = new Rocket();
        this.firstSection = "personal-information-container";
        this.currentSection = this.firstSection;

        $(window).scrollTop( $('#' + this.firstSection).offset().top);

        this.assignRandomPlanetsToSkills();
    }

    onSpaceUp()
    {
        this.rocket.animateToNextSection();
        this.scrollToNextSection();
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
            let number = Math.floor((Math.random() * 6) + 1);
            $(this).addClass('littlePlanet' + number);
        })
    }
}