// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({behavior: 'smooth'});
  });
});

// GSAP animations
gsap.from("header", {duration:1, y:-80, opacity:0});
gsap.from(".profile", {duration:1.5, scale:0.7, opacity:0, delay:0.3});
gsap.from(".hero-right", {duration:1, x:50, opacity:0, delay:0.5});
gsap.utils.toArray(".section").forEach(sec => {
  gsap.from(sec, {
    scrollTrigger: {
      trigger: sec,
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 1
  });
});
