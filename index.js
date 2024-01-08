// Lenis.
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
   lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// splitting js.
Splitting();

// gsap timeline.
var tl = gsap.timeline();

// nav scroll position change.
var oldY = window.scrollY;

window.addEventListener("scroll", () => {
   if (oldY < window.scrollY) {
      gsap.to("nav", { y: "-100%", duration: 0.5, ease: "Power5.easeInOut" });
   } else {
      gsap.to("nav", { y: 0, duration: 0.5, ease: "Power5.easeInOut" });
   }
   oldY = window.scrollY;
});

// page load animation.
tl.from("nav > *", {
   opacity: 0,
   duration: 0.8,
   stagger: 0.2,
   ease: "Power5.easeInOut",
});
tl.from(".main_bottom_content .char", {
   opacity: 0,
   duration: 1,
   stagger: 0.05,
   ease: "Power5.easeInOut",
});
tl.from(".main_top_content", {
   opacity: 0,
   duration: 0.8,
   ease: "Power5.easeInOut",
});

// loaded after the hero section.
tl.from("#area2, #area3, #area4, #area5, #area6, footer", {
   display: "none",
   opacity: 0,
   duration: 0.5,
   ease: "Power5.easeInOut",
});

// area2 scale in animation.
gsap.from("#area2", {
   scale: 0.5,
   scrollTrigger: {
      scrub: 1,
      trigger: "#area2",
      end: "top 70%",
   },
});

gsap.from("footer", {
   opacity: 0,
   x: "5%",
   duration: 1,
   scrollTrigger: {
      trigger: "footer",
   },
});
