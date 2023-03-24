import { scrollLineAnimation } from './line.js';

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
    const updateIcon = function (isActive = false) {
      // don't animate if you can't find the icon or on mobile
      if (!icon || mobile) return;
      let state = Flip.getState(icon);
      //move background
      if (isActive) {
        icon.classList.remove(ACTIVE_CLASS);
      } else {
        icon.classList.add(ACTIVE_CLASS);
      }
      // animate element
      Flip.from(state, {
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const rowTL = gsap.timeline({
      scrollTrigger: {
        trigger: row,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'restart reverse restart reverse',
        onEnter: () => {
          updateIcon(false);
        },
        onLeave: () => {
          updateIcon(true);
        },
        onEnterBack: () => {
          updateIcon(false);
        },
        onLeaveBack: () => {
          updateIcon(true);
        },
      },
      defaults: {
        duration: 0.5,
        ease: 'power2.Out',
      },
    });
    // add tween
    rowTL.set(cells, {
      backgroundColor: HIGHLIGHT_COLOR,
    });
  });
};
const useCaseHeaderAnimation = function (mobile = false) {
  const headerItems = document.querySelectorAll('[cr-use-case-header="item"]');
  const dividers = document.querySelectorAll('.use-case-header_component .line-divider');

  const ACTIVE_CLASS = 'is-active';

  headerItems.forEach((item) => {
    // add an event listener to each item
    item.addEventListener('click', function (e) {
      const targetItem = this;
      const icon = document.querySelectorAll('.use-case-header_icon');
      const h3 = document.querySelectorAll('.use-case-header_h3');
      const paragraph = document.querySelectorAll('.use-case-header_paragraph');
      // guard clause
      if (Flip.isFlipping(item)) return;
      // get state
      let state = Flip.getState(headerItems, icon, h3, paragraph, dividers, {
        props: 'fontSize,color,maxWidth,flexBasis,flexGrow,flexShrink',
      });
      //adjust active class
      headerItems.forEach((item) => {
        //adjust active class
        if (item === targetItem) {
          item.classList.add(ACTIVE_CLASS);
        } else {
          item.classList.remove(ACTIVE_CLASS);
        }
      });
      // animate with flip
      Flip.from(state, {
        duration: 1.2,
        delay: 0.1,
        ease: 'power2.out',
      });
    });
  });
};

window.Webflow ||= [];
window.Webflow.push(() => {
  //When Webflow is Loaded
  // Split Tab Interaction
  $('.split-tab_item').on('click', function () {
    let itemIndex = $(this).index();
    $('.split-tab_item').removeClass('is-active');
    $('.split-tab_image').removeClass('is-active');
    $(this).addClass('is-active');
    $('.split-tab_image').eq(itemIndex).addClass('is-active');
  });

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
      useCaseHeaderAnimation();
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
