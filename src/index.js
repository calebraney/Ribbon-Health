import paperCore from 'paper';
import { scrollLines } from './interactions/line.js';
import { scrollIn } from './interactions/scrollIn.js';
import { accordionAnimation } from './interactions/accordion.js';
import { countUp } from './interactions/count.js';
import { hoverActive } from './interactions/hoverActive.js';
import { tabsAnimation } from './interactions/tabs.js';
import { riveTabs } from './interactions/riveTabs.js';
import { homeHeader, homeSplitScroll, homeSplitScrollMobile } from './pages/home.js';
import { productHeader, process, iconHighlight, productData, platform } from './pages/product.js';
import { scrollTable } from './pages/use-cases.js';

//constants
export const ACTIVE_CLASS = 'is-active';

// global variables
export let headerTL;
export let progress = 0;

document.addEventListener('DOMContentLoaded', function (e) {
  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (gsap.Flip !== undefined) {
    gsap.registerPlugin(Flip);
  }

  //Select Elements
  const lineSections = document.querySelectorAll('[scroll-section]');

  //run media query
  let mm = gsap.matchMedia();
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
        scrollIn();
        tabsAnimation();
        // riveTabs();
        countUp();
        hoverActive();
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
