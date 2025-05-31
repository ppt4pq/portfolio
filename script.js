$(document).ready(function() {

    AOS.init();

    const $navbar = $('nav');
    const $spacer = $('#nav-spacer');
    const $intro = $('#intro-page');
    let lastScrollTop = 0;

    $(window).on('scroll', function() {
        const introBottom = $intro[0].getBoundingClientRect().bottom;

        if (introBottom <= 0) {
        $navbar.addClass('fixed');
        $spacer.height("8vh");
        } else {
        $navbar.removeClass('fixed');
        $spacer.height(0);
        }
    })
    $(".ball").on("click",function() {
        $('ball').not(this).removeClass('ball');
        $(this).toggleClass("expanded");
    })
    $(document).ready(function () {
        VANTA.WAVES({
          el: "#intro-page",
          color: 0x183B4E,        // customize this (light pink)
          shininess: 50,
          waveHeight: 20,
          waveSpeed: 1,
          zoom: 1
        });
      });
    $(window).on("scroll", function() {
        const scrollTop = $(this).scrollTop();

        if(scrollTop > lastScrollTop) {
            $navbar.addClass("hide-on-scroll");
        }
        else {
            $navbar.removeClass("hide-on-scroll");
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    $('.timeline-marker').on('click', function () {
        const target = $(this).data('target');
    
        // Hide all content
        $('.timeline-content').removeClass('active');
        $('.timeline-marker').removeClass('active');
    
        // Show the one that was clicked
        $('#' + target).addClass('active');
        $(this).addClass('active');
    });

    let selectedTitle = $('.project-li.active');
    let selectedProject = $('#' + selectedTitle.data('target'));
    let ulHovered = false;

    $('#projects-list').on("mouseover", function () {
        ulHovered = true;
    })

    $('#projects-list').on("mouseleave", function () {
        selectedTitle.addClass('active');
    })

    $('.project-li').on("mouseover",function () {
        const target = $(this).data('target');

        $('.projection').removeClass('active');
        $('.project-li').removeClass('active');

        $('#' + target).addClass('active');
        $(this).addClass('active');
    });

    $('.project-li').on("mouseleave", function() {
        $('.projection').removeClass('active');
        $(this).removeClass('active');
        selectedProject.addClass('active');
    });

    $('.project-li').click(function() {
        const target = $(this).data('target');
        selectedProject.removeClass('active');
        selectedTitle.removeClass('active');
        selectedProject = $('#' + target);
        selectedTitle = $(this);
    });
});