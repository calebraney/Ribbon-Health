'use strict';

// Line Types
const scrollSections = document.querySelectorAll('[scroll-section]');

const scrollLineAnimation = function (trigger, mobile = false) {
  let scrollStart = 'top 90%';
  let scrollEnd = 'bottom 90%';
  if (trigger.hasAttribute('scroll-start')) {
    scrollStart = trigger.getAttribute('scroll-start');
  }
  if (trigger.hasAttribute('scroll-end')) {
    scrollEnd = trigger.getAttribute('scroll-end');
  }
  const lineTL = gsap.timeline({
    scrollTrigger: {
      trigger: trigger,
      start: scrollStart,
      end: scrollEnd,
      scrub: 0.5,
    },
    defaults: {
      duration: 1,
      ease: 'none',
    },
  });
  const plusElements = trigger.querySelectorAll('.plus_component');
  plusElements.forEach((plus) => {
    lineTL.from(
      plus,
      {
        scale: 0,
      },
      0
    );
  });
  const lines = trigger.querySelectorAll('.line-fill');
  lines.forEach((line) => {
    // if parent is invisible or scroll is set to false return;
    if (line.hasAttribute('scroll-false') || line.offsetParent === null) {
      return;
    }
    // horizontal will be true if the direction is horizontal and false if it is vertical
    let horizontal = true;
    // if mobile is false and scroll is = v set horizontal to false
    if (!mobile && line.hasAttribute('scroll-desktop-v')) {
      horizontal = false;
    }
    // if viewport is mobile and scroll-mobile="v" set horizontal to false
    if (mobile && line.hasAttribute('scroll-mobile-v')) {
      horizontal = false;
    }
    // add tween
    lineTL.from(
      line,
      {
        // If horizontal is true animate width from 0% if false animate height
        width: horizontal ? '0%' : '100%',
        height: horizontal ? '100%' : '0%',
      },
      0
    );
  });
};

let mm = gsap.matchMedia();
mm.add(
  {
    //This is the conditions object
    isMobile: '(max-width: 767px)',
    isDesktop: '(min-width: 768px)',
    reduceMotion: '(prefers-reduced-motion: reduce)',
  },
  (context) => {
    let { isMobile, isDesktop, reduceMotion } = context.conditions;

    if (!reduceMotion) {
      //Run if reduce motion is off
      scrollSections.forEach((section) => {
        scrollLineAnimation(section, isMobile);
      });
    }
  }
);

//////////////////////////////////////////
// BACKUP
/*

const scrollLineAnimation = function (trigger) {
    const linesHor = trigger.querySelectorAll('[scroll="horizontal"]');
    const linesVer = trigger.querySelectorAll('[scroll="vertical"]');
    const linesHorDesktop = trigger.querySelectorAll('[scroll-desktop="horizontal"]');
    const linesVerDesktop = trigger.querySelectorAll('[scroll-desktop="vertical"]');
    const linesHorMobile = trigger.querySelectorAll('[scroll-mobile="horizontal"]');
    const linesVerMobile = trigger.querySelectorAll('[scroll-mobile="vertical"]');
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: 1,
      },
      defaults: {
        duration: 1,
        ease: 'none',
      },
    });
    tl.from(
      linesHor,
      {
        width: '0%',
      },
      0
    );
    tl.from(
      linesVer,
      {
        height: '0%',
      },
      0
    );
    // Desktop Only Tweens
    mm.add('(min-width: 768px)', () => {
      tl.from(
        linesHorDesktop,
        {
          width: '0%',
        },
        0
      );
      tl.from(
        linesVerDesktop,
        {
          height: '0%',
        },
        0
      );
    });
    // Mobile Only Tweens
    mm.add('(max-width: 767px)', () => {
      tl.from(
        linesHorMobile,
        {
          width: '0%',
        },
        0
      );
      tl.from(
        linesVerMobile,
        {
          height: '0%',
        },
        0
      );
    });
  };
  scrollSections.forEach((section) => {
    scrollLineAnimation(section);
  });




  const plusAnimation = function (triggerEl) {
  const plus = triggerEl.querySelectorAll('.plus_component');
  if (plus) return;
  const plusTL = gsap.timeline({
    scrollTrigger: {
      trigger: triggerEl,
      start: 'center 80%',
      end: 'center 50%',
      toggleActions: 'play, none, none, none',
    },
    defaults: {
      duration: 0.5,
      ease: 'power2.out',
    },
  });
  plusTL.fromTo(
    plus,
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 1,
    }
  );
  */
