import { scrollLines } from './utilities/line.js';
import { accordionAnimation } from './utilities/accordion.js';
import { homeHeader, homeSplitScroll, homeSplitScrollMobile } from './pages/home.js';
import { productHeader, productData } from './pages/product.js';
import { scrollTable } from './pages/use-cases.js';
import paperCore from 'paper';

//When Webflow is Loaded
window.Webflow ||= [];
window.Webflow.push(() => {
  // register gsap plugin
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip);
  let mm = gsap.matchMedia();
  //Select Elements
  const lineSections = document.querySelectorAll('[scroll-section]');
  // Global Tracking Variables
  let headerTL;
  let progress = 0;

  //activate animations
  const gsapInit = function () {
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (context) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = context.conditions;
        accordionAnimation();
        //Run if reduce motion is off
        if (!reduceMotion) {
          homeHeader();
          lineSections.forEach((section) => {
            scrollLines(section, isMobile);
          });
          scrollTable(isMobile);
        }
        //Run on desktop
        if (isDesktop) {
          homeSplitScroll();
          process();
          iconHighlight();
          productData();
          // run Product headder animation on resize
          window.addEventListener('resize', function () {
            progress = headerTL.progress;
            headerTL.kill();
            productHeader(reduceMotion, isMobile);
          });
        }
        // Run on Mobile
        if (isMobile) {
          homeSplitScrollMobile();
          iconHighlight('top 40%', 'bottom 40%');
        }
      }
    );
  };
  gsapInit();
});
