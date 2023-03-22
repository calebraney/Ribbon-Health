import { scrollLineAnimation } from './home.js';

window.Webflow ||= [];
window.Webflow.push(() => {
  //Webflow is loaded
  // Table scroll animation
  const scrollTableAnimation = function () {
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
        if (!icon) return;
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
  scrollTableAnimation();

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

      if (!reduceMotion) {
        //Run if reduce motion is off
        lineSections.forEach((section) => {
          scrollLineAnimation(section, isMobile);
        });
      }
    }
  );
});
