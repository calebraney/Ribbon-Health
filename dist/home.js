(()=>{var S=function(s,a=!1){let u="top 90%",m="bottom 90%";s.hasAttribute("scroll-start")&&(u=s.getAttribute("scroll-start")),s.hasAttribute("scroll-end")&&(m=s.getAttribute("scroll-end"));let d=gsap.timeline({scrollTrigger:{trigger:s,start:u,end:m,scrub:.5},defaults:{duration:1,ease:"none"}});s.querySelectorAll(".plus_component").forEach(e=>{d.from(e,{scale:0},0)}),s.querySelectorAll(".line-fill").forEach(e=>{if(e.hasAttribute("scroll-false")||e.offsetParent===null)return;let t=!0;!a&&e.hasAttribute("scroll-desktop-v")&&(t=!1),a&&e.hasAttribute("scroll-mobile-v")&&(t=!1),d.from(e,{width:t?"0%":"100%",height:t?"100%":"0%"},0)})};window.Webflow||=[];window.Webflow.push(()=>{let s=function(r="top 5rem",l="bottom 10%"){let e=document.querySelector(".section_home-header"),t=document.querySelectorAll(".home-header_image.is-top"),o=gsap.timeline({scrollTrigger:{trigger:e,start:r,end:l,scrub:!0},defaults:{duration:1,ease:"none"}});t.forEach((i,n)=>{o.to(i,{opacity:1})})},a=function(r="top 65%",l="bottom 65%"){ACTIVE_CLASS="is-active";let e=document.querySelectorAll(".split-hover_item-text"),t=document.querySelectorAll(".split-hover_image");e.forEach((o,i)=>{let n=t[i],c=function(f=!1){f?(o.classList.add(ACTIVE_CLASS),n.classList.add(ACTIVE_CLASS)):(o.classList.remove(ACTIVE_CLASS),n.classList.remove(ACTIVE_CLASS))},A=gsap.timeline({scrollTrigger:{trigger:o,start:r,end:l,scrub:!0,onEnter:()=>{c(!0)},onLeave:()=>{i!==e.length-1&&c(!1)},onEnterBack:()=>{c(!0)},onLeaveBack:()=>{i!==0&&c(!1)}}})})},u=function(r="top 30%",l="bottom 90%"){ACTIVE_CLASS="is-active";let e=document.querySelector(".split-hover_component"),t=document.querySelectorAll(".split-hover_item-text"),o=document.querySelectorAll(".split-hover_image"),i=gsap.timeline({scrollTrigger:{trigger:e,start:r,end:l,scrub:!0},defaults:{duration:1,ease:"none"}});t.forEach((n,c)=>{let A=o[c];i.add(function(){t.forEach((f,h)=>{let p=o[h];f.classList.remove(ACTIVE_CLASS),p.classList.remove(ACTIVE_CLASS)}),A.classList.add(ACTIVE_CLASS),n.classList.add(ACTIVE_CLASS)},c)})},m=document.querySelectorAll("[scroll-section]");gsap.matchMedia().add({isMobile:"(max-width: 767px)",isDesktop:"(min-width: 768px)",reduceMotion:"(prefers-reduced-motion: reduce)"},r=>{let{isMobile:l,isDesktop:e,reduceMotion:t}=r.conditions;t||m.forEach(o=>{S(o,l)}),e&&(s(),a()),l&&u()})});})();
