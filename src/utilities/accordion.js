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
  const ACTIVE_CLASS = 'is-active';

  if (accordionLists.length === 0) return;
  accordionLists.forEach((list) => {
    // set up conditions for
    let firstOpen = attr(false, list.getAttribute(OPTION_FIRST_OPEN));
    let oneActive = attr(false, list.getAttribute(OPTION_ONE_ACTIVE));
    let keepOneOpen = attr(false, list.getAttribute(OPTION_KEEP_ONE_OPEN));
    let hoverOnly = attr(false, list.getAttribute(OPTION_HOVER));
    //open the first accordion
    const firstItem = list.firstElementChild;
    if (firstOpen) {
      firstItem.classList.add(ACTIVE_CLASS);
      firstItem.querySelector(ACCORDION_OPEN).click();
    }
    if (!hoverOnly) {
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
  });
};
