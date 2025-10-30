gsap.to("#box1", {
  x: 1200,
  duration: 3,
  delay: 1,
  rotate: 360,
  backgroundColor: "lime",
  borderRadius: "50%",
  scale: 0.5,
});

gsap.from("#box2", {
  x: 1200,
  duration: 3,
  delay: 1,
  rotate: 360,
  backgroundColor: "lime",
  borderRadius: "50%",
  scale: 0.5,
});


gsap.from("h1",{
    opacity:0,
    y:30,
    duration:3,
    delay:1,
    stagger:0.3

});

gsap.to("#box",{
    x:1200,
    duration:1,
    delay:1,
    rotate:360,
    repeat:-1,
    yoyo:true
})

gsap.to("#box1",{
    x:1300,
    rotate:360,
    duration:1.5,
    delay:1
});

gsap.to("#box2",{
    x:1300,
    backgroundColor:"yellow",
    duration:1.5,
    delay:2.5
});

gsap.to("#box3",{
    x:1300,
    scale:0.5,
    borderRadius:"50%",
    duration:1.5,
    delay:4
});