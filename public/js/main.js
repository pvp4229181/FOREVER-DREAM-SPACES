// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');
const navBackdrop = document.getElementById('navBackdrop');
if (navToggle && mainNav) {
  const setNavOpen = (isOpen) => {
    mainNav.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    if (navBackdrop) navBackdrop.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };
  navToggle.addEventListener('click', () => {
    setNavOpen(!mainNav.classList.contains('open'));
  });
  if (navBackdrop) {
    navBackdrop.addEventListener('click', () => setNavOpen(false));
  }
  mainNav.querySelectorAll('li:not(.has-children) > a').forEach((link) => {
    link.addEventListener('click', () => setNavOpen(false));
  });
  mainNav.querySelectorAll('li.has-children > a').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 1180) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}

// Project / gallery filter buttons
const filterBar = document.querySelector('.filter-bar');
if (filterBar) {
  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    filterBar.querySelectorAll('button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('[data-category]').forEach((card) => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.display = match ? '' : 'none';
    });
  });
}

// Contact / consultation forms — submit via fetch to the JSON API
document.querySelectorAll('form[data-ajax-contact]').forEach((form) => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    const submitBtn = form.querySelector('button[type="submit"]');
    const original = submitBtn ? submitBtn.textContent : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      if (status) {
        status.textContent = "Thank you! We'll get back to you within 24 hours.";
        status.className = 'form-status success';
      }
      form.reset();
    } catch (err) {
      if (status) {
        status.textContent = 'Something went wrong. Please call or WhatsApp us directly.';
        status.className = 'form-status error';
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = original;
      }
    }
  });
});

// Header shadow on scroll
const header = document.getElementById('siteHeader');
if (header) {
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10 ? '0 8px 24px -18px rgba(0,0,0,.4)' : 'none';
  });
}

// Hero cube carousel — recreates the reference's room-to-room 3D rotation.
const heroCube = document.getElementById('heroCube');
if (heroCube) {
  const cubeStage = heroCube.parentElement;
  const slides = [...document.querySelectorAll('[data-hero-slide]')];
  const prev = document.getElementById('heroPrev');
  const next = document.getElementById('heroNext');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 0;
  let direction = 1;
  let timer;

  const syncCubeDepth = () => {
    // CSS viewport units include the scrollbar in some browsers. Measuring the
    // clipped stage prevents a transformed cube face from adding page width.
    heroCube.style.setProperty('--cube-depth', `${cubeStage.clientWidth / 2}px`);
  };

  const showHeroSlide = (index) => {
    current = Math.max(0, Math.min(2, index));
    heroCube.style.setProperty('--cube-angle', `${current * -90}deg`);
    slides.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle('is-active', active);
      if (active) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  };

  const startAutoplay = () => {
    if (reduceMotion) return;
    window.clearInterval(timer);
    timer = window.setInterval(() => {
      if (document.hidden) return;
      if (current === 2) direction = -1;
      if (current === 0) direction = 1;
      showHeroSlide(current + direction);
    }, 5200);
  };

  prev?.addEventListener('click', () => {
    direction = -1;
    showHeroSlide(current === 0 ? 2 : current - 1);
    startAutoplay();
  });
  next?.addEventListener('click', () => {
    direction = 1;
    showHeroSlide(current === 2 ? 0 : current + 1);
    startAutoplay();
  });
  slides.forEach((dot) => {
    dot.addEventListener('click', () => {
      showHeroSlide(Number(dot.dataset.heroSlide));
      startAutoplay();
    });
  });

  syncCubeDepth();
  if ('ResizeObserver' in window) {
    new ResizeObserver(syncCubeDepth).observe(cubeStage);
  } else {
    window.addEventListener('resize', syncCubeDepth, { passive: true });
  }
  startAutoplay();
}
