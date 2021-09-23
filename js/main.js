$(".slider").slick({
    arrows: true,
    slidesToShow: 3,
    dots:true,
    autoplay:true,
    autoplaySpeed:1000,

    responsive:[
        {
        breakpoint: 768,
        settings: {
            arrows:false,
            slidesToShow:1,
            autoplay:false
        }
    }]
})