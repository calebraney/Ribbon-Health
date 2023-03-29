import { scrollLineAnimation } from './line.js';

window.Webflow ||= [];
window.Webflow.push(() => {
  //When Webflow is Loaded
  // Split Scroll animation
  const homeSplitScroll = function (startPoint = 'top center', endPoint = 'bottom center') {
    ACTIVE_CLASS = 'is-active';
    const items = document.querySelectorAll('.split-hover_item-text');
    const images = document.querySelectorAll('.split-hover_image');
    items.forEach((item, index) => {
      const image = images[index];
      console.log(item, image);
      const updateActive = function (addClass = false) {
        if (addClass) {
          item.classList.add(ACTIVE_CLASS);
          image.classList.add(ACTIVE_CLASS);
        } else {
          item.classList.remove(ACTIVE_CLASS);
          image.classList.remove(ACTIVE_CLASS);
        }
      };
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: startPoint,
          end: endPoint,
          scrub: true,
          onEnter: () => {
            updateActive(true);
          },
          onLeave: () => {
            // don't remove class on leave of the last item
            if (index !== items.length - 1) {
              updateActive(false);
            }
          },
          onEnterBack: () => {
            updateActive(true);
          },
          onLeaveBack: () => {
            if (index !== 0) {
              updateActive(false);
            }
          },
        },
      });
    });
  };
  const homeSplitScrollMobile = function (startPoint = 'top 30%', endPoint = 'bottom 90%') {
    ACTIVE_CLASS = 'is-active';
    const triggerEl = document.querySelector('.split-hover_component');
    const items = document.querySelectorAll('.split-hover_item-text');
    const images = document.querySelectorAll('.split-hover_image');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: startPoint,
        end: endPoint,
        scrub: true,
      },
      defaults: {
        duration: 1,
        ease: 'none',
      },
    });
    items.forEach((item, index) => {
      const image = images[index];
      tl.add(function () {
        //remove active class from every item
        items.forEach((itemEl, index) => {
          const imageEl = images[index];
          itemEl.classList.remove(ACTIVE_CLASS);
          imageEl.classList.remove(ACTIVE_CLASS);
        });
        image.classList.add(ACTIVE_CLASS);
        item.classList.add(ACTIVE_CLASS);
      }, index);
    });
  };
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
      if (isDesktop) {
        homeSplitScroll();
      }
      if (isMobile) {
        homeSplitScrollMobile();
      }
    }
  );
});
