gsap.from(".text", {
    duration: 1,
    delay: 0,
    stagger: 0.03,
    opacity: 1,
    ease: "Power4.easeOut",
    y: 200
})
gsap.to(".text", {
    duration: 1,
    delay: 2,
    stagger: 0.03,
    ease: "power4.inOut",
    y: -200
})
gsap.to(".page-load", {
    duration: 1,
    delay: 2.5,
    y: -2000,
    ease: "power4.inOut"
})
setTimeout(function() {
    document.querySelector(".page-load").style.display = "none";
}, 3800)

gsap.from(".animate-profile", {
    duration: 1,
    delay: 2.8,
    opacity: 0,
    x: 20,
    ease: "Power4.easeOut"
})

var navbarAnimate = gsap.timeline({delay: 2.8});
navbarAnimate.from(".animate-navbar", {
    stagger: 0.3,
    duration: 0.5,
    opacity: 0,
    // delay: 2.8,
    ease: "Power4.easeOut",
    y: 10
})


gsap.from(".recommended-view", {
    delay: 3.6,
    duration: 1,
    y: 300,
    ease: "power4.inOut"
})

const accept = document.querySelector(".accept");
accept.addEventListener('click', () =>{
    gsap.to(".recommended-view", {
        delay: 0,
        duration: 1,
        y: 300,
        ease: "power4.inOut"
    })
    setTimeout(function() {
        document.querySelector(".recommended-view").style.display = "none";
    }, 2000)
})

gsap.registerPlugin(ScrollTrigger);


gsap.from(".relax-info", {
    scrollTrigger: ".relax-info",
    x: 300,
    duration: 2,
    ease: "expo.inOut"
})

gsap.to(".line-progress-info", {
    scrollTrigger: ".line-progress-info",
    duration: 8,
    scaleY: 1,
    ease: "linear"
})
