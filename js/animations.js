// ============================================================================
// BAYTOUKA (بيتك) — Motion, Art-Tile Tilt, Scroll Reveals & Mobile Swipe Sheets
// Zero photo dependencies; respects prefers-reduced-motion; wrapped in try/catch.
// ============================================================================

export function prefersReducedMotion() {
  return Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

export function dismissPageIntro() {
  if (typeof window !== 'undefined' && typeof window.__dismissLoader === 'function') {
    window.__dismissLoader();
  } else {
    const curtain = document.getElementById('page-intro-curtain');
    if (!curtain) return;
    const delay = prefersReducedMotion() ? 40 : 300;
    setTimeout(() => {
      curtain.classList.add('loaded');
      setTimeout(() => {
        if (curtain && curtain.parentNode) {
          curtain.style.display = 'none';
        }
      }, 500);
    }, delay);
  }
}

/**
 * Interactive Hero Parallax Composition (Mouse on Desktop, Scroll on Mobile)
 */
export function initHeroParallax() {
  if (prefersReducedMotion()) return;
  const stage = document.getElementById('hero-collage-stage');
  if (!stage) return;

  const layers = Array.from(stage.querySelectorAll('[data-depth]'));
  if (layers.length === 0) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let rafId = null;

  function updateParallax() {
    currentX += (targetX - currentX) * 0.09;
    currentY += (targetY - currentY) * 0.09;

    layers.forEach(el => {
      const depth = parseFloat(el.getAttribute('data-depth') || '0.15');
      const moveX = currentX * depth * 38;
      const moveY = currentY * depth * 38;
      el.style.transform = `translate3d(${moveX.toFixed(1)}px, ${moveY.toFixed(1)}px, 0)`;
    });

    if (Math.abs(targetX - currentX) > 0.002 || Math.abs(targetY - currentY) > 0.002) {
      rafId = requestAnimationFrame(updateParallax);
    } else {
      rafId = null;
    }
  }

  function scheduleUpdate() {
    if (!rafId) {
      rafId = requestAnimationFrame(updateParallax);
    }
  }

  window.addEventListener(
    'mousemove',
    e => {
      const rect = stage.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      scheduleUpdate();
    },
    { passive: true }
  );

  window.addEventListener(
    'scroll',
    () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight * 1.2) return;
      targetY = (scrollY / 500) * -0.55;
      scheduleUpdate();
    },
    { passive: true }
  );
}

/**
 * Animated Counter Strip
 */
export function animateCounter(el, targetValue, duration = 850) {
  if (!el) return;
  const end = Number(targetValue) || 0;
  if (prefersReducedMotion()) {
    el.textContent = end.toLocaleString('en-US');
    return;
  }
  const startTime = performance.now();
  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(end * eased);
    el.textContent = current.toLocaleString('en-US');
    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }
  requestAnimationFrame(tick);
}

/**
 * IntersectionObserver for staggered scroll reveals
 */
let revealObserver = null;

export function observeScrollReveals(root = document) {
  const elements = root.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            const delay = Math.min(idx * 35, 180);
            setTimeout(() => {
              entry.target.classList.add('is-visible');
            }, delay);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -24px 0px' }
    );
  }

  elements.forEach(el => revealObserver.observe(el));
}

/**
 * Fly-to-Cart Brass Emblem Orb Animation (Zero Photos)
 */
