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
    xPercent: -500, //number of screens scrolled
    ease: "none",
    scrollTrigger: {
      trigger: ".scene-city2-desert-casino",
      start: "top top",
      end: "+=5000",
      scrub: true,
      pin: true
    }
  });

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
