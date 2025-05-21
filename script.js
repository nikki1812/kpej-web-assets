const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle hamburger menu
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
  hamburger.setAttribute('aria-expanded', expanded);
});

// Mobile dropdown toggle
document.querySelectorAll('.nav-links .dropdown > a').forEach(dropbtn => {
  dropbtn.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const dropdown = dropbtn.parentElement;
      dropdown.classList.toggle('active');
    }
  });
});








const images = document.querySelectorAll('.slide-img');
const texts = document.querySelectorAll('.text-slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let current = 0;

function updateSlide(index) {
  images.forEach(img => img.classList.remove('active'));
  texts.forEach(txt => txt.classList.remove('active'));
  images[index].classList.add('active');
  texts[index].classList.add('active');
}

function nextSlide() {
  current = (current + 1) % images.length;
  updateSlide(current);
}

function prevSlide() {
  current = (current - 1 + images.length) % images.length;
  updateSlide(current);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);


document.addEventListener("DOMContentLoaded", () => {
  const blocks = document.querySelectorAll('.content-block');

  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    blocks.forEach(block => {
      const blockTop = block.getBoundingClientRect().top;

      if (blockTop < triggerBottom) {
        block.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
});




let teamCards = document.querySelectorAll('.team-card');
let currentTeam = 0;

function showTeamCard(index) {
  teamCards.forEach((card, i) => {
    card.classList.toggle('active', i === index);
  });
}

function prevMember() {
  currentTeam = (currentTeam - 1 + teamCards.length) % teamCards.length;
  showTeamCard(currentTeam);
}

function nextMember() {
  currentTeam = (currentTeam + 1) % teamCards.length;
  showTeamCard(currentTeam);
}

// Optional: initialize
document.addEventListener('DOMContentLoaded', () => {
  showTeamCard(currentTeam);
});



// galaxy code

 const galaxyCanvas = document.querySelector(".galaxy-stars-canvas");
  const galaxyCtx = galaxyCanvas.getContext("2d");
  const galaxyWrapper = document.querySelector(".galaxy-section-wrapper");

  let galaxyStars = [], starCount = 150;
  let w, h;

  function resizeGalaxy() {
    w = galaxyCanvas.width = galaxyWrapper.clientWidth;
    h = galaxyCanvas.height = galaxyWrapper.clientHeight;
  }

  window.addEventListener("resize", resizeGalaxy);
  resizeGalaxy();

  for (let i = 0; i < starCount; i++) {
    galaxyStars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.2,
      speed: Math.random() * 0.3 + 0.1,
    });
  }

  function animateGalaxyStars() {
    galaxyCtx.clearRect(0, 0, w, h);
    galaxyCtx.fillStyle = "#fff";

    for (let star of galaxyStars) {
      galaxyCtx.beginPath();
      galaxyCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      galaxyCtx.fill();

      star.y += star.speed;
      if (star.y > h) {
        star.y = 0;
        star.x = Math.random() * w;
      }
    }

    requestAnimationFrame(animateGalaxyStars);
  }

  animateGalaxyStars();


// Line Frame 2


 let slideIndex1 = 0;
  const slides1 = document.querySelectorAll('.slide-1');

  function showSlide1(index) {
    slides1.forEach(slide => slide.classList.remove('active-1'));
    slides1[index].classList.add('active-1');
  }

  function nextSlide1() {
    slideIndex1 = (slideIndex1 + 1) % slides1.length;
    showSlide1(slideIndex1);
  }

  function prevSlide1() {
    slideIndex1 = (slideIndex1 - 1 + slides1.length) % slides1.length;
    showSlide1(slideIndex1);
  }

  // Auto Slide
  setInterval(nextSlide1, 4000);




document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("nav-mobile");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    mobileNav.classList.toggle("active");

    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", !expanded);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("nav-mobile");
  // Auto-close only mobile menu on link click
  document.querySelectorAll('#nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      hamburger.setAttribute("aria-expanded", false);
    });
  });
});
