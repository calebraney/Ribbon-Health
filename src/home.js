import { scrollLineAnimation } from './line.js';

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
  const homeSplitScroll = function (startPoint = 'top 60%', endPoint = 'bottom 60%') {
    console.log('mobile');
    ACTIVE_CLASS = 'is-active';
    // BLACK = '#000000';
    // JADE = '#00585c';
    // CHARTREUSE = '#e4ea7d';
    const triggerEl = document.querySelector('.split-hover_component');
    const items = document.querySelectorAll('.split-hover_item-text');
    const images = document.querySelectorAll('.split-hover_image');
    const updateClass = function (currentItem, currentIndex) {
      currentImage = images[currentIndex];
      //remove active class from every item
      items.forEach((itemEl, index) => {
        const imageEl = images[index];
        itemEl.classList.remove(ACTIVE_CLASS);
        imageEl.classList.remove(ACTIVE_CLASS);
      });
      currentItem.classList.add(ACTIVE_CLASS);
      currentImage.classList.add(ACTIVE_CLASS);
    };

    const homeSplitTL = gsap.timeline({
      scrollTrigger: {
        trigger: triggerEl,
        start: startPoint,
        end: endPoint,
        // toggleActions: 'play none none none',
        scrub: true,
      },
      defaults: {
        duration: 1,
        ease: 'none',
      },
    });
    items.forEach((item, index) => {
      // const textSpan = item.querySelector('.split-hover_highlight');
      // // for every item except the first
      // if (index !== 0) {
      // }

      // homeSplitTL.to(item, {
      //   color: BLACK,
      //   opacity: 1,
      // });
      // homeSplitTL.to(
      //   textSpan,
      //   {
      //     color: JADE,
      //   },
      //   '<'
      // );
      homeSplitTL.call(updateClass, [item, index], '+=1');
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
        homeSplitScroll('top 50%', 'top top');
      }
    }
  );
});
