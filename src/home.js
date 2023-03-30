import { scrollLineAnimation } from './line.js';

// constants
const ACTIVE_CLASS = 'is-active';

window.Webflow ||= [];
window.Webflow.push(() => {
  //When Webflow is Loaded

  // Home Header
  const homeHeader = function (startPoint = 'top 5rem', endPoint = 'bottom 10%') {
    const triggerEl = document.querySelector('.section_home-header');
    const images = document.querySelectorAll('.home-header_image.is-top');

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
    images.forEach((image, index) => {
      tl.to(image, {
        opacity: 1,
      });
    });
  };
  // utility function to update active class
  const updateClass = function (currentItem, currentIndex, allItems) {
    currentImage = images[currentIndex];
    //remove active class from every item
    allItems.forEach((itemEl, index) => {
      const imageEl = images[index];
      itemEl.classList.remove(ACTIVE_CLASS);
      imageEl.classList.remove(ACTIVE_CLASS);
    });
    currentItem.classList.add(ACTIVE_CLASS);
    currentImage.classList.add(ACTIVE_CLASS);
  };
  const homeSplitScroll = function (startPoint = 'top 60%', endPoint = 'bottom 60%') {
    const triggerEl = document.querySelector('.split-hover_component');
    const items = document.querySelectorAll('.split-hover_item-text');
    const images = document.querySelectorAll('.split-hover_image');
    if (!triggerEl || items.length === 0 || images.length === 0) return;

    const homeSplitTL = gsap.timeline({
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
      homeSplitTL.call(updateClass, [item, index, items], '+=1');
    });
  };
  const homeSplitMobile = function () {
    const items = document.querySelectorAll('.split-hover_item-text');
    items.forEach((item, index) => {
      item.addEventListener('click', function () {
        updateClass(item, index, items);
      });
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
        homeHeader();
        homeSplitScroll();
      }
      if (isMobile) {
        homeSplitMobile();
        // homeSplitScroll('top 30%', 'top top');
      }
    }
  );
});
