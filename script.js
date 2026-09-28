// ==========================================
// DESKTOP ONLY ANIMATIONS
// ==========================================

if (window.innerWidth > 800) {

    gsap.registerPlugin(ScrollTrigger);


    // ==========================================
    // NAVBAR
    // ==========================================

    gsap.from(".navbar .container", {
        y: -600,
        duration: 1,
        opacity: 0,
        stagger: 1
    });


    // ==========================================
    // BANNER
    // ==========================================

    gsap.from(".banner .heading, .banner h2, .banner p, .banner .btn", {
        x: -500,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".banner",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    gsap.from(".banner .banner-img", {
        x: 500,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".banner",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    // ==========================================
    // ABOUT
    // ==========================================

    gsap.from(".about-content", {
        x: -500,
        y: 70,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });


    gsap.from(".about-visual", {
        x: 500,
        y: 70,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });


    // Circle rotation
    const circle = document.querySelector(".circle-stroke");

    if (circle) {
        gsap.to(circle, {
            rotation: 360,
            duration: 12,
            repeat: -1,
            ease: "none"
        });
    }


    // ==========================================
    // SERVICE
    // ==========================================

    gsap.from(".service .heading h3, .service .heading h1, .service .heading p", {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".service",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    gsap.from(".service-cards", {
        y: 200,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".service",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });


    // ==========================================
    // INFORMATION
    // ==========================================

    gsap.from(".information-content", {
        x: -200,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".information-section",
            start: "top 50%",
            toggleActions: "play none none none"
        }
    });


    gsap.from(".information-image", {
        x: 200,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".information-section",
            start: "top 50%",
            toggleActions: "play none none none"
        }
    });


    // ==========================================
    // BLOG
    // ==========================================

    gsap.from(".blog .heading h3, .blog .heading h1, .blog .heading p", {
        y: 200,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".blog",
            start: "top 40%",
            toggleActions: "play none none none"
        }
    });


    gsap.from(".blog .blog-grid", {
        y: 200,
        opacity: 0,
        duration: 2,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".blog",
            start: "top 40%",
            toggleActions: "play none none none"
        }
    });


    // ==========================================
    // FAQ
    // ==========================================

    gsap.from(".faq-area .faq-form", {
        x: -200,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".faq-area",
            start: "top 50%",
            toggleActions: "play none none none"
        }
    });


    gsap.from(".faq-area .faq-img", {
        x: 200,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".faq-area",
            start: "top 40%",
            toggleActions: "play none none none"
        }
    });

}


// ==========================================
// SERVICE OWL CAROUSEL
// ==========================================

$(document).ready(function () {

    const isMobile = window.innerWidth <= 767;

    $(".service-cards").owlCarousel({

        loop: !isMobile,

        margin: 15,

        nav: false,

        dots: true,

        autoplay: !isMobile,

        autoplayTimeout: 3000,

        autoplayHoverPause: true,

        mouseDrag: !isMobile,

        touchDrag: !isMobile,

        responsive: {

            0: {
                items: 1
            },

            768: {
                items: 2
            },

            992: {
                items: 3
            }

        }

    });

});