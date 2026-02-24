// Thortech Landing Page Script
// Minimal JS for fade-in animations and contact form UX

document.addEventListener('DOMContentLoaded', function () {
  // Fade-in on scroll for sections
  const animatedEls = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  animatedEls.forEach(el => observer.observe(el));

  // Contact form UX (no backend, just UX feedback)
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.reset();
      form.insertAdjacentHTML('beforeend', '<div class="form-success">Thank you! We will be in touch soon.</div>');
      setTimeout(() => {
        const msg = form.querySelector('.form-success');
        if (msg) msg.remove();
      }, 3500);
    });
  }
});
