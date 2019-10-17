class Application
{
    constructor()
    {
        this.rocket = new Rocket();
        $(window).scrollTop( $('#personal-information-container').offset().top);

        $('body').keydown(function(e)
        {
            if(e.which == 32)
            {
                e.preventDefault();
            }

        });
    }

    onSpaceUp()
    {
        this.rocket.animateFromEarth();
        this.scrollToNextSection();
    }

    scrollToNextSection()
    {
       // $(window).scrollTop( $('#skills-container').offset().top);
        let nextSectionPosition = $('#skills-container').offset().top;
        $('html, body').animate({scrollTop : nextSectionPosition}, { duration : 800});

    }
}