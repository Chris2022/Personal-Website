// This is JS code to make the navbar sticky
let nav = document.querySelector(".navbar");
if (($(window).width() > 600)){
    console.log($(window).width());
    console.log("hello");
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 25) {
            nav.classList.add("sticky");
            console.log("Activated");
        }
        else {
            nav.classList.remove("sticky");
            console.log("Unactivated");
        }
    }
}
else{
    nav.classList.remove("sticky");
    console.log("Sticky removed");
}
