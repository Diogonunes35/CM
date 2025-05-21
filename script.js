
window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".scroll-track.track-farm", { xPercent: -50 }); // Shows the last panel first
  // FARM SCENE (right to left) — 2 panels = move 1 screen = -100%
  gsap.to(".scroll-track.track-farm", {
    xPercent: 50, // Move to the right (positive)
    ease: "none",
    scrollTrigger: {
      trigger: ".scene-farm",
      start: "top top",
      end: "+=3000", // Adjusted for 1 screen of motion
      scrub: true,
      pin: true
    }
  });

  // 2. Separate car drop animation (new)
  // Car drop animation
  gsap.to("#carro", {
    top: "80vh", // Drops to 60% viewport height from top
    opacity: 1,
    duration: 4,
    ease: "power4.out", // Strong deceleration effect
    scrollTrigger: {
      trigger: ".scene-farm",
      start: "top 70%", // Triggers when farm section is near top
      toggleActions: "play none none none",
      markers: false // Remove when working
    }
  });

  // ----- CITY 1 PARALLAX (updated) -----
  const city1Track = document.querySelector(".scene-city1 .scroll-track");
  gsap.set([".layer img"], { willChange: "transform" });

  gsap.to(".scene-city1 .scroll-track", {
    yPercent: -66.66, // Matches 300vh container (2/3 of content)
    ease: "none",
    scrollTrigger: {
      trigger: ".scene-city1",
      start: "top top",
      end: "+=3000", // 300vh
      scrub: true,
      pin: true,
      markers: false // For debugging
    }
  });

  // 2. Simplified parallax test
  gsap.utils.toArray(".scene-city1 .layer").forEach(layer => {
    const speed = parseFloat(layer.dataset.speed);
    const img = layer.querySelector("img");
    gsap.to(img, {
      yPercent: -100 * speed, // Basic parallax movement
      ease: "none",
      scrollTrigger: {
        trigger: ".scene-city1",
        start: "top top",
        end: "+=3000",
        scrub: true
      }
    });
  });


  // CITY SCENE 2 (left to right) — 3 panels = move 2 screens = -200%
  gsap.to(".scroll-track.track-city2-desert-casino", {
    xPercent: -800, //number of screens scrolled
    ease: "none",
    scrollTrigger: {
      trigger: ".scene-city2-desert-casino",
      start: "top top",
      end: "+=8000",
      scrub: true,
      pin: true
    }
  });

  // CENA 3 NAO UTILIZADO
  /* gsap.set(".scroll-track.track-city3", { yPercent: -200 }); // Shows the last panel first
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
  }); */

  //// PARA APAGAR EM PRINCIPIO
  /*  // DESERT SCENE (left to right) — 4 panels = move 3 screens = -300%
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
   }); */

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

  //// PARA APAGAR EM PRINCIPIO
  /*   // CASINO SCENE — Placeholder (make sure it exists in HTML)
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
   */

});

window.addEventListener('scroll', function () {
  console.log('Scroll Y:', window.scrollY);

  // Or using document.documentElement.scrollTop
  //  console.log('Scroll Y (alt):', document.documentElement.scrollTop);
});
