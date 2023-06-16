import { scrollLineAnimation } from './line.js';
import paperCore from 'paper';

// register gsap plugin
gsap.registerPlugin(ScrollTrigger);

// global variables for header animation tracking
let headerTL;
let progress = 0;

window.Webflow ||= [];
window.Webflow.push(() => {
  //When Webflow is Loaded

  // Header Animation
  const headerAnimation = function (reduceMotion = false, isMobile = false) {
    // get core variables
    const { Path, Point, Group, Color } = paperCore;
    const canvas = document.querySelector('#paper-canvas');
    const headerComponent = document.querySelector('#process-header');
    if (!canvas || !headerComponent) return;
    paperCore.setup(canvas);
    paperCore.project.clear();
    let NUM_COLS = 80;
    // change number of columns on mobile
    if (isMobile) {
      NUM_COLS = 40;
    }
    // headerComponent.style.height = `${NUM_COLS / 1.5}rem`;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const FILL_COLORS = [
      '#00585c',
      '#008484',
      '#91c9c5',
      '#d3efed',
      '#cde200',
      '#e4ea7d',
      '#f9f9d7',
    ];
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

  const processAnimation = function () {
    const processItems = document.querySelectorAll('[cr-process="item"]');
    const processImages = document.querySelectorAll('[cr-process="image"]');
    ACTIVE_CLASS = 'is-active';
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
          end: 'top top',
          scrub: 0.5,
        },
      });
      fadeTL.from(itemContents, {
        opacity: 0,
      });
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
  const iconHighlightAnimation = function (start = 'top 1%', end = 'bottom 99%') {
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
  const productDataAnimation = function (start = 'top 1%', end = 'bottom 99%') {
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

      headerAnimation(reduceMotion, isMobile);

      if (!reduceMotion) {
        //Run if reduce motion is off
        lineSections.forEach((section) => {
          scrollLineAnimation(section, isMobile);
        });
      }
      if (isDesktop) {
        //Run on desktop
        processAnimation();
        iconHighlightAnimation();
        productDataAnimation();
        // run headder animation on resize
        window.addEventListener('resize', function () {
          progress = headerTL.progress;
          headerTL.kill();
          headerAnimation(reduceMotion, isMobile);
        });
      }
      if (isMobile) {
        //Run on desktop
        iconHighlightAnimation('top 40%', 'bottom 40%');
      }
    }
  );
});
