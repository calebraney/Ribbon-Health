(()=>{var a=function(t,r=!1){let l="top 90%",o="bottom 90%";t.hasAttribute("scroll-start")&&(l=t.getAttribute("scroll-start")),t.hasAttribute("scroll-end")&&(o=t.getAttribute("scroll-end"));let i=gsap.timeline({scrollTrigger:{trigger:t,start:l,end:o,scrub:.5},defaults:{duration:1,ease:"none"}});t.querySelectorAll(".plus_component").forEach(e=>{i.from(e,{scale:0},0)}),t.querySelectorAll(".line-fill").forEach(e=>{if(e.hasAttribute("scroll-false")||e.offsetParent===null)return;let s=!0;!r&&e.hasAttribute("scroll-desktop-v")&&(s=!1),r&&e.hasAttribute("scroll-mobile-v")&&(s=!1),i.from(e,{width:s?"0%":"100%",height:s?"100%":"0%"},0)})};gsap.registerPlugin(ScrollTrigger);window.Webflow||=[];window.Webflow.push(()=>{let t=document.querySelectorAll("[scroll-section]");gsap.matchMedia().add({isMobile:"(max-width: 767px)",isDesktop:"(min-width: 768px)",reduceMotion:"(prefers-reduced-motion: reduce)"},l=>{let{isMobile:o,isDesktop:i,reduceMotion:n}=l.conditions;n||t.forEach(c=>{a(c,o)})})});})();
