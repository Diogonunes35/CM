window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".scroll-track.track-farm", { xPercent: -50 }); // Shows the last panel first
  // FARM SCENE (right to left) — 2 panels = move 1 screen = -100%
  gsap.to(".scroll-track.track-farm", {
    xPercent: 0, // Move to the right (positive)
    ease: "none",
    scrollTrigger: {
      trigger: ".scene-farm",
      start: "top top",
      end: "+=2000", // Adjusted for 1 screen of motion
      scrub: true,
      pin: true
    }
  });


  // CITY SCENE 1 (top to bottom) — 3 panels = move 2 screens = -200%
  gsap.to(".scroll-track.track-city1", {
    yPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".scene-city1",
      start: "top top",
      end: "+=3000", // ~1000 per panel
      scrub: true,
      pin: true
    }
  });

  // CITY SCENE 2 (left to right) — 3 panels = move 2 screens = -200%
  gsap.to(".scroll-track.track-city2", {
    xPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".scene-city2",
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true
    }
  });

   gsap.set(".scroll-track.track-city3", { yPercent: -200 }); // Shows the last panel first
   // CITY SCENE 3 (bottom to top) — 3 panels = move up 2 screens = +200%
   gsap.to(".scroll-track.track-city3", {
       yPercent: 200,
       ease: "none",
       scrollTrigger: {
           trigger: ".scene-city3",
           start: "top top",
           end: "+=3000",
           scrub: true,
           pin: true
       }
   });

  // DESERT SCENE (left to right) — 4 panels = move 3 screens = -300%
  gsap.to(".scroll-track.track-desert", {
    xPercent: -300,
    ease: "none",
    scrollTrigger: {
      trigger: ".scene-desert",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true
    }
  });

  // (OPTIONAL) CHARACTER animation — kept disabled
  /*
  gsap.to(".character", {
      xPercent: 300,
      scrollTrigger: {
          trigger: ".scene-desert",
          start: "top top",
          end: "bottom bottom",
          scrub: true
      }
  });
  */

  // CASINO SCENE — Placeholder (make sure it exists in HTML)
  gsap.to(".scroll-track.track-casino", {
    xPercent: -200,
    ease: "none",
    scrollTrigger: {
      trigger: ".scene-casino",
      start: "top top",
      end: "+=3000",
      scrub: true,
      pin: true
    }
  });
});

// TRANSITION: Between FARMHOUSE and CITY1
ScrollTrigger.create({
  trigger: ".scene-farmhouse",
  start: "bottom bottom", // when farmhouse ends
  end: "bottom+=1 top",   // very small buffer
  onEnter: () => {
    gsap.to(".overlay2", {
      x: "0%",
      duration: 1,
      ease: "power2.out"
    });
  },
  onLeaveBack: () => {
    gsap.to(".overlay2", {
      x: "-100%",
      duration: 1,
      ease: "power2.in"
    });
  }
});

ScrollTrigger.create({
  trigger: ".scene-city1",
  start: "top top",
  onEnter: () => {
    gsap.to(".overlay2", {
      x: "-100%",
      duration: 1,
      ease: "power2.in"
    });
  }
});
