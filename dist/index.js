"use strict";
(() => {
  // src/index.js
  var scrollSections = document.querySelectorAll('[scroll="section"]');
  var scrollLineAnimation = function(trigger, mobile = false) {
    let scrollStart = "top 90%";
    let scrollEnd = "bottom 90%";
    if (trigger.hasAttribute("scroll-start")) {
      scrollStart = trigger.getAttribute("scroll-start");
    }
    if (trigger.hasAttribute("scroll-end")) {
      scrollEnd = trigger.getAttribute("scroll-end");
    }
    const lineTL = gsap.timeline({
      scrollTrigger: {
        trigger,
        start: scrollStart,
        end: scrollEnd,
        scrub: 0.5
      },
      defaults: {
        duration: 1,
        ease: "none"
      }
    });
    const plusElements = trigger.querySelectorAll(".plus_component");
    plusElements.forEach((plus) => {
      lineTL.from(
        plus,
        {
          scale: 0
        },
        0
      );
    });
    const lines = trigger.querySelectorAll(".line-fill");
    lines.forEach((line) => {
      if (line.getAttribute("scroll") === "false" || line.offsetParent === null) {
        return;
      }
      let horizontal = true;
      if (!mobile && line.hasAttribute("scroll-desktop-v")) {
        horizontal = false;
      }
      if (mobile && line.hasAttribute("scroll-mobile-v")) {
        horizontal = false;
      }
      lineTL.from(
        line,
        {
          width: horizontal ? "0%" : "100%",
          height: horizontal ? "100%" : "0%"
        },
        0
      );
    });
  };
  var mm = gsap.matchMedia();
  mm.add(
    {
      isMobile: "(max-width: 767px)",
      isDesktop: "(min-width: 768px)",
      reduceMotion: "(prefers-reduced-motion: reduce)"
    },
    (context) => {
      let { isMobile, isDesktop, reduceMotion } = context.conditions;
      if (!reduceMotion) {
        scrollSections.forEach((section) => {
          scrollLineAnimation(section, isMobile);
        });
      }
    }
  );
})();
