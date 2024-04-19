gsap.registerPlugin(ScrollTrigger)

gsap.from('#image',{
    xPercent: -100,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".col-6",
        start: "top 80%",
    }
})

gsap.from('#text',{
    xPercent: 100,
    duration: 3,
    opacity: 0,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".col-6",
        start: "top 80%",
    }
})

gsap.from('#image2',{
    xPercent: -100,
    duration: 3,
    opacity: 0,
    ease: "sine.inOut",
    scrollTrigger: {
        trigger: ".col-6",
        start: "top 80%",
    }
})

gsap.from('#image3',{
    xPercent: -100,
    duration: 3,
    opacity: 0,
    ease: "sine.in",
    scrollTrigger: {
        trigger: ".col-6",
        start: "top 80%",
    }
})

gsap.from('#image4',{
    xPercent: -100,
    duration: 3,
    opacity: 0,
    ease: "power1.in",
    scrollTrigger: {
        trigger: ".col-6",
        start: "top 80%",
    }
})