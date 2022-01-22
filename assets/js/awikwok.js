
// gsap.from(".page-load", {
//     duration: 1.5,
//     opacity: 0,
//     ease: "Expo.easeInOut"
// })

gsap.to(".viewport", {
    duration: .5,
    height: 0,
    ease: "Expo.easeInOut"
})
window.addEventListener('load', function(){
    gsap.to(".viewport", {
        duration: .5,
        height: "100%",
        ease: "Expo.easeInOut"
    })
    gsap.to(".page-load", {
        duration: 1.5,
        // delay: 2.5,
        y: -1000,
        ease: "Expo.easeInOut"
    })
    gsap.to(".blank-white",{
        duration: 1.5,
        delay: 0.05,
        y: -1000,
        ease: "Expo.easeInOut"
    })
    setTimeout(function() {
        document.querySelector(".page-load").style.display = "none";
    }, 5000)
    var navbarAnimate = gsap.timeline({delay: 1});
    navbarAnimate.from(".animate-navbar", {
        stagger: 0.3,
        duration: 0.5,
        opacity: 0,
        // delay: 2.8,
        ease: "Power4.easeOut",
        y: 10
    })

    gsap.from(".recommended-view", {
        delay: 1.5,
        duration: 1,
        y: 300,
        ease: "power4.inOut"
    })

    gsap.from(".animate-profile", {
        duration: 1,
        delay: 1,
        opacity: 0,
        x: 20,
        ease: "Power4.easeOut"
    })
    document.querySelector(".recommended-view").style.display = "flex";
    document.querySelector(".blank-white").style.backgroundColor = "crimson";
})

document.querySelector(".recommended-view").style.display = "none";

// Accept Button
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

gsap.from(".animating-image", {
    scrollTrigger: ".animating-image",
    duration: 1.3,
    width: 0,
    ease: "Power4.easeOut"
})
gsap.to(".scale-animate", {
    scrollTrigger: ".scale-animate",
    duration: 1,
    delay: .60,
    scale: 1.1,
    ease: "Power4.easeInOut"
})
gsap.from(".anim-text", {
    scrollTrigger: ".anim-text",
    duration: 1.3,
    opacity: 0,
    y: 5,
    stagger: 0.3,
    ease: "Power4.easeOut"
})
