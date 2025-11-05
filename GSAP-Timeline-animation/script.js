let menu = document.querySelector("#nav i");
let cross = document.querySelector("#full i");
let vl = gsap.timeline();

vl.to("#full", {
  right: 0,
  duration: 0.6,
});

vl.from("#full h4", {
  x: 150,
  duration: 0.7,
  stagger: 0.3,
  opacity: 0,
});

vl.from("#full i", {
  opacity: 0,
});
vl.pause()

menu.addEventListener("click",function(){
    vl.play();
});
cross.addEventListener("click",function(){
    vl.reverse()
});