export function flyToCartAnimation(triggerEl) {
  bounceCartBadges();
  if (prefersReducedMotion() || !triggerEl) return;

  const cartTarget =
    document.querySelector('#mobile-cart-bar-btn') &&
    window.innerWidth < 768
      ? document.querySelector('#mobile-cart-bar-btn')
      : document.querySelector('.cart-trigger-pill');
  if (!cartTarget) return;

  const startRect = triggerEl.getBoundingClientRect();
  const endRect = cartTarget.getBoundingClientRect();

  const orb = document.createElement('div');
  orb.className = 'flying-product-orb';
  orb.setAttribute('aria-hidden', 'true');
  orb.textContent = '✦';
  orb.style.left = `${startRect.left + startRect.width / 2 - 22}px`;
  orb.style.top = `${startRect.top + startRect.height / 2 - 22}px`;
  document.body.appendChild(orb);

  requestAnimationFrame(() => {
    const dx = endRect.left + endRect.width / 2 - (startRect.left + startRect.width / 2);
    const dy = endRect.top + endRect.height / 2 - (startRect.top + startRect.height / 2);
    orb.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(0.28)`;
    orb.style.opacity = '0.2';
  });

  setTimeout(() => {
    orb.remove();
  }, 680);
}

export function bounceCartBadges() {
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.classList.remove('bounce');
    void badge.offsetWidth;
    badge.classList.add('bounce');
  });
}

/**
 * Draggable Horizontal Carousel for Bestsellers & Trending
 */
export function initDraggableCarousel(carouselEl) {
  if (!carouselEl) return;
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  carouselEl.addEventListener('mousedown', e => {
    isDown = true;
    carouselEl.classList.add('dragging');
    startX = e.pageX - carouselEl.offsetLeft;
    scrollLeft = carouselEl.scrollLeft;
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    carouselEl.classList.remove('dragging');
  });

  carouselEl.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselEl.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselEl.scrollLeft = scrollLeft - walk;
  });
}

/**
 * Subtle Parallax Tilt on Art Tiles & Desktop Magnetic Buttons
 */
export function initDesktopCursorAndMagnetics() {
  if (prefersReducedMotion()) return;
  const isFinePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!isFinePointer) return;

  const cursorRing = document.getElementById('custom-cursor-ring');
  if (cursorRing) {
    window.addEventListener(
      'mousemove',
      e => {
        cursorRing.style.transform = `translate3d(${e.clientX - 17}px, ${e.clientY - 17}px, 0)`;
      },
      { passive: true }
    );

    document.addEventListener('mouseover', e => {
      const interactive = e.target.closest('a, button, .product-card, .bento-category-tile, .hero-art-card');
      cursorRing.classList.toggle('cursor-hover', Boolean(interactive));
    });
  }

  // Event-delegated subtle 3D tilt on .art-tile-stage
  document.addEventListener(
    'mousemove',
    e => {
      const stage = e.target.closest('.art-tile-stage');
      if (!stage) return;
      const tile = stage.querySelector('.art-tile');
      if (!tile) return;
      const rect = stage.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      tile.style.transform = `perspective(520px) rotateY(${(nx * 7).toFixed(1)}deg) rotateX(${(-ny * 7).toFixed(1)}deg) scale(1.015)`;
    },
    { passive: true }
  );

  document.addEventListener(
    'mouseout',
    e => {
      const stage = e.target.closest('.art-tile-stage');
      if (!stage) return;
      const tile = stage.querySelector('.art-tile');
      if (tile) tile.style.transform = '';
    },
    { passive: true }
  );
}

/**
 * Swipe-Down-to-Close Gesture on Mobile Bottom Sheets (Modal & Cart Drawer)
 */
export function initMobileSwipeSheets(onCloseModal, onCloseCart) {
  const modalCard = document.querySelector('#quick-view-modal .modal-card');
  const cartDrawer = document.getElementById('cart-drawer');

  function attachSwipeDown(el, closeCallback) {
    if (!el) return;
    let startY = 0;
    let currentDeltaY = 0;

    el.addEventListener(
      'touchstart',
      e => {
        if (el.scrollTop > 10) return;
        startY = e.touches[0].clientY;
        currentDeltaY = 0;
      },
      { passive: true }
    );

    el.addEventListener(
      'touchmove',
      e => {
        if (!startY) return;
        const dy = e.touches[0].clientY - startY;
        if (dy > 0 && el.scrollTop <= 5) {
          currentDeltaY = dy;
        }
      },
      { passive: true }
    );

    el.addEventListener(
      'touchend',
      () => {
        if (currentDeltaY > 85 && typeof closeCallback === 'function') {
          closeCallback();
        }
        startY = 0;
        currentDeltaY = 0;
      },
      { passive: true }
    );
  }

  attachSwipeDown(modalCard, onCloseModal);
  attachSwipeDown(cartDrawer, onCloseCart);
}
