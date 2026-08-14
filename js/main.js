/* ==========================================================================
   NANDKUNVARBA MAHILA COLLEGE (NMC) - MAIN INTERACTIVE SYSTEM
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Effect (Transparent -> Solid on scroll)
  const header = document.querySelector('.hero-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const heroNav = document.querySelector('.hero-nav');

  if (hamburger && heroNav) {
    hamburger.addEventListener('click', () => {
      heroNav.classList.toggle('active');
    });

    document.querySelectorAll('.hero-nav-link').forEach(link => {
      link.addEventListener('click', () => heroNav.classList.remove('active'));
    });
  }

  // 3. Stats Counter Animation
  const statNumbers = document.querySelectorAll('.stat-premium-number');
  let animatedStats = false;

  const animateStats = () => {
    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target') || '0', 10);
      const suffix = stat.getAttribute('data-suffix') || '';
      let current = 0;
      const duration = 2000;
      const stepTime = 30;
      const increment = Math.ceil(target / (duration / stepTime));

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          stat.innerHTML = `${target}<span>${suffix}</span>`;
          clearInterval(timer);
        } else {
          stat.innerHTML = `${current}<span>${suffix}</span>`;
        }
      }, stepTime);
    });
  };

  const statsSection = document.querySelector('.stats-premium-section');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedStats) {
          animatedStats = true;
          animateStats();
        }
      });
    }, { threshold: 0.2 });

    observer.observe(statsSection);
  }

  // 4. Vision, Mission & Future Vision Tabs
  const vmTabs = document.querySelectorAll('.vm-tab');
  const vmBoxes = document.querySelectorAll('.vm-box');

  vmTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');

      vmTabs.forEach(t => t.classList.remove('active'));
      vmBoxes.forEach(b => b.classList.remove('active'));

      tab.classList.add('active');
      const targetBox = document.getElementById(targetId);
      if (targetBox) targetBox.classList.add('active');
    });
  });

  // 5. Dynamic Academic Program Filters
  const progFilterBtns = document.querySelectorAll('.prog-filter-btn');
  const progCards = document.querySelectorAll('.prog-card');

  progFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');

      progFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      progCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. 360 Degree Virtual Tour Modal Trigger
  const tourModal = document.getElementById('tourModal');
  const tourTriggers = document.querySelectorAll('.open-tour-modal');
  const tourClose = document.getElementById('tourClose');

  if (tourModal) {
    tourTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        tourModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (tourClose) {
      tourClose.addEventListener('click', () => {
        tourModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }

  // 7. General Registration Modal System
  const regModal = document.getElementById('registrationModal');
  const regTriggers = document.querySelectorAll('.open-reg-modal');
  const modalClose = document.querySelector('.modal-close');

  if (regModal) {
    regTriggers.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        regModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', () => {
        regModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    regModal.addEventListener('click', (e) => {
      if (e.target === regModal) {
        regModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // 8. Form Submission Handlers
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        const oldText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Connecting to Portal...</span>`;

        setTimeout(() => {
          alert('Redirecting to NMC Official Admission Form...');
          window.open('https://forms.gle/TBNKycyc6AjfipWc8', '_blank');
          submitBtn.disabled = false;
          submitBtn.innerHTML = oldText;
          if (regModal) regModal.classList.remove('active');
        }, 800);
      }
    });
  });

  // 9. (Banner slider removed - now using static fullscreen hero)

  // 10. Awards Section Scroll Arrows
  const awardsGallery = document.getElementById('awardsGallery');
  const awardPrev = document.getElementById('awardPrev');
  const awardNext = document.getElementById('awardNext');

  if (awardsGallery && awardPrev && awardNext) {
    const scrollAmount = 340;

    awardNext.addEventListener('click', () => {
      awardsGallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    awardPrev.addEventListener('click', () => {
      awardsGallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  }

  // 11. Certificate Courses Scroll Arrows
  const certTrack = document.getElementById('certTrack');
  const certPrev = document.getElementById('certPrev');
  const certNext = document.getElementById('certNext');

  if (certTrack && certPrev && certNext) {
    const certScrollAmount = 500;

    certNext.addEventListener('click', () => {
      certTrack.scrollBy({ left: certScrollAmount, behavior: 'smooth' });
    });

    certPrev.addEventListener('click', () => {
      certTrack.scrollBy({ left: -certScrollAmount, behavior: 'smooth' });
    });
  }

  // 12. Testimonials Tab Switcher
  const testiTabs = document.querySelectorAll('.testi-tab');
  const testiPanels = document.querySelectorAll('.testi-panel');

  testiTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');

      testiTabs.forEach(t => t.classList.remove('active'));
      testiPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(target);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // 12B. Digi Testimonials Tab Switcher (New Design)
  const digiTabs = document.querySelectorAll('.digi-tab');
  const digiPanels = document.querySelectorAll('.digi-panel');

  digiTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-panel');

      digiTabs.forEach(t => t.classList.remove('active'));
      digiPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(target);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // 13. Testimonials Scroll Arrows
  document.querySelectorAll('.testi-arrow').forEach(btn => {
    btn.addEventListener('click', () => {
      const dir = btn.getAttribute('data-dir');
      const trackId = btn.getAttribute('data-track');
      const track = document.getElementById(trackId);
      if (track) {
        const scrollAmount = track.offsetWidth;
        track.scrollBy({ left: dir === 'right' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
      }
    });
  });
});


/* ==========================================================================
   GLOBAL CREATIVITY - SCROLL REVEAL & FLOATING VECTORS
   ========================================================================== */

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.section-header, .stat-premium-card, .why-pro-card, .facility-card, .prog-card, .cert-hcard, .update-card, .placement-stat-card, .qlink-card, .alumni-stat, .fv-goal-item, .calendar-link-btn, .testimonial-card, .testi-student-card, .testi-side-card, .faculty-img-card, .about-premium-img-wrap, .about-premium-content');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach((el, index) => {
  el.classList.add('reveal');
  el.style.transitionDelay = `${(index % 6) * 0.08}s`;
  revealObserver.observe(el);
});

