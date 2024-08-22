var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease:"back.out",
        duration:1
    })
})
image.addEventListener("mouseenter",function(){
    cursor.innerHTML="View more"
    gsap.to(cursor,{
        scale:3,
        backgroundColor:"#00ffff5d"
    })
})
image.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor:"#00ffff"
    })
})