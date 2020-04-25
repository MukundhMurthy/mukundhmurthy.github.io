/*************************************************************************
    Template Name: Pitar
    Template URI: https://themeforest.net/user/codextree
    Description: A 'Pitar – Personal Portfolio Html5 Template' is perfect if you like a clean and modern design. This theme is ideal for Agency, Freelancer, Portfolio, and those who need an easy, attractive and effective way to share their work with clients.
    Author: codextree
    Version: 1.0
    Author URI: http://riyad.ninja
    
    
    Note: style js.
*************************************************************************/
/*
    
    00. Preloader
    01. Sticky Header
    03. Section Scroll
    04. Section Smoot Scroll
    04. Parallax Background
    05. Animated Progress
    06. Testimonail
    07. Fan Fact Counter
    08. Masonry
    09. IsoTop Postfolio
    10. Magnific Popup
    11. Google Map
 
==================================================
[ End table content ]
==================================================*/


(function($) {
    'use strict';
    
    var pitarApp = { 
        /* ---------------------------------------------
         00. Preloader
        --------------------------------------------- */
        preloader: function() {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
            var preloader = $('#preloader');
            if (!isMobile) {
                setTimeout(function() {
                    preloader.addClass('preloaded');
                }, 800);
                setTimeout(function() {
                    preloader.remove();
                }, 2000);
            } else {
                preloader.remove();
            }
        },

        /*-------------------------------------------
            01. Sticky Header
        --------------------------------------------- */
        stickyHeader: function() {
            var stickyMenu = $('.site_navigation').clone().appendTo('#sticky_menu');
            $(window).on('scroll', function() {
                var w = $(window).width();
                if (w > 992) {
                    if ($(this).scrollTop() > 550) {
                        $('#sticky_menu').slideDown(500);
                    } else {
                        $('#sticky_menu').slideUp(800);
                    }
                }
            });
        },
    
    
        /*-------------------------------------------
            02. Section Scroll
        --------------------------------------------- */
        sectionScroll: function() {
            var $s_scroll = $('#section_scroller_button');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height() - 300) {
                    $s_scroll
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $s_scroll
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $(".section_scroll").sectionScroller({
                scrollerButton: "#section_scroller_button",
                scrollType: "swing", 
                scrollDuration: 600
            });
        },
        
        /*-------------------------------------------
            03. Section Smoot Scroll
        --------------------------------------------- */
        smootScroll: function() {
            $.scrollIt({
                upKey: 38,                // key code to navigate to the next section
                downKey: 40,              // key code to navigate to the previous section
                easing: 'swing',          // the easing function for animation
                scrollTime: 700,          // how long (in ms) the animation takes
                activeClass: 'active',    // class given to the active nav element
                onPageChange: null,       // function(pageIndex) that is called when page is changed
                topOffset: -63            // offste (in px) for fixed top navigation
            });
        },
    
        /*-------------------------------------------
            04. Parallax Background
        --------------------------------------------- */
        bg_parallax: function () {
            $('.site_header > .page_cover').parallax("50%", -0.5);
        },  
            

        /* ---------------------------------------------
            05. Animated Progress
        --------------------------------------------- */
        animated_progress: function () {
            $('.progress_bar > span' ).each(function () {
                var $this = $(this);
                var width = $(this).data('percent');
                $this.css({
                    'transition': 'width 3s'
                });
                setTimeout(function () {
                    $this.appear(function () {
                        $this.css('width', width + '%');
                    });
                }, 500);
            });
        },
    
        /* ---------------------------------------------
            06. Testimonail
        --------------------------------------------- */
        testimonial: function () {
            $('#testimonial').owlCarousel({
                center: false,
                items: 2,
                autoplay: true,
                singleItem: true,
                smartSpeed:800,
                loop: true,
                margin: 30,
                nav: false,
                dots: true,
                responsive: {
                    280: {
                        items: 1
                    },
                    800: {
                        items: 1
                    },
                    992: {
                        items: 2
                    },
                    1400: {
                        items: 2
                    }
                }
            }); 
        },
        
        /* ---------------------------------------------
            07. Fan Fact Counter
        --------------------------------------------- */
        fan_fact: function () {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        },
    
    
        /* ---------------------------------------------
            08. Masonry
        --------------------------------------------- */
        grid_masonry: function () {
            if ($('#masonry').length > 0) {
                var container = $('#masonry');
                container.imagesLoaded(function () {
                    container.masonry({
                        itemSelector: '.grid'
                    });
                });
            }
        },
    
        /* ---------------------------------------------
            09. IsoTop Postfolio
        --------------------------------------------- */
        portfolio_isotop: function () {
            var $modelisotop = $('.portfolio_items_list');
            $modelisotop.isotope({
                filter: '*',
                animationOptions: {
                    duration: 1000,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.portfolio_work_nav > li a').on("click", function () {
                $('.portfolio_work_nav > li a').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $modelisotop.isotope({ 
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        },
    
        /* ---------------------------------------------
            10. Magnific Popup
        --------------------------------------------- */
        magnific_popup: function () {
            $('.single_work .work_thumb').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, 
                    duration: 300, 
                    easing: 'ease-in', 
                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        },

        /* ---------------------------------------------
            11. Google Map
        --------------------------------------------- */
        google_map: function () {
            if ($('#gmap').length) {
                var map;
                map = new GMaps({
                    el: '#gmap',
                    lat: 43.04446,
                    lng: -76.130791,
                    scrollwheel: false,
                    zoom: 10,
                    zoomControl: true,
                    panControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    overviewMapControl: false,
                    clickable: false
                });                
                var image = 'images/map-icon.png';
                map.addMarker({
                    lat: 43.04446,
                    lng: -76.130791,
                    icon: image,
                    animation: google.maps.Animation.DROP,
                    verticalAlign: 'bottom',
                    horizontalAlign: 'center'
                });  
            }
        },
    
        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {   
            pitarApp.preloader();
            pitarApp.stickyHeader();
            pitarApp.sectionScroll();
            pitarApp.smootScroll();           
            pitarApp.bg_parallax();       
            pitarApp.animated_progress();       
            pitarApp.testimonial();       
            pitarApp.fan_fact();     
            pitarApp.grid_masonry();     
            pitarApp.portfolio_isotop();     
            pitarApp.magnific_popup();        
            pitarApp.google_map();        
        }
    };

    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        pitarApp.initializ();
    }); 
    

})(jQuery);