// Inject Creative Vector Backgrounds into key sections
const sectionsForVectors = document.querySelectorAll('.overview-section, .why-choose-section, .programs-section, .quicklinks-section, .calendar-section, .alumni-section');

sectionsForVectors.forEach(section => {
  const bg = document.createElement('div');
  bg.className = 'creative-bg';
  bg.innerHTML = `
    <div class="vec-circle vec-circle-1"></div>
    <div class="vec-circle vec-circle-2"></div>
    <div class="vec-triangle vec-triangle-1"></div>
    <div class="vec-dot vec-dot-1"></div>
    <div class="vec-dot vec-dot-2"></div>
    <div class="vec-dot vec-dot-3"></div>
    <div class="vec-line vec-line-1"></div>
    <div class="vec-diamond vec-diamond-1"></div>
    <div class="vec-cross vec-cross-1"></div>
  `;
  section.style.position = 'relative';
  section.prepend(bg);
});

// Add different vector patterns to alternate sections
const sectionsForVectors2 = document.querySelectorAll('.facilities-section, .cert-courses-section, .updates-section, .placement-career-section');

sectionsForVectors2.forEach(section => {
  const bg = document.createElement('div');
  bg.className = 'creative-bg';
  bg.innerHTML = `
    <div class="vec-circle vec-circle-2"></div>
    <div class="vec-triangle vec-triangle-2"></div>
    <div class="vec-dot vec-dot-4"></div>
    <div class="vec-dot vec-dot-1"></div>
    <div class="vec-line vec-line-2"></div>
    <div class="vec-diamond vec-diamond-2"></div>
    <div class="vec-cross vec-cross-2"></div>
  `;
  section.style.position = 'relative';
  section.prepend(bg);
});

// Parallax-like subtle movement on mouse
const heroSection = document.querySelector('.hero-slider-section');
if (heroSection) {
  document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelectorAll('.creative-bg .vec-circle').forEach(el => {
      el.style.transform = `translate(${moveX * 2}px, ${moveY * 2}px)`;
    });
  });
}

// Counter animation for new placement stats
const placementNums = document.querySelectorAll('.placement-stat-num, .alumni-stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const text = el.textContent;
      const numMatch = text.match(/(\d+)/);
      if (numMatch) {
        const target = parseInt(numMatch[1]);
        const suffix = text.replace(numMatch[1], '');
        let current = 0;
        const increment = Math.ceil(target / 40);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = text;
            clearInterval(timer);
          } else {
            el.textContent = current + suffix;
          }
        }, 30);
      }
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

placementNums.forEach(el => counterObserver.observe(el));
