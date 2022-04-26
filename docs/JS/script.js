// This is JS code to make the navbar sticky
let nav = document.querySelector(".navbar");
let active = document.querySelector(".active");
if (($(window).width() > 600)){
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 25) {
            //add the sticky class to the navbar when you reach its scroll position
            nav.classList.add("sticky");
            // remove the active tabs as it does not match the sticky navbar
            active.classList.remove("active");
        }
        else {
            nav.classList.remove("sticky");
        }
    }
}
else{
    nav.classList.remove("sticky");
}

let logo = document.querySelector(".logo");
if(($(window).width() < 600)){
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 20) {
            logo.classList.add("hide");
        }
        else{
            logo.classList.remove("hide");
        }
    }
}
