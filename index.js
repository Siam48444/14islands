// Lenis.
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
   lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

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
