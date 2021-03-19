$(function(){
    
    $('.slider__items').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    var mixer = mixitup('.product__content', {
        animation: {
            effects: 'fade translateZ(-100px)',
            duration: 600,}
        });

})