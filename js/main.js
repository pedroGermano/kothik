$(document).ready(function () {
  let $scramble = $(".scramble");
  $scramble.scramble(3000, 20, "alphabet", true);
});

let tl = gsap.timeline();
tl.to(".loading", {
  opacity: 0,
  delay: 2.5,
})
  .to(".loader", {
    opacity: 0,
    duration: 1,
    ease: "Expo.easeInOut",
  })
  .to(".loader", {
    y: "-100%",
    duration: 1,
  });
