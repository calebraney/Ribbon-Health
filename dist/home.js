(()=>{var f=function(o,r=!1){let n="top 90%",a="bottom 90%";o.hasAttribute("scroll-start")&&(n=o.getAttribute("scroll-start")),o.hasAttribute("scroll-end")&&(a=o.getAttribute("scroll-end"));let l=gsap.timeline({scrollTrigger:{trigger:o,start:n,end:a,scrub:.5},defaults:{duration:1,ease:"none"}});o.querySelectorAll(".plus_component").forEach(e=>{l.from(e,{scale:0},0)}),o.querySelectorAll(".line-fill").forEach(e=>{if(e.hasAttribute("scroll-false")||e.offsetParent===null)return;let t=!0;!r&&e.hasAttribute("scroll-desktop-v")&&(t=!1),r&&e.hasAttribute("scroll-mobile-v")&&(t=!1),l.from(e,{width:t?"0%":"100%",height:t?"100%":"0%"},0)})};gsap.registerPlugin(ScrollTrigger);gsap.registerPlugin(Flip);var h="is-active";window.Webflow||=[];window.Webflow.push(()=>{let o=function(l="top 5rem",s="bottom 10%"){let i=document.querySelector(".section_home-header"),e=document.querySelectorAll(".home-header_image.is-top"),t=gsap.timeline({repeat:-1,defaults:{duration:.6,ease:"power1.out"}});e.forEach((u,d)=>{t.to(u,{opacity:1})})},r=function(l="top 60%",s="bottom 70%"){let i=document.querySelector(".split-hover_component"),e=document.querySelectorAll(".split-hover_item"),t=document.querySelectorAll(".split-hover_image");if(!i||e.length===0||t.length===0)return;let u=function(m,p,g){g.forEach((c,A)=>{let v=Flip.getState(c);c===m?c.classList.add(h):c.classList.remove(h),Flip.from(v,{duration:.3,ease:"power1.out"})})},d=gsap.timeline({scrollTrigger:{trigger:i,start:l,end:s,scrub:!0},defaults:{duration:.5,delay:1,ease:"none"}});e.forEach((m,p)=>{currentImage=t[p],d.to(currentImage,{opacity:1}),d.call(u,[m,p,e],"<")})},n=document.querySelectorAll("[scroll-section]");gsap.matchMedia().add({isMobile:"(max-width: 767px)",isDesktop:"(min-width: 768px)",reduceMotion:"(prefers-reduced-motion: reduce)"},l=>{let{isMobile:s,isDesktop:i,reduceMotion:e}=l.conditions;e||n.forEach(t=>{f(t,s)}),i&&(o(),r()),s&&$(".split-hover_item").on("click",function(){let t=$(this).index();$(".split-hover_item").removeClass("is-active"),$(".split-hover_image").removeClass("is-active"),$(this).addClass("is-active"),$(".split-hover_image").eq(t).addClass("is-active")})})});})();
