import paperCore from 'paper';
import { ACTIVE_CLASS } from '../index';
import { attr } from '../interactions/attributes';
import { headerTL, progress } from '../index';

// Header Animation
export const productHeader = function (reduceMotion = false, isMobile = false) {
  // get core variables
  const { Path, Point, Group, Color } = paperCore;
  const canvas = document.querySelector('#paper-canvas');
  const headerComponent = document.querySelector('#process-header');
  //if project exists clear it
  if (paperCore.project) {
    paperCore.project.clear();
  }

  if (!canvas || !headerComponent) return;
  paperCore.setup(canvas);
  let NUM_COLS = 80;
  // change number of columns on mobile
  if (isMobile) {
    NUM_COLS = 40;
  }
  // headerComponent.style.height = `${NUM_COLS / 1.5}rem`;
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  const FILL_COLORS = ['#00585c', '#008484', '#91c9c5', '#d3efed', '#cde200', '#e4ea7d', '#f9f9d7'];
  // get random int helper function
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
  //create the squares
  const createSquares = function (w, h, numCols) {
    let squares = [];
    // determine size of each square
    let space = w / numCols;
    for (let x = 0; x < w; x += space) {
      for (let y = 0; y < h; y += space) {
        // randomly select if this square will be added
        let seed = randomInt(0, 20);
        if (seed < 3) {
          // select a random color from the fill colors array
          let color = FILL_COLORS[randomInt(0, 7) - 1];
          const square = new Path.Rectangle({
            point: new Point(x, y),
            size: [space, space],
            applyMatrix: false,
          });
          square.fillColor = color;
          squares.push(square);
        }
      }
    }
    return squares;
  };
  const squarePaths = createSquares(w, h, NUM_COLS);
  if (reduceMotion) return;
  let start = 'top 6rem';
  if (isMobile) {
    start = 'top 4rem';
  }
  headerFadeTL = gsap.timeline({
    defaults: {
      duration: 0.2,
      ease: 'power2.out',
    },
  });
  headerFadeTL.fromTo(
    squarePaths,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      stagger: { each: 0.005, from: 'random' },
    },
    0
  );
  headerScrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: headerComponent,
      start: 'top 6rem',
      end: 'bottom 10rem',
      scrub: 0.5,
    },
    defaults: {
      duration: 1,
      ease: 'none',
    },
  });
  headerScrollTL.fromTo(
    squarePaths,
    {
      scaling: 1,
    },
    {
      scaling: 0.001,
      stagger: { each: 0.02, from: 'random' },
    },
    0
  );
  headerScrollTL.progress(progress);
};

