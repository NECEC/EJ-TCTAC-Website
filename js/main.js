(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });





    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);




const tabHome = document.getElementById('tab-home');
const tabMission = document.getElementById('tab-mission');
// const tabService = document.getElementById('tab-service');
const tabProject = document.getElementById('tab-project');
// const tabContact = document.getElementById('tab-contact');
// const tabOverview = document.getElementById('tab-Overview');

const tabFeature = document.getElementById('tab-feature');
const tabQuote = document.getElementById('tab-quote');
const tabTeam = document.getElementById('tab-team');
const tabTestimonial = document.getElementById('tab-testimonial');
// const tab404 = document.getElementById('tab-404');

// const tabEventsCalender = document.getElementById('tab-EventsCalender');
const tabModelLegislation = document.getElementById('tab-ModelLegislation');
const tabResourceCenter = document.getElementById('tab-ResourceCenter');
const tabDirectory = document.getElementById('tab-Directory');
const tabOnlineTools = document.getElementById('tab-OnlineTools');
const tabContactEJ = document.getElementById('tab-ContactEJ');

const tabEnergyBurden = document.getElementById('tab-ContactEJ');
const tabDonnerPerfect = document.getElementById('tab-ContactEJ');
const tabProjectManagement = document.getElementById('tab-ContactEJ');
const tabGrants = document.getElementById('tab-ContactEJ');
const tabDatabase = document.getElementById('tab-ContactEJ');
const tabContact = document.getElementById('tab-Contact');

const contentHome = document.getElementById('content-home');
const contentMission = document.getElementById('content-mission');
// const contentService = document.getElementById('content-service');
const contentProject = document.getElementById('content-project');
const contentContact = document.getElementById('content-contact');
// const contentOverview = document.getElementById('content-Overview');

const contentFeature = document.getElementById('content-feature');
const contentQuote = document.getElementById('content-quote');
const contentTeam = document.getElementById('content-team');
const contentTestimonial = document.getElementById('content-testimonial');
// const content404 = document.getElementById('content-404');

// const contentEventsCalender = document.getElementById('content-EventsCalender');
const contentModelLegislation = document.getElementById('content-ModelLegislation');
const contentResourceCenter = document.getElementById('content-ResourceCenter');
const contentDirectory = document.getElementById('content-Directory');
const contentOnlineTools = document.getElementById('content-OnlineTools');
const contentContactEJ = document.getElementById('content-ContactEJ');



// Function to hide all content sections
function hideAllContentSections() {
    contentHome.style.display = 'none';
    contentMission.style.display = 'none';
    // contentService.style.display = 'none';
    contentProject.style.display = 'none';
    contentContact.style.display = 'none';
    contentFeature.style.display = 'none';
    contentQuote.style.display = 'none';
    contentTeam.style.display = 'none';
    contentTestimonial.style.display = 'none';
    // content404.style.display = 'none' ;
    // contentEventsCalender.style.display = 'none';
    // contentModelLegislation.style.display = 'none';
    // contentResourceCenter.style.display = 'none';
    // contentDirectory.style.display = 'none';
    // contentOnlineTools.style.display = 'none';
    // contentContactEJ.style.display = 'none';
    // contentOverview.style.display = 'none';

}

// Function to show the selected content section
function showContentSection(contentSection) {
    hideAllContentSections();
    contentSection.style.display = 'block';
}

// Add event listeners to tab links to handle click events
tabHome.addEventListener('click', function () {
    showContentSection(contentHome);
});

// tabMission.addEventListener('click', function () {
//     showContentSection(contentMission);
// });

// tabService.addEventListener('click', function () {
//     showContentSection(contentService);
// });

tabContact.addEventListener('click', function () {
    showContentSection(contentContact);
});


// tabProject.addEventListener('click', function () {
//     showContentSection(contentProject);
// });
tabFeature.addEventListener('click', function () {
    showContentSection(contentFeature);
});
tabQuote.addEventListener('click', function () {
    showContentSection(contentQuote);
});
tabTeam.addEventListener('click', function () {
    showContentSection(contentTeam);
});
tabTestimonial.addEventListener('click', function () {
    showContentSection(contentTestimonial);
});

// tab404.addEventListener('click', function () {
//     showContentSection(content404);
// });

// tabOverview.addEventListener('click', function () {
//     showContentSection(contentOverview);
// });


// tabEventsCalender.addEventListener('click', function () {
//     showContentSection(contentEventsCalender);
// });

// tabModelLegislation.addEventListener('click', function () {
//     showContentSection(contentModelLegislation);
// });

// tabResourceCenter.addEventListener('click', function () {
//     showContentSection(contentResourceCenter);
// });

// tabDirectory.addEventListener('click', function () {
//     showContentSection(contentDirectory);
// });

// tabOnlineTools.addEventListener('click', function () {
//     showContentSection(contentOnlineTools);
// });

// tabContactEJ.addEventListener('click', function () {
//     showContentSection(contentContactEJ);
// });

// Show the initial content section (you can choose which section to show by default)
showContentSection(contentHome);
