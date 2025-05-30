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
    top: "85vh", // Drops to 60% viewport height from top
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

  // Car glow container animation - follows the car
  gsap.to("#car-glow-container", {
    top: "80vh", // Same as car animation
    duration: 4,
    ease: "power4.out", // Same easing as car
    scrollTrigger: {
      trigger: ".scene-farm",
      start: "top 70%", // Same trigger as car
      toggleActions: "play none none none",
      markers: false
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
      markers: false, // For debugging
      onEnter: () => {
        // Play city background audio when entering city1 scene
        const cityAudio = document.getElementById('city-audio');
        if (cityAudio) {
          cityAudio.currentTime = 0;
          cityAudio.play().catch(e => console.log('City audio play failed:', e));
        }
      },
      onEnterBack: () => {
        // Resume city background audio when coming back to city1 scene
        const cityAudio = document.getElementById('city-audio');
        if (cityAudio) {
          cityAudio.play().catch(e => console.log('City audio play failed:', e));
        }
      }
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
    xPercent: -500, //number of screens scrolled
    ease: "none",
    scrollTrigger: {
      trigger: ".scene-city2-desert-casino",
      start: "top top",
      end: "+=5000",
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        // Calculate progress through the horizontal scroll
        const progress = self.progress;
        const cityAudio = document.getElementById('city-audio');

        // Stop city audio when we reach the transition (around 37.5% progress)
        // City2 has 3 screens + 1 transition = 4 panels total
        // Transition starts at panel 4 out of 9 total panels = ~44% progress
        if (progress >= 0.44 && cityAudio && !cityAudio.paused) {
          cityAudio.pause();
          console.log('City audio stopped at transition, progress:', progress);
        }
        // Resume city audio when going back to city area
        else if (progress < 0.44 && cityAudio && cityAudio.paused) {
          cityAudio.play().catch(e => console.log('City audio play failed:', e));
          console.log('City audio resumed, progress:', progress);
        }
      }
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

  // Car hover event listeners for text display
  const carGlowContainer = document.getElementById('car-glow-container');
  const carHoverText = document.getElementById('car-hover-text');

  console.log('Looking for car glow elements...');

  if (carGlowContainer && carHoverText) {
    console.log('Car glow elements found!', {
      container: carGlowContainer,
      text: carHoverText
    });

    // Multiple event types for better compatibility
    const showText = () => {
      console.log('Showing text');
      carHoverText.classList.remove('fade-out');
      carHoverText.style.setProperty('opacity', '1', 'important');
      carHoverText.style.setProperty('visibility', 'visible', 'important');
      carHoverText.style.transform = 'translateY(0)';
    };

    const hideText = () => {
      console.log('Hiding text');
      carHoverText.classList.add('fade-out');
      // Let the CSS animation handle the fade-out
      setTimeout(() => {
        carHoverText.style.visibility = 'hidden';
      }, 1000); // Match the animation duration
    };

    // Mouse events
    carGlowContainer.addEventListener('mouseenter', showText);
    carGlowContainer.addEventListener('mouseleave', hideText);
    carGlowContainer.addEventListener('mouseover', showText);
    carGlowContainer.addEventListener('mouseout', hideText);

    // Touch events for mobile
    carGlowContainer.addEventListener('touchstart', showText);
    carGlowContainer.addEventListener('touchend', hideText);

    // Initial state
    hideText();

  } else {
    console.log('Car glow elements NOT found!', {
      container: carGlowContainer,
      text: carHoverText
    });
  }

  // City1 hover event listeners for text display
  const city1GlowContainer = document.getElementById('city1-glow-container');
  const city1HoverText = document.getElementById('city1-hover-text');

  console.log('Looking for city1 glow elements...');

  if (city1GlowContainer && city1HoverText) {
    console.log('City1 glow elements found!', {
      container: city1GlowContainer,
      text: city1HoverText
    });

    // Multiple event types for better compatibility
    const showCity1Text = () => {
      console.log('Showing city1 text');
      city1HoverText.classList.remove('fade-out');
      city1HoverText.style.setProperty('opacity', '1', 'important');
      city1HoverText.style.setProperty('visibility', 'visible', 'important');
      city1HoverText.style.transform = 'translateY(0)';
    };

    const hideCity1Text = () => {
      console.log('Hiding city1 text');
      city1HoverText.classList.add('fade-out');
      // Let the CSS animation handle the fade-out
      setTimeout(() => {
        city1HoverText.style.visibility = 'hidden';
      }, 1000); // Match the animation duration
    };

    // Mouse events
    city1GlowContainer.addEventListener('mouseenter', showCity1Text);
    city1GlowContainer.addEventListener('mouseleave', hideCity1Text);
    city1GlowContainer.addEventListener('mouseover', showCity1Text);
    city1GlowContainer.addEventListener('mouseout', hideCity1Text);

    // Touch events for mobile
    city1GlowContainer.addEventListener('touchstart', showCity1Text);
    city1GlowContainer.addEventListener('touchend', hideCity1Text);

    // Initial state
    hideCity1Text();

  } else {
    console.log('City1 glow elements NOT found!', {
      container: city1GlowContainer,
      text: city1HoverText
    });
  }

});

window.addEventListener('scroll', function () {
  console.log('Scroll Y:', window.scrollY);

  // Or using document.documentElement.scrollTop
  //  console.log('Scroll Y (alt):', document.documentElement.scrollTop);
});

document.body.classList.add('no-scroll');
const overlay = document.getElementById('start-overlay');
const intro = document.querySelector('.intro');
if (intro) intro.style.visibility = 'hidden';

overlay.addEventListener('click', () => {
  overlay.style.transition = 'opacity 0.5s';
  overlay.style.opacity = '0';
  overlay.addEventListener('transitionend', function handler() {
    overlay.style.display = 'none';
    overlay.removeEventListener('transitionend', handler);
    document.body.classList.remove('no-scroll');
    if (intro) intro.style.visibility = 'visible';

    // Reinicia animação das letras com delays maiores entre os parágrafos
    const paragraphs = document.querySelectorAll('.css-typing p');
    let delay = 0;
    const animationDuration = 2500; // duração da animação de cada parágrafo (em ms)

    paragraphs.forEach((p, i) => {
      p.style.animation = 'none';
      p.style.visibility = 'hidden';
      p.offsetHeight; // trigger reflow
      setTimeout(() => {
        p.style.animation = '';
        p.style.visibility = 'visible';
      }, delay);
      delay += animationDuration;
    });

    // Inicia o timer da seta só após 25 segundos
    setTimeout(function() {
      const arrow = document.getElementById('arrow-next');
      arrow.style.display = 'flex';
      setTimeout(() => {
        arrow.classList.add('visible');
      }, 50);
    }, 23000); // seta aparece após 25 segundos

  });
  const audio = document.getElementById('bg-audio');
  if (audio) audio.play();
});
