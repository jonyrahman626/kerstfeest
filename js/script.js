$(function ($) {
    "use strict";
    
    var htmlBody = $('html, body');
    var windo = $(window);

    //fixed menu
    var bc2top = $(".top-btn");
    var $sticky = $(".menu");


    $('.slide_item').slick({
        dots: false,
        arrows: true,
        speed: 800,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class="fa fa-chevron-left left_arrow"></i>',
        nextArrow: '<i class="fa fa-chevron-right right_arrow"></i>',
    });

    var srtree = document.getElementById('banner_santa');
    if($("body").data("home") === "home_page"){
       var parallaxInstance = new Parallax(srtree, {
            relativeInput: false,
            scalarY: 5
        });
       }

    //animation scroll js

    $('.menu ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                htmlBody.animate({
                    scrollTop: target.offset().top - 150
                }, 1000);
                return false;
            }
        }
    });


    windo.on('scroll', function () {
        var $scrolling = $(this).scrollTop();

        if ($scrolling > 10) {
            $sticky.addClass("nav-bg");
        } else {
            $sticky.removeClass("nav-bg");
        }

        if ($scrolling > 130) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });

    // this is for back to top
    bc2top.on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 500);
    });


    new WOW().init();

    //countdown js 
    $("#getting-started")
        .countdown("2019/12/24", function (event) {
            $(this).html(
                event.strftime(
                    '<div class="col-6 col-md-2 col-sm-6"><h3>%D</h3> <h2>Days</h2></div>\
                    <div class="col-6 col-md-2 col-sm-6"><h3>%H</h3> <h2>Hours</h2></div>\
                    <div class="col-6 col-md-2 col-sm-6"> <h3>%M</h3> <h2>Minitus</h2></div>\
                    <div class="col-6 col-md-2 col-sm-6"><h3>%S</h3> <h2>Seconds</h2></div>')
            );
        });

    $('[data-toggle="tooltip"]').tooltip();

    //magnificPopup lightbox js
    $('.product_img_icon').magnificPopup({
        type: 'image',
        delegate: '.single_product_view',
        preload: [0, 2],
        gallery: {
            enabled: true
        },
        image: {
            cursor: 'mfp-zoom-out-cur',
            titleSrc: 'title',
            verticalFit: true,
            tError: '<a href="%url%">The image</a> could not be loaded.' // Error message
        }
    });

    $('.feedback_slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }

        ]
    });

    $('.discount-slide').slick({
        dots: false,
        arrows: false,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.slick_slider').slick({
        dots: false,
        arrows: false,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });




});
