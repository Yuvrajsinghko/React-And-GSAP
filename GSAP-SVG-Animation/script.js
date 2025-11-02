let initialPath = `M 10 100 Q 450 100 890 100`;

let finalPath = `M 10 100 Q 450 100 890 100`;


let string = document.querySelector("#string");

string.addEventListener("mousemove",function(event){
    initialPath = `M 10 100 Q ${event.x} ${event.y} 890 100`

    gsap.to("svg path",{
        attr:{d:initialPath},
        duration:0.2,
        ease:"power3.out"

    });

});

string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1.2,0.1)"
    });
});



