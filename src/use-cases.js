import { scrollLineAnimation } from './line.js';

// register gsap plugin
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

// Table scroll animation
const scrollTableAnimation = function (mobile = false) {
  HIGHLIGHT_COLOR = '#f9f9d7';
  ACTIVE_CLASS = 'is-active';
  const rows = document.querySelectorAll('.case-table_row');
  rows.forEach((row) => {
    // if parent is invisible or scroll is set to false return;
    if (row.hasAttribute('scroll-false')) {
      return;
    }
    const icon = row.querySelector('.case-table_icon');
    const cells = row.querySelectorAll('.case-table_cell');
    const setIconToActive = function (setToActive = true) {
      // don't animate if you can't find the icon or on mobile
      if (!icon || mobile) return;
      let state = Flip.getState(icon);
      //move background
      if (setToActive) {
        icon.classList.add(ACTIVE_CLASS);
      } else {
        icon.classList.remove(ACTIVE_CLASS);
      }
      // animate element
      Flip.from(state, {
        duration: 0.3,
        ease: 'power2.out',
      });
    };
    const setRowToActive = function (setToActive = true) {
      // add or remove the class
      if (setToActive) {
        row.classList.add(ACTIVE_CLASS);
      } else {
        row.classList.remove(ACTIVE_CLASS);
      }
    };

    const rowTL = gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart reverse restart reverse',
        onEnter: () => {
          setIconToActive();
          setRowToActive();
        },
        onLeave: () => {
          setIconToActive(false);
          setRowToActive(false);
        },
        onEnterBack: () => {
          setIconToActive();
          setRowToActive();
        },
        onLeaveBack: () => {
          setIconToActive(false);
          setRowToActive(false);
        },
      },
    });
  });
};

window.Webflow ||= [];
window.Webflow.push(() => {
  //When Webflow is Loaded

  //define sections and run animations
  const lineSections = document.querySelectorAll('[scroll-section]');
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
        lineSections.forEach((section) => {
          scrollLineAnimation(section, isMobile);
        });
        scrollTableAnimation(isMobile);
      }
    }
  );
});
