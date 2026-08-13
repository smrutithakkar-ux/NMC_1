/* ==========================================================================
   NANDKUNVARBA MAHILA COLLEGE (NMC) - MAIN INTERACTIVE SYSTEM
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('active'));
    });
  }

  // 3. Stats Counter Animation
  const statNumbers = document.querySelectorAll('.stat-number');
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

  const statsSection = document.querySelector('.stats-counter-section');
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

  // 9. Interactive Hero Banner Slider System
  const sliderTrack = document.querySelector('.banner-slider-track');
  const bannerSlides = document.querySelectorAll('.banner-slide');
  const prevBtn = document.getElementById('bannerPrev');
  const nextBtn = document.getElementById('bannerNext');
  const dots = document.querySelectorAll('.banner-dot');
  const sliderWrapper = document.getElementById('bannerSlider');

  if (sliderTrack && bannerSlides.length > 0) {
    let currentSlide = 0;
    const totalSlides = bannerSlides.length;
    let autoSlideInterval = null;

    const goToSlide = (index) => {
      currentSlide = (index + totalSlides) % totalSlides;
      sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

      dots.forEach((dot, idx) => {
        if (idx === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    };

    const nextSlide = () => goToSlide(currentSlide + 1);
    const prevSlide = () => goToSlide(currentSlide - 1);

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextSlide();
        resetAutoSlide();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevSlide();
        resetAutoSlide();
      });
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(idx);
        resetAutoSlide();
      });
    });

    // On-click on the banner image itself advances to the next slide
    if (sliderWrapper) {
      sliderWrapper.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
      });
    }

    const startAutoSlide = () => {
      autoSlideInterval = setInterval(nextSlide, 5000);
    };

    const resetAutoSlide = () => {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
      startAutoSlide();
    };

    startAutoSlide();
  }

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
});
