import paperCore from 'paper';
import { scrollLines } from './utilities/line.js';
import { accordionAnimation } from './utilities/accordion.js';
import { countUp } from './utilities/count.js';
import { homeHeader, homeSplitScroll, homeSplitScrollMobile } from './pages/home.js';
import { productHeader, process, iconHighlight, productData, platform } from './pages/product.js';
import { scrollTable } from './pages/use-cases.js';

//constants
export const ACTIVE_CLASS = 'is-active';

// global variables
export let headerTL;
export let progress = 0;

document.addEventListener('DOMContentLoaded', function (e) {
  // register gsap plugin
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(Flip);
  let mm = gsap.matchMedia();
  //Select Elements
  const lineSections = document.querySelectorAll('[scroll-section]');
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
        countUp();
        productHeader(reduceMotion, isMobile);
        //Run if reduce motion is off
        if (!reduceMotion) {
          homeHeader();
          lineSections.forEach((section) => {
            scrollLines(section, isMobile);
          });
          scrollTable(isMobile);
        }
        //Run on desktop
        if (isDesktop || isTablet) {
          homeSplitScroll();
          process();
          iconHighlight();
          productData();
          platform();
          // run Product headder animation on resize
          window.addEventListener('resize', function () {
            if (headerTL) {
              progress = headerTL.progress;
              headerTL.kill();
              productHeader(reduceMotion, isMobile);
            }
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
