import { attr } from './attributes.js';

// Animation for What We Do Dropdowns
export const accordionAnimation = function () {
  // select the relevant items from the DOM
  const accordionLists = document.querySelectorAll('[cr-accordion="list"]');
  const ACCORDION_ITEM = '[cr-accordion="item"]';
  const ACCORDION_TOP = '[cr-accordion="top"]';
  const ACCORDION_OPEN = '[cr-accordion="open"]';
  const ACCORDION_CLOSE = '[cr-accordion="close"]';
  const OPTION_FIRST_OPEN = 'cr-accordion-first-open';
  const OPTION_ONE_ACTIVE = 'cr-accordion-one-active';
  const OPTION_KEEP_ONE_OPEN = 'cr-accordion-keep-one-open';
  const OPTION_HOVER_OPEN = 'cr-accordion-hover';
  const OPTION_SCROLL_OPEN = 'cr-accordion-scroll';
  const ACTIVE_CLASS = 'is-active';

  if (accordionLists.length === 0 || accordionLists === undefined) return;
  accordionLists.forEach((list) => {
    // set up conditions for
    let firstOpen = attr(false, list.getAttribute(OPTION_FIRST_OPEN));
    let oneActive = attr(false, list.getAttribute(OPTION_ONE_ACTIVE));
    let keepOneOpen = attr(false, list.getAttribute(OPTION_KEEP_ONE_OPEN));
    let hoverOnly = attr(false, list.getAttribute(OPTION_HOVER_OPEN));
    let scrollOnly = attr(false, list.getAttribute(OPTION_SCROLL_OPEN));
    //open the first accordion
    const firstItem = list.firstElementChild;

    if (!hoverOnly && !scrollOnly) {
      if (firstOpen && firstItem) {
        firstItem.classList.add(ACTIVE_CLASS);
        firstItem.querySelector(ACCORDION_OPEN).click();
      }
      // Add event listener for when accordion lists are clicked
      list.addEventListener('click', function (e) {
        // check if the clicked element was the top of an accordion and get that accordion
        const clickedEl = e.target.closest(ACCORDION_TOP);
        if (!clickedEl) return;
        // get all the accordions within this list and the active item
        const clickedItem = clickedEl.closest(ACCORDION_ITEM);
        const accordionItems = list.querySelectorAll(ACCORDION_ITEM);
        // check if the clicked item is already active
        let clickedItemAlreadyActive = clickedItem.classList.contains(ACTIVE_CLASS);

        // if item is NOT ACTIVE
        if (!clickedItemAlreadyActive) {
          // check if oneActive is True
          if (oneActive) {
            // if one active is true loop through each item
            accordionItems.forEach((item) => {
              //if item is the current item set to Active and Open
              if (item === clickedItem) {
                item.classList.add(ACTIVE_CLASS);
                item.querySelector(ACCORDION_OPEN).click();
              }
              //otherwise remove active class and close
              else {
                item.classList.remove(ACTIVE_CLASS);
                item.querySelector(ACCORDION_CLOSE).click();
              }
            });
          }
          if (!oneActive) {
            // if one active is false just set the current item to active and open it
            clickedItem.classList.add(ACTIVE_CLASS);
            clickedItem.querySelector(ACCORDION_OPEN).click();
          }
        }

        // if the current item IS ACTIVE and keep one open is false
        if (clickedItemAlreadyActive && !keepOneOpen) {
          // REMOVE the active class from the clicked item
          clickedItem.classList.remove(ACTIVE_CLASS);
          clickedItem.querySelector(ACCORDION_CLOSE).click();
        }
      });
    }
    if (hoverOnly) {
      const accordionItems = list.querySelectorAll(ACCORDION_ITEM);
      accordionItems.forEach((item) => {
        item.addEventListener('mouseover', function () {
          this.classList.add(ACTIVE_CLASS);
          item.querySelector(ACCORDION_OPEN).click();
        });
        item.addEventListener('mouseout', function () {
          this.classList.remove(ACTIVE_CLASS);
          item.querySelector(ACCORDION_CLOSE).click();
        });
      });
    }
    if (scrollOnly) {
      const accordionItems = list.querySelectorAll(ACCORDION_ITEM);
      const listArray = gsap.utils.toArray(accordionItems);
      accordionItems.forEach((item, index) => {
        // start with the first item open
        firstItem.classList.add(ACTIVE_CLASS);
        firstItem.querySelector(ACCORDION_OPEN).click();

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top center',
            end: 'bottom center',
            scrub: 0,
            onEnter: () => {
              item.classList.add(ACTIVE_CLASS);
              item.querySelector(ACCORDION_OPEN).click();
              // console.log(`open ${item}`);
            },
            onLeave: () => {
              // don't remove class on leave of the last item
              if (index !== listArray.length - 1) {
                item.classList.remove(ACTIVE_CLASS);
                item.querySelector(ACCORDION_CLOSE).click();
              }
            },
            onEnterBack: () => {
              item.classList.add(ACTIVE_CLASS);
              item.querySelector(ACCORDION_OPEN).click();
              // console.log(`open ${item}`);
            },
            onLeaveBack: () => {
              // don't remove class on leaveback of the last item
              if (index !== 0) {
                item.classList.remove(ACTIVE_CLASS);
                item.querySelector(ACCORDION_CLOSE).click();
                // console.log(`close ${item}`);
              }
            },
          },
        });
      });
    }
  });
};
