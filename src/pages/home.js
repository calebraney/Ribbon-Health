import { ACTIVE_CLASS } from '../index';

// Home Header
export const homeHeader = function () {
  const images = document.querySelectorAll('[header-main-image]');
  const tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    defaults: {
      duration: 0.8,
      ease: 'none',
    },
  });
  images.forEach((image, index) => {
    tl.to(image, {
      opacity: 1,
    });
  });
};

export const homeSplitScroll = function () {
  // select  elements
  const triggerEl = document.querySelector('[cr-home-split="component"]');
  const allItems = document.querySelectorAll('[cr-home-split="item"]');
  const allImages = document.querySelectorAll('[cr-home-split="image"]');
  if (!triggerEl || allItems.length === 0 || allImages.length === 0) return;
  // define start and end positions
  let scrollStart = 'top top';
  let scrollEnd = 'bottom bottom';
  if (triggerEl.hasAttribute('cr-home-split-start')) {
    scrollStart = trigger.getAttribute('cr-home-split-start');
  }
  if (triggerEl.hasAttribute('cr-home-split-end')) {
    scrollEnd = trigger.getAttribute('cr-home-split-end');
  }
  // utility function to update active class
  const updateClass = function (currentItem, currentIndex, allItems) {
    //remove active class from every item
    allItems.forEach((item, index) => {
      let state = Flip.getState(item);
      //if it is the current item
      if (item === currentItem) {
        item.classList.add(ACTIVE_CLASS);
      } else {
        item.classList.remove(ACTIVE_CLASS);
      }
      // animate element
      Flip.from(state, {
        duration: 0.3,
        ease: 'power1.out',
      });
    });
  };
  // create the timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerEl,
      start: scrollStart,
      end: scrollEnd,
      scrub: true,
    },
    defaults: {
      duration: 0.5,
      delay: 1,
      ease: 'none',
    },
  });
  allItems.forEach((currentItem, currentIndex) => {
    // get current image
    currentImage = allImages[currentIndex];
    // animate current image
    tl.to(currentImage, {
      opacity: 1,
    });
    // animate current text
    tl.call(updateClass, [currentItem, currentIndex, allItems], '<');
  });
};

export const homeSplitScrollMobile = function () {
  $('.split-hover_item').on('click', function () {
    let itemIndex = $(this).index();
    $('.split-hover_item').removeClass('is-active');
    $('.split-hover_image').removeClass('is-active');
    $(this).addClass('is-active');
    $('.split-hover_image').eq(itemIndex).addClass('is-active');
  });
};

/*
  const homeSplitScroll = function (startPoint = 'top 60%', endPoint = 'bottom 60%') {
    const triggerEl = document.querySelector('.split-hover_component');
    const items = document.querySelectorAll('.split-hover_item-text');
    const images = document.querySelectorAll('.split-hover_image');
    if (!triggerEl || items.length === 0 || images.length === 0) return;
    // utility function to update active class
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
        scrub: true,
      },
      defaults: {
        duration: 1,
        ease: 'none',
      },
    });
    items.forEach((item, index) => {
      homeSplitTL.call(updateClass, [item, index], '+=1');
    });
  };
*/
