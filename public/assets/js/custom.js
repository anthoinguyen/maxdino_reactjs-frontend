$('.owl-carousel').owlCarousel({
    autoplay: 500,
    loop:true,
    margin:30,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        601:{
            items:3
        }
    }
})