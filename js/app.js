// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
    lenis = new Lenis({
        lerp: .1, // Lower values create a smoother scroll effect
        smoothWheel: true // Enables smooth scrolling for mouse wheel events
    });
    lenis.on('scroll', () => ScrollTrigger.update());
    const scrollFn = (time) => {
        lenis.raf(time); // Run Lenis' requestAnimationFrame method
        requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
    };
    requestAnimationFrame(scrollFn);
};

initSmoothScrolling();
Splitting();


gsap.set('dotlottie-player', {autoAlpha: 0})
gsap.set('.hero h1 .char', {yPercent: 100})
gsap.set('.hero p .char', {yPercent: 100})
gsap.set('.clients-logo img', {y: 10, autoAlpha: 0})
gsap.set('.eyes', {y: 300, x: 200, autoAlpha: 0})
gsap.set('.herologo', {y: 300, x: -200, autoAlpha: 0})

$(window).scrollTop(0);

let tl = gsap.timeline()

tl
.to('.eyes', 1.3, {y: 0, x:0, autoAlpha: 1, ease: "expo.out"})
.to('.herologo', 1.3, {y: 0, x:0, autoAlpha: 1, ease: "expo.out"}, 0)
.staggerTo('.hero h1 .char', 1, {yPercent: 0, ease: "expo.out"}, 0.01)
.to('dotlottie-player', .3, {autoAlpha: 1, ease: "expo.out"}, 1.5)
.staggerTo('.hero p .char', 0.5, {yPercent: 0, ease: "expo.out"}, 0.008)
.staggerTo('.clients-logo img', 1, {y: 0, autoAlpha: 1, ease: "expo.out"},0.1)


var screenWidth = window.innerWidth,
    halfWidth = screenWidth / 2,
    screenHeight = window.innerHeight,
    halfHeight = screenHeight / 2,
    mouseX = halfWidth,
    mouseY = halfHeight,
    eyeX = 50,
    eyeY = 50;

// Make the eye follow cursor	

$(document).mousemove(function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

});

function move() {
    eyeX = mouseX / screenWidth * 50;
    eyeY = mouseY / screenHeight * 50;

    $(".pupil").css({
        left: eyeX + '%',
        top: eyeY + '%'
    });

    window.requestAnimationFrame(move);
};

move();

/*
var resetWidth = document.getElementById("videoReset").offsetWidth
gsap.set("#big-button-video", {x: 0});
gsap.to("#big-button-video", {x: -resetWidth, duration: 4, ease: Linear.easeNone, repeat: -1});

var resetWidth = document.getElementById("photoReset").offsetWidth
gsap.set("#big-button-photo", {x: 0});
gsap.to("#big-button-photo", {x: -resetWidth, duration: 4, ease: Linear.easeNone, repeat: -1});

var resetWidth = document.getElementById("graphicReset").offsetWidth
gsap.set("#big-button-graphic", {x: 0});
gsap.to("#big-button-graphic", {x: -resetWidth, duration: 4, ease: Linear.easeNone, repeat: -1});
*/

gsap.to(".moving-line svg", 2, {yPercent: -100, ease: Linear.easeNone, repeat: -1})


$(window).scroll(function(event) {
    var scroll = $(window).scrollTop();
    var offset = 300; // Sets how far from top of page before class is added. 
    $(".expertise").toggleClass("yellow-background", scroll >= ($("#photo-expertise").offset().top - offset))
    $(".expertise").toggleClass("orange-background", scroll >= ($("#graphic-expertise").offset().top - offset))
})


$('#burger-button').click(function () {
    $('.menu').toggleClass('activate');
});


$(".hero").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".herologo");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "0% 100%",
            end: "100% 0%",
            scrub: 0
        }
    });
    tl.to(targetElement, {
        rotate: 180,
        ease: "none"
    });
});

$(".footer").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".footer img");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "0% 100%",
            end: "100% 0%",
            scrub: 0
        }
    });
    tl.to(targetElement, {
        rotate: 360,
        ease: "none"
    });
});


gsap.utils.toArray(".semicircle").forEach((section, i) => {
    gsap.fromTo(section,{scaleY: 1}, {
        scrollTrigger: {
            trigger: section,
            start: "top bottom",
            scrub: true
        },
        scaleY: 0,
        ease: "none"
    });
});

gsap.to('.step1-me', {
    scrollTrigger: {
        trigger: '.step1-me',
        start: "top bottom",
        scrub: true
    },
    y: -70,
    x: -20,
    ease: "none"
});
gsap.to('.step1-client', {
    scrollTrigger: {
        trigger: '.step1-client',
        start: "top bottom",
        scrub: true
    },
    y: -60,
    x: 20,
    ease: "none"
});
gsap.to('.step1-zoom', {
    scrollTrigger: {
        trigger: '.step1-zoom',
        start: "top bottom",
        scrub: true
    },
    y: -30,
    ease: "none"
});
gsap.from('.plan1', {
    scrollTrigger: {
        trigger: '.plan1',
        start: "top bottom",
        scrub: true
    },
    y: -60,
    ease: "none"
});
gsap.from('.plan3', {
    scrollTrigger: {
        trigger: '.plan1',
        start: "top bottom",
        scrub: true
    },
    y: 60,
    ease: "none"
});
gsap.from('.step-star1', {
    scrollTrigger: {
        trigger: '.step-star1',
        start: "top bottom",
        scrub: true
    },
    y: 60,
    x: 60,
    scale: .5,
    ease: "none"
});
gsap.from('.step-star2', {
    scrollTrigger: {
        trigger: '.step-star2',
        start: "top bottom",
        scrub: true
    },
    y: 40,
    x: -40,
    scale: .5,
    ease: "none"
});
gsap.from('.step-star3', {
    scrollTrigger: {
        trigger: '.step-star3',
        start: "top bottom",
        scrub: true
    },
    y: 60,
    x: -60,
    scale: .5,
    ease: "none"
});


gsap.set($(".work"), {scale: 0})

ScrollTrigger.batch('.showcase', {
    start: 'top bottom-=300',
    onEnter: batch => {
    batch.forEach((card, index) => {

        let work = card.querySelectorAll('.work');
        let chart_tl = gsap.timeline();

        chart_tl.to( work, 0.6, {
            scale: 1,
            marker: true,
            stagger: 0.1,
            delay: index * 0.5,
            ease: "elastic.out(.6,0.4)"
        } );

    })
    }
});