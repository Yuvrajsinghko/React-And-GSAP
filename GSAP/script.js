// gsap.to("#box1", {
//   x: 1200,
//   duration: 3,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "lime",
//   borderRadius: "50%",
//   scale: 0.5,
// });

// gsap.from("#box2", {
//   x: 1200,
//   duration: 3,
//   delay: 1,
//   rotate: 360,
//   backgroundColor: "lime",
//   borderRadius: "50%",
//   scale: 0.5,
// });

// gsap.from("h1",{
//     opacity:0,
//     y:30,
//     duration:3,
//     delay:1,
//     stagger:0.3

// });

// gsap.to("#box",{
//     x:1200,
//     duration:1,
//     delay:1,
//     rotate:360,
//     repeat:-1,
//     yoyo:true
// })

// let tl = gsap.timeline();
// tl.to("#box1", {
//   x: 1300,
//   duration: 1.5,
//   rotation: 360,
//   delay: 1,
// });

// tl.to("#box2", {
//   x: 1300,
//   duration: 1.5,
// });
// tl.to("#box3", {
//   x: 1300,
//   duration: 1.5,
// });

let tl = gsap.timeline();

tl.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
});

tl.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3
});

tl.from("h1",{
    y:20,
    opacity:0,
    duration:1

});

