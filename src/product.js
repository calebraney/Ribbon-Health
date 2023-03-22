import { scrollLineAnimation } from './line.js';
import paperCore from 'paper';

window.Webflow ||= [];
window.Webflow.push(() => {
  //When Webflow is Loaded

  // Header Animation
  const headerAnimation = function (reduceMotion = false) {
    // get core variables
    const { Path, Point, Group, Color } = paperCore;
    const canvas = document.querySelector('#paper-canvas');
    const headerComponent = document.querySelector('#process-header');
    if (!canvas || !headerComponent) return;
    paperCore.setup(canvas);
    paperCore.project.clear();
    const NUM_COLS = 80;
    // headerComponent.style.height = `${NUM_COLS / 1.5}rem`;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const FILL_COLOR = '#cde200';
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
            const square = new Path.Rectangle({
              point: new Point(x, y),
              size: [space, space],
              applyMatrix: false,
            });
            square.fillColor = FILL_COLOR;
            squares.push(square);
          }
        }
      }
      return squares;
    };
    const squarePaths = createSquares(w, h, NUM_COLS);
    if (reduceMotion) return;
    const headerTL = gsap.timeline({
      scrollTrigger: {
        trigger: headerComponent,
        start: 'top 5rem',
        end: 'bottom 20%',
        scrub: 0.5,
      },
      defaults: {
        duration: 1,
        ease: 'power2.Out',
      },
    });
    headerTL.fromTo(
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
  };

  const processAnimation = function () {
    const processItems = document.querySelectorAll('[cr-process="item"]');
    const processImages = document.querySelectorAll('[cr-process="image"]');
    ACTIVE_CLASS = 'is-active';
    processItems.forEach((item, index) => {
      const image = processImages[index];
      console.log(image);
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
            console.log(index, processImages.length);
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
      const textTL = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'top center',
          scrub: 0.5,
        },
      });
      textTL.fromTo(
        item,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
    });
  };

  window.onresize = headerAnimation;
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

      headerAnimation(reduceMotion);
      if (!reduceMotion) {
        //Run if reduce motion is off
        lineSections.forEach((section) => {
          scrollLineAnimation(section, isMobile);
        });
      }
      if (isDesktop) {
        //Run on desktop
        processAnimation();
      }
    }
  );
});
