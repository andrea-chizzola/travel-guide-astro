/**
 * Scroll Animations & Interactive UI Effects
 */
document.addEventListener('DOMContentLoaded', () => {
  // Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => preloader.classList.add('hidden'), 500);
    });
    // Fallback if load already fired
    if (document.readyState === 'complete') {
      setTimeout(() => preloader.classList.add('hidden'), 500);
    }
  }

  // Progress bar & navbar hide/show on scroll
  const progressBar = document.getElementById('progress-bar');
  const navbar = document.querySelector('.topnav');
  const backToTop = document.getElementById('back-to-top');

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll > 0 && progressBar) {
      const progress = (window.scrollY / totalScroll) * 100;
      progressBar.style.width = `${progress}%`;
    }

    if (navbar) {
      if (window.scrollY > 100) {
        navbar.classList.add('nav-solid');
      } else {
        navbar.classList.remove('nav-solid');
      }

      if (window.scrollY > lastScrollY && window.scrollY > 300) {
        navbar.classList.add('nav-hidden');
      } else {
        navbar.classList.remove('nav-hidden');
      }
    }

    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    lastScrollY = window.scrollY;
  }, { passive: true });

  // Intersection Observer for scroll reveal elements
  const revealElements = document.querySelectorAll('.reveal, .divider');
  if (revealElements.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  }
});