export const process = function () {
  const processItems = document.querySelectorAll('[cr-process="item"]');
  const processImages = document.querySelectorAll('[cr-process="image"]');
  processItems.forEach((item, index) => {
    //guard clause
    if (!item) return;
    const image = processImages[index];
    const imageTL = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top center',
        end: 'bottom center',
        scrub: 0,
        onEnter: () => {
          image.classList.add(ACTIVE_CLASS);
        },
        onLeave: () => {
          // don't remove class on leave of the last item
          if (index !== processImages.length - 1) {
            image.classList.remove(ACTIVE_CLASS);
          }
        },
        onEnterBack: () => {
          image.classList.add(ACTIVE_CLASS);
        },
        onLeaveBack: () => {
          // don't remove class on leaveback of the last item
          if (index !== 0) {
            image.classList.remove(ACTIVE_CLASS);
          }
        },
      },
    });
    const itemSquare = item.querySelector('[cr-process="square"]');
    const itemContents = item.querySelectorAll('h2, h3, p, .button');
    const fadeTL = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        end: 'top 10%',
        scrub: 0.5,
      },
    });
    fadeTL.fromTo(
      itemContents,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
    fadeTL.from(
      itemSquare,
      {
        backgroundColor: '#f9f9d7',
      },
      '<'
    );
  });
};
// animation for icon section
export const iconHighlight = function (start = 'top 1%', end = 'bottom 99%') {
  const iconSection = document.querySelector('[cr-icon-highlight="section"]');
  const iconItems = document.querySelectorAll('[cr-icon-highlight="item"]');

  const iconTL = gsap.timeline({
    scrollTrigger: {
      trigger: iconSection,
      start: start,
      end: end,
      scrub: 0.5,
    },
    defaults: {
      duration: 0.5,
      ease: 'power1.out',
    },
  });
  iconItems.forEach((item, index) => {
    const itemIcon = item.querySelector('[cr-icon-highlight="icon"]');
    const itemText = item.querySelector('[cr-icon-highlight="span"]');
    if (!itemIcon) {
      return;
    }
    // unique tween for first item
    if (index === 0) {
      iconTL.set(
        itemIcon,
        {
          opacity: 0,
        },
        '<'
      );
      iconTL.set(itemIcon, {
        opacity: 1,
        delay: 1,
      });
    }
    // first tween for other items
    if (index !== 0) {
      iconTL.set(itemIcon, {
        opacity: 1,
      });
    }
    if (itemText) {
      iconTL.set(
        itemText,
        {
          fontWeight: 600,
        },
        '<'
      );
    }

    iconTL.set(itemIcon, {
      opacity: 0,
      delay: 1,
    });
    if (itemText) {
      iconTL.set(
        itemText,
        {
          fontWeight: 300,
        },
        '<'
      );
    }
    // unique last tween
    if (index === iconItems.length - 1) {
      iconTL.to(itemIcon, {
        delay: 0.5,
      });
    }
  });
};
// animation for data section with long image on the left
export const productData = function (start = 'top 1%', end = 'bottom 99%') {
  const items = document.querySelectorAll('[cr-produducts-data-item]');
  if (!items) return;

  items.forEach((item) => {
    const itemSquare = item.querySelector('[cr-produducts-data-square]');
    const itemContents = item.querySelectorAll('h2, h3, p, .button');

    // add a seperate timeline to fade in each item
    const fadeTL = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top bottom',
        end: 'top center',
        scrub: 0.5,
      },
      defaults: {
        ease: 'none',
        duration: 1,
      },
    });
    fadeTL.from(itemContents, {
      opacity: 0.1,
    });
    fadeTL.from(
      itemSquare,
      {
        backgroundColor: '#d3efed',
      },
      '<'
    );
  });
};

export const platform = function () {
  //tracking attributes
  const ANIMATION_ID = 'cr-platform';
  const PLATFORM_NUMBER = 'cr-platform-number';
  //elements
  const WRAP = '[cr-platform="wrap"]';
  const ITEM = '[cr-platform="item"]';
  const NAV_ITEM = '[cr-platform="nav-item"]';
  const NAV_BG = '[cr-platform="nav-bg"]';
  const components = gsap.utils.toArray(WRAP);
  if (components.length === 0) return;
  components.forEach((component) => {
    const items = component.querySelectorAll(ITEM);
    const navItems = component.querySelectorAll(NAV_ITEM);
    if (items.length === 0 || navItems.length === 0) return;
    items.forEach((item) => {
      const itemNumber = attr(0, item.getAttribute(PLATFORM_NUMBER));
      let matchingNavItem, matchingNavBg;
      //if the item number is not set return.
      if (itemNumber === 0) return;
      //get the matching nav item
      navItems.forEach((navItem) => {
        const navNumber = attr(0, navItem.getAttribute(PLATFORM_NUMBER));
        if (navNumber === itemNumber) {
          matchingNavItem = navItem;
          matchingNavBg = navItem.querySelector(NAV_BG);
        }
      });
      // if the matching nav item or background isn't found exit
      if (!matchingNavItem || !matchingNavBg) return;
      //scrolltrigger animation
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
        defaults: {
          duration: 1,
          ease: 'none',
        },
      });
      tl.fromTo(
        matchingNavBg,
        {
          width: '0%',
        },
        { width: '100%' }
      );
      tl.fromTo(
        matchingNavItem,
        {
          color: '#fff',
        },
        { color: '#000', duration: 0.5 },
        '<.25'
      );
    });
  });
};
