function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init();

var cur = document.querySelector(".cursor");
var main = document.querySelector(".main");
document.addEventListener("mousemove", function(dets){
    cur.style.left = dets.x + 20 + "px";
    cur.style.top = dets.y + 20 + "px";
})


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1 video", {
    width: "90%"
}, "anim")

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -127%",
        end: "top 130%",
        scrub: 3
    }
})

tl2.to(".main",{
    backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -280%",
        end: "top -300%",
        scrub: 3
    }
})

tl3.to(".main", {
    backgroundColor : "#0f0d0d"
})



var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1 h1",
        scroller: ".main",
        // markers:true,
        start: "top -200%",
        end: "top -400%",
        scrub: 3
    }
})

tl4.to(".page3-part1 img, .page3-part2 video", {
    width: "40%",
    x:100
})
tl4.to(".page3-part1 video", {
    width: "40%",
    x:-100
})




var boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem){

    elem.addEventListener("mouseenter", function(){
        // elem.style.backgroundColor = "red";
        var attr = elem.getAttribute("data-image");
        cur.style.width = "30%";
        cur.style.height = "50%";
        cur.style.borderRadius = "0px";
        cur.style.backgroundImage = `url(${attr})`;
    })
    
    elem.addEventListener("mouseleave", function(){
        elem.style.backgroundColor = "transparent";
        cur.style.width = "30px";
        cur.style.height = "30px";
        cur.style.borderRadius = "50%";
        cur.style.backgroundImage = `none`;
        // cur.style.backgroundColor = "white";
    })

})

var magnify = document.querySelector(".mag1");


    magnify.addEventListener("mouseenter", function(e){
        cur.style.width = "140px";
        cur.style.height = "140px";
        cur.style.borderRadius = "50%";
    })
    
    magnify.addEventListener("mouseleave", function(e){
        cur.style.width = "30px";
        cur.style.height = "30px";
        cur.style.borderRadius = "50%";
    })


var magnify1 = document.querySelector(".mag2");


    magnify1.addEventListener("mouseenter", function(e){
        cur.style.width = "140px";
        cur.style.height = "140px";
        cur.style.borderRadius = "50%";
    })
    
    magnify1.addEventListener("mouseleave", function(e){
        cur.style.width = "30px";
        cur.style.height = "30px";
        cur.style.borderRadius = "50%";
    })

function loadForm(){
    var h3 = document.querySelector(".footer .right h3");
    var right = document.querySelector(".footer .right");
    var frm = document.querySelector(".footer .right form");
    h3.style.display = "none";
    right.style.backgroundColor = "transparent";
    frm.style.opacity = "1";
    frm.style.marginTop = "-3rem";
}