// Language switching
function setLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);

    document.querySelectorAll('[data-en][data-no]').forEach(el => {
        const text = el.getAttribute(`data-${lang}`);
        if (text) {
            const svg = el.querySelector('svg');
            if (svg) {
                const svgClone = svg.cloneNode(true);
                el.textContent = text + ' ';
                el.appendChild(svgClone);
            } else {
                el.textContent = text;
            }
        }
    });

    document.querySelectorAll('[data-aria-en][data-aria-no]').forEach(el => {
        el.setAttribute('aria-label', el.getAttribute(`data-aria-${lang}`));
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-lang') === lang;
        btn.classList.toggle('active', isActive);
    });

    // Update placeholders
    if (typeof updatePlaceholders === 'function') {
        updatePlaceholders(lang);
    }

    // Update quiz step indicator if exists
    const stepIndicator = document.getElementById('quiz-step-indicator');
    if (stepIndicator && typeof currentStep !== 'undefined') {
        stepIndicator.textContent = lang === 'en' ? `Step ${currentStep} of ${totalSteps}` : `Steg ${currentStep} av ${totalSteps}`;
    }

    // Update dynamic cities if on step 2
    if (typeof updateDynamicCities === 'function' && typeof currentStep !== 'undefined' && currentStep === 2) {
        updateDynamicCities();
    }

    document.documentElement.lang = lang === 'no' ? 'no' : 'en';
}

// Load saved language + init marquee
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'no';
    setLanguage(savedLang);
    initMarquee();
});

// Testimonials marquee — auto-scrolls in an infinite loop, pauses on hover,
// and can be browsed with arrow buttons, trackpad swipes and touch drags.
function initMarquee() {
  document.querySelectorAll('.testimonials-marquee').forEach(setupMarquee);
}

function setupMarquee(marquee) {
  const track = marquee.querySelector('.testimonials-marquee-track');
  if (!track) return;

  // Duplicate cards so the loop is seamless
  const originals = Array.from(track.children);
  if (!originals.length) return;
  originals.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('a').forEach(a => a.setAttribute('tabindex', '-1'));
    track.appendChild(clone);
  });

  // Wrap so the arrows sit outside the faded edges of the marquee
  const carousel = document.createElement('div');
  carousel.className = 'testimonials-carousel';
  marquee.parentNode.insertBefore(carousel, marquee);
  carousel.appendChild(marquee);

  const arrowPath = {
    prev: 'M15 18l-6-6 6-6',
    next: 'M9 18l6-6-6-6'
  };
  const makeButton = (dir, labelNo, labelEn) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `testimonials-nav testimonials-nav-${dir}`;
    btn.setAttribute('aria-label', document.documentElement.lang === 'en' ? labelEn : labelNo);
    btn.dataset.ariaNo = labelNo;
    btn.dataset.ariaEn = labelEn;
    btn.innerHTML = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${arrowPath[dir]}"/></svg>`;
    carousel.appendChild(btn);
    return btn;
  };
  const prevBtn = makeButton('prev', 'Forrige omtale', 'Previous review');
  const nextBtn = makeButton('next', 'Neste omtale', 'Next review');

  track.classList.add('is-js');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = window.matchMedia('(max-width: 768px)');

  let loopWidth = 0;   // width of one full set of cards
  let step = 0;        // one card + gap
  let offset = 0;      // current scroll position in px
  let hovering = false;
  let keyboardFocus = false;
  let dragging = false;
  let resumeAt = 0;    // timestamp when auto-scroll may resume after interaction
  let anim = null;     // active arrow animation {from, to, start, duration}
  let lastTime = null;

  const measure = () => {
    loopWidth = track.children[originals.length].offsetLeft - originals[0].offsetLeft;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    step = originals[0].offsetWidth + gap;
  };

  const wrap = value => ((value % loopWidth) + loopWidth) % loopWidth;
  const render = () => {
    track.style.transform = `translateX(${-wrap(offset)}px)`;
  };

  const pauseFor = ms => {
    resumeAt = Math.max(resumeAt, performance.now() + ms);
  };

  const go = direction => {
    const from = anim ? anim.to : offset;
    // Snap to the nearest card edge so arrows always land on whole cards
    const base = Math.round(from / step) * step;
    anim = { from: offset, to: base + direction * step, start: performance.now(), duration: 450 };
    pauseFor(4000);
  };

  prevBtn.addEventListener('click', () => go(-1));
  nextBtn.addEventListener('click', () => go(1));

  carousel.addEventListener('mouseenter', () => { hovering = true; });
  carousel.addEventListener('mouseleave', () => { hovering = false; pauseFor(600); });

  // Keyboard: arrow keys when a button or card has focus
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
  });
  // Pause while a keyboard user is focused inside (not after a mouse click)
  carousel.addEventListener('focusin', e => { keyboardFocus = e.target.matches(':focus-visible'); });
  carousel.addEventListener('focusout', () => { keyboardFocus = false; });

  // Trackpad / horizontal wheel
  marquee.addEventListener('wheel', e => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
    e.preventDefault();
    anim = null;
    offset += e.deltaX;
    pauseFor(2500);
    render();
  }, { passive: false });

  // Touch / pen drag (mouse users get the arrows)
  let dragStartX = 0;
  let dragStartY = 0;
  let dragStartOffset = 0;
  let dragLocked = null; // 'x' or 'y' once the direction is clear
  marquee.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse') return;
    dragging = true;
    dragLocked = null;
    anim = null;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    dragStartOffset = offset;
  });
  marquee.addEventListener('pointermove', e => {
    if (!dragging) return;
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    if (!dragLocked && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      dragLocked = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    }
    if (dragLocked === 'x') {
      offset = dragStartOffset - dx;
      render();
    }
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    pauseFor(3000);
  };
  // A sideways swipe should not also open a link inside a card
  marquee.addEventListener('click', e => {
    if (dragLocked === 'x') {
      e.preventDefault();
      e.stopPropagation();
      dragLocked = null;
    }
  }, true);
  marquee.addEventListener('pointerup', endDrag);
  marquee.addEventListener('pointercancel', endDrag);
  marquee.addEventListener('pointerleave', endDrag);

  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const tick = now => {
    const dt = lastTime === null ? 0 : Math.min(now - lastTime, 100);
    lastTime = now;

    if (anim) {
      const t = Math.min((now - anim.start) / anim.duration, 1);
      offset = anim.from + (anim.to - anim.from) * easeOut(t);
      if (t === 1) anim = null;
    } else if (!hovering && !keyboardFocus && !dragging && now >= resumeAt && !reducedMotion.matches) {
      const duration = mobile.matches ? 30000 : 40000; // ms per full loop
      offset += (loopWidth / duration) * dt;
    }

    // Keep the number small without changing the visible position
    if (!anim && !dragging && loopWidth) offset = wrap(offset);
    render();
    requestAnimationFrame(tick);
  };

  measure();
  window.addEventListener('resize', () => {
    const progress = loopWidth ? wrap(offset) / loopWidth : 0;
    measure();
    offset = progress * loopWidth;
    render();
  });
  requestAnimationFrame(tick);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});
