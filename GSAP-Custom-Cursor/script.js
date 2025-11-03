let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageDiv = document.querySelector("#image");
main.addEventListener("mousemove",function(event){
    gsap.to(cursor,{
        x:event.x,
        y:event.y,
        duration:1,
        
    });
});

imageDiv.addEventListener("mouseenter",function(){
    cursor.innerHTML = "View More"
    gsap.to(cursor,{
        scale:4,
        backgroundColor:"#ffffff8a"
    });
});

imageDiv.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#fff"
    });
});

