import { scrollLineAnimation } from './line.js';

window.Webflow ||= [];
window.Webflow.push(() => {
  //When Webflow is Loaded
  // split hover animation
  //SWITCH TO SCROLL BASED
  $('.split-hover_item-text').on('mouseenter', function () {
    let itemIndex = $(this).index();
    $('.split-hover_item-text').removeClass('is-active');
    $('.split-hover_image').removeClass('is-active');
    $(this).addClass('is-active');
    $('.split-hover_image').eq(itemIndex).addClass('is-active');
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
