;(function () {

    'use strict';

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i); // 大文字と小文字の違いは無視
        },
        BlackBerry : function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS : function () {
            return navigator.userAgent.match(/iPhone|iPad/i);
        },
        Opera : function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows : function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any : function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var fullHeight = function () {
        if(!isMobile.any()){
            $('.js-fullheight').css('height', $(window).height());
            $(window).resize(function () {
                $('.js-fullheight').css('height', $(window).height);
            })
        }
    };

    var sliderMain = function() {
        $('#fh5co-hero').find('.flexslider').flexslider({
            animation: "fade",
            slideshowSpeed: 5000,
            directionNav: true,
            start: function(){
                setTimeout(function(){
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 1200);
            },
            before: function(){
                setTimeout(function(){
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 100);
            }

        });

        $('#fh5co-hero').find('.flexslider .slides > li').css('height', $(window).height());
        $(window).resize(function(){
            $('#fh5co-hero').find('.flexslider .slides > li').css('height', $(window).height());
        });

    };

    $(function(){
        fullHeight();
        sliderMain();
    });

}());