$(function(){
    
    $('.slider-top__items').slick({
        dots: true,
        arrows: false,
        fade: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
    });

    $('.partner-slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    $('.btn-menu').on('click', function(){
        $('.nav-wrap').toggleClass('open');
        $('body').toggleClass('menu-open');
    });

    $('.btn-menu').on('click', function(){
        $('.navigation-menu').toggleClass('navigation-menu--active');
    });


    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');
    var config = {
    controls: {
        scope: 'local'
    }
    };
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
})