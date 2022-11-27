$('.slider').slick({
    slidesToShow:2,
    arrows: false,
    dots: true, 
    responsive: [{
        breakpoint:768,
        settings:{
            slidesToShow: 1
        }
    }]
});

$(document).ready(function() {
    $('.header_burger').click(function() {
        $('.header_burger, .nav_menu_mobile').toggleClass('open-menu');
    });
});