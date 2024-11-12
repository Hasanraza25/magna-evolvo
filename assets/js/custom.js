$('document').ready(function () {

    ///// Modal Window Popup
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    });
    
    ///// Scroll Function
    $(window).scroll(function () {
        if ($(window).scrollTop() > 5) {
            $('.headerTop').addClass('fixed');
        } else {
            $('.headerTop').removeClass('fixed');
        }
    });

    $('[data-toggle="tooltip"]').tooltip({
        //  placement: 'bottom',
        html: true
    });

    ///// Smooth Scroll
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    }); // Smooth Scroll End

    ///// Service Script 
    var $windowWidth = $(window).width();
    if ($windowWidth > 767) {
        var serHeight = $('.serviceSlider').outerHeight();
        $('.serviceHead').height(serHeight);
    }

    ////// Portfolio Tabs
    function portfolioTabs(select) {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: select,
            layoutMode: 'fitRows',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: true
            }
        });
    }
    portfolioTabs("*");
    $('.portTabs ul li a').click(function () {
        $('.portTabs ul li .active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        portfolioTabs(selector);
        return false;
    });

    ///// on Scroll Animation
    function animatePort() {
        console.log('Working');
        // $('.block').addClass('active');
        // $('.block').each(function () {
        //     $(this).addClass('active');
        // });
    }

    // Parallex Animation
    var $animation_element = $('.block');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_element, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
                $element.addClass('active');
            }/* else {
			$element.removeClass('do-animate');
		} */
        });
    }
    $window.on("scroll resize", check_if_in_view);
    $window.trigger("scroll");

    /////// Contact Form Script
    $('.signPlace').each(function () {
        if ($(this).val().length > 0) {
            $(this).siblings('.placeholder').addClass('placeFocus');
            $(this).siblings('.lineBottom').addClass('lineOpen');
        }
    });
    $('.signPlace').focus(function () {
        $(this).siblings('.placeholder').addClass('placeFocus');
        $(this).siblings('.lineBottom').addClass('lineOpen');
    });
    $('.signPlace').blur(function () {
        if ($(this).val().length === 0) {
            $(this).siblings('.placeholder').removeClass('placeFocus');
            $(this).siblings('.lineBottom').removeClass('lineOpen');
        }
    });

    ////// App Dev Inner Page 
    var detailHeight = $('.detailText').innerHeight();
    $('.detailPicOuter').css('min-height', detailHeight);

    ////// Case Study Mouse Move
    $(".galleryOuter").on('mousemove', function (e) {
        var width = $(this).innerWidth();
        var height = $(this).innerHeight();
        $('.galleryMain [class^="inner"]').each(function () {
            // var pixelValue = $(this).attr('value');
            var pixelToMove = $(this).attr('value');
            var newValueX = Math.floor((e.clientX / width) * pixelToMove);
            var newValueY = Math.floor((e.clientY / height) * pixelToMove);
            $(this).css({ 'transition-delay': '0s', 'transition-duration': '0.2s' });
            // $(this).css({ 'transform': 'translate(' + newValueX + 'px, ' + newValueY + 'px)' });
            $(this).css({ 'transform': 'matrix(1, 0, 0, 1,' + newValueX + ',' + newValueY + ')' });
        });
    });

    ////// Career Tabs
    $('.openingContent').hide('fast');
    $('.openingContent.active').show('fast');
    $('.openingTabs ul li a').on('click', function (e) {
        e.preventDefault();
        var careerValue = $(this).attr('value');
        $('.openingContent').removeClass('active').hide();
        $('.' + careerValue).addClass('active').show();
        $('.openingTabs ul li').removeClass('active');
        $(this).parent().addClass('active');
    });

    ////// Job Tabs
    $('.jobBody .content').hide('fast');
    $('.jobBody .content.active').show('fast');
    $('.jobBody .tabs ul li a').on('click', function (e) {
        e.preventDefault();
        var careerValue = $(this).attr('value');
        $('.jobBody .content').removeClass('active').hide();
        $('.' + careerValue).addClass('active').show();
        $('.jobBody .tabs ul li').removeClass('active');
        $(this).parent().addClass('active');
    });

    ////// Partner Tabs
    $('.partnerTabs ul li a').on('click', function (e) {
        e.preventDefault();
        var careerValue = $(this).attr('value');
        $('.partnerBody').removeClass('active').hide();
        $('.' + careerValue).addClass('active').show();
        $('.partnerTabs ul li').removeClass('active');
        $(this).parent().addClass('active');
    });

    ////// Home Portfolio Tabs
    $(window).on('load', function () {
        $('.homePortContent').hide('fast');
        $('.homePortContent.active').show('fast');
        $('.homePortTabs ul li a').on('click', function (e) {
            e.preventDefault();
            var careerValue = $(this).attr('value');
            $('.homePortContent').removeClass('active').hide();
            $('.' + careerValue).addClass('active').show();
            $('.homePortTabs ul li').removeClass('active');
            $(this).parent().addClass('active');
        });
    });



    ////// Home Portfolio Tabs
    $(window).on('load', function () {
        $('.how-we-work-Content').hide('fast');
        $('.how-we-work-Content.active').show('fast');
        $('.how-we-work-tabs ul li a').on('click', function (e) {
            e.preventDefault();
            var careerValue = $(this).attr('value');
            $('.how-we-work-Content').removeClass('active').hide();
            $('.' + careerValue).addClass('active').show();
            $('.how-we-work-tabs ul li').removeClass('active');
            $(this).parent().addClass('active');
        });
    });    

    /////// Careers Slider
    var i = 1;
    var str1 = 'openingSlider'
    var str2 = '.openingSlider';
    $('.openingSlider').each(function (index, value) {

        var classAdd = str1 + i;
        var classCall = str2 + i;
        var next_slider = 'opening-next' + i;
        var prev_slider = 'opening-prev' + i;
        $(this).addClass(classAdd);
        $(this).find(".sliderArrows.left").addClass(prev_slider);
        $(this).find(".sliderArrows.right").addClass(next_slider);
        new Swiper(classCall, {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: false,
            navigation: {
                nextEl: ('.' + next_slider),
                prevEl: ('.' + prev_slider),
            },
            breakpoints: {
                991: {
                    slidesPerView: 1,
                }
            }
        });
        i++;
    });

    /////// Service Slider
    var swiper = new Swiper('.serviceSlider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: true,
        // },
        navigation: {
            prevEl: '.service-prev',
            nextEl: '.service-next',
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            500: {
                slidesPerView: 1,
            }
        }
    });

    /////// Portfolio Slider
    var swiper = new Swiper('.portfolioSlider', {
        slidesPerView: 3,
        spaceBetween: 0,
        loop: false,
        navigation: {
            prevEl: '.portfolio-prev',
            nextEl: '.portfolio-next',
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            }
        }
    });

    /////// CRM Slider
    var swiper = new Swiper('.crmSlider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            prevEl: '.crm-prev',
            nextEl: '.crm-next',
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            }
        }
    });

    /////// HRM Slider
    var swiper = new Swiper('.hrmSlider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            prevEl: '.hrm-prev',
            nextEl: '.hrm-next',
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            }
        }
    });

    /////// Client Slider
    var swiper = new Swiper('.clientSlider', {
        slidesPerView: 6,
        spaceBetween: 0,
        loop: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '.clients-prev',
            nextEl: '.clients-next',
        },
        breakpoints: {
            1199: {
                slidesPerView: 4,
            },
            767: {
                slidesPerView: 2,
            },
            479: {
                slidesPerView: 1,
            }
        }
    });

    /////// PArtnership Slider
    var swiper = new Swiper('.partnership-slider', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            prevEl: '.abouta-prev',
            nextEl: '.abouta-next',
        },
        breakpoints: {
            767: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 2,
            }            
        }
    });


    /////// Industries Slider
    var swiper = new Swiper('.industries-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        navigation: {
            prevEl: '.abouta-prev',
            nextEl: '.abouta-next',
        },
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            758: {
                slidesPerView: 3,
            },
            575: {
                slidesPerView: 2,
            }             
        }
    });    


    /////// App page Slider
    var swiper = new Swiper('.ctm-app-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1500,
        loop: false,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
        },       
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            }            
        }
    });    


    /////// About Slider
    var swiper = new Swiper('.aboutSlider', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        navigation: {
            prevEl: '.about-prev',
            nextEl: '.about-next',
        },
        breakpoints: {
            767: {
                slidesPerView: 1,
            }
        }
    });

    /////// Team Slider
    var swiper = new Swiper('.teamSlider', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: false,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        navigation: {
            prevEl: '.team-prev',
            nextEl: '.team-next',
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            }
        }
    });


    /////// Team Slider
    var swiper = new Swiper('.logolider', {
        slidesPerView: 5,
        spaceBetween: 0,
        loop: false,
        autoplay: {
            delay: 3500,
            disableOnInteraction: true,
        },
        navigation: {
            prevEl: '.logo-prev',
            nextEl: '.logo-next',
        },
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 1,
            }
        }
    });    

});