import { attr, ClassWatcher } from '../utilities';
export const tabsAnimation = function () {
  //animation ID
  const ANIMATION_ID = 'hoveractive';
  //elements
  const WRAP = '[cr-tabs="wrap"]';
  const TAB_LINK = '.w-tab-link';
  const LINK_ACTIVE_CLASS = 'w--current';
  const TAB_ITEM = '.w-tab-pane';
  const ITEM_ACTIVE_CLASS = 'w--tab-active';
  const TAB_EL = '[cr-tabs-el]';

  //options
  //select all the wrap elements
  const wraps = [...document.querySelectorAll(WRAP)];
  if (wraps.length === 0) return;
  //for each tabs elements
  wraps.forEach((wrap) => {
    const items = [...wrap.querySelectorAll(TAB_ITEM)];
    const links = [...wrap.querySelectorAll(TAB_LINK)];
    if (items.length === 0) return;
    //listen for click event
    items.forEach((item, index) => {
      const link = links[index];
      //get all items to animate within each tab
      let elements = [...item.querySelectorAll(TAB_EL)];
      if (elements.length === 0) {
        //if items aren't found just get the children of each tab
        elements = [...item.children];
      }
      //animation when tab is opened
      const tl = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.4,
          ease: 'power2.out',
        },
      });
      tl.fromTo(
        elements,
        { opacity: 0, y: '2rem' },
        {
          opacity: 1,
          y: '0rem',
          stagger: { each: 0.2, from: 'start' },
        }
      );
      //set to visible state
      tl.progress(1);

      //function to run when active class is added to the item
      function tabActivated() {
        tl.progress(0);
        tl.restart();
      }
      //function to run when active class is removed from the item

      function tabDeactivated() {
        // console.log('inactive');
      }

      // listen for class changes and run callbacks
      let classWatcher = new ClassWatcher(item, ITEM_ACTIVE_CLASS, tabActivated, tabDeactivated);
    });
  });
};
