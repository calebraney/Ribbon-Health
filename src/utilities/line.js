import { attr } from './attributes.js';

// Line Types
export const scrollLines = function (trigger, mobile = false) {
  // get options
  let scrollStart = attr('top 90%', trigger.getAttribute('scroll-start'));
  let scrollEnd = attr('bottom 90%', trigger.getAttribute('scroll-end'));

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
    // horizontal will be true by default
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
