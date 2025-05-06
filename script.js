window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);


    // FARM SCENE (right to left)

    gsap.to(".scroll-track.track-farm", {
        xPercent: -200,
        ease: "none",
        scrollTrigger: {
            trigger: ".scene-farm",
            start: "top top",
            end: "+=10000",
            scrub: true,
            pin: true
        }
    });

    // CITY SCENE 1 (top to bottom)

    gsap.to(".scroll-track.track-city1", {
        yPercent: -200,
        ease: "none",
        scrollTrigger: {
            trigger: ".scene-city1",
            start: "top top",
            end: "+=20000",
            scrub: true,
            pin: true
        }
    });

    // CITY SCENE 2 (left to right)

    gsap.to(".scroll-track.track-city2", {
        xPercent: -200,
        ease: "none",
        scrollTrigger: {
            trigger: ".scene-city2",
            start: "top top",
            end: "+=20000",
            scrub: true,
            pin: true
        }
    });

    gsap.to(".scroll-track.track-city3", {
        yPercent: 200,
        ease: "none",
        scrollTrigger: {
            trigger: ".scene-city3",
            start: "top top",
            end: "+=20000",
            scrub: true,
            pin: true
        }
    });

    // DESERT SCENE (left to right)
    // Animate the scroll-track left as the user scrolls
    gsap.to(".scroll-track.track-desert", {
        xPercent: -200, // Move left 200% (3 panels)
        ease: "none",
        scrollTrigger: {
            trigger: ".scene-desert",
            start: "top top",
            end: "+=20000", // Adjust scroll distance
            scrub: true,
            pin: true
        }
    });


    /* CODE NOT BEING USED ATM
    // Animate the character in the 4º scene
    gsap.to(".character", {
        xPercent: 300, // Adjust depending on how far you want him to walk
        scrollTrigger: {
            trigger: ".scene-desert",
            start: "top top",
            end: "bottom bottom",
            scrub: true
        }
    });
    */

    // CASINO SCENE

    gsap.to(".scroll-track.track-casino", {
        xPercent: -200,
        ease: "none",
        scrollTrigger: {
            trigger: ".scene-casino",
            start: "top top",
            end: "+=20000",
            scrub: true,
            pin: true
        }
    });

});
