/*
    Template Name: Portfolio
    Author: Your Name
    Version: 1.0
    Date: August 19, 2024
    Description: Custom JavaScript file for the Portfolio template, enhancing interactivity and functionality.
    
    Libraries Used:
    - jQuery: https://jquery.com/
    - Bootstrap: https://getbootstrap.com/
    - AOS (Animate on Scroll): https://michalsnik.github.io/aos/
    - jQuery Ripples: https://cdnjs.com/libraries/jquery.ripples
    
    Notes:
    - Initialize AOS and other scripts here.
    - Ensure to test all functionalities and interactions for smooth user experience.
*/

// AOS Initialization

// Initialize jQuery Ripples effect
$(document).ready(function() {
    $('.hero-section').ripples({
        dropRadius: 20,
        perturbance: 0.04
    });

    // Ensure ripples effect works on hover for the button
    $('.btn-primary').ripples({
        dropRadius: 20,
        perturbance: 0.04
    });

    // Initialize Slick Slider for Timeline
    $('.timeline-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
    // Initialize Slick Carousel for Testimonials

    $('.testimonial-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true, // Show dots
        arrows: false, // No arrows
        autoplay: true, // Enable auto play
        autoplaySpeed: 5000, // Slide change speed
    });
        $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: true, /* تأكد من تفعيل الأسهم */
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    
});
