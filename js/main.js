$(document).ready(function(){

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        items: 4,
        // nectadan ciqiwi
        margin: 30,
        // margi right
        loop: true,
        // tokrorlaydi
        nav: true,
        // sterelka ciqaradi
        dots: false,
        // har bitta card uchun alohida dots(tugma) chiqaradi
        autoplay: true,
        autoplayTimeout: 2000,
        // ozi otib turishi
        responsive: {
            0:{
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });


    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    // miwkadayam iwlatib beradi

});