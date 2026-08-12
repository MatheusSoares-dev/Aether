gsap.registerPlugin(ScrollTrigger, SplitText);

gsap.registerPlugin(SplitText);
const elementos = document.querySelectorAll(".text-negrito, .text");

elementos.forEach((elemento) => {

  const meuSplit = new SplitText(elemento, { type: "chars" });

  meuSplit.chars.forEach((char) => {
    char.addEventListener("mouseenter", () => {
      gsap.to(char, {
        fontWeight: "800",
        scale: 1.1,
        duration: 0.2,
        overwrite: "auto"
      });
    });

    char.addEventListener("mouseleave", () => {
      gsap.to(char, {
        fontWeight: "300",
        scale: 1,
        duration: 0.2,
        overwrite: "auto"
      });
    });
  });
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    scrub: 1
  }

})

tl.to(".fone-l",{
  x: -400,
  y: 850,
  rotation: 15,
  duration: 1
})

tl.to(".fone-r",{
  x: 400,
  y: 850,
  rotation: -15,
  duration: 1
}, "<")