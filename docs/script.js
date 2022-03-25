// This is JS code to make the navbar sticky
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 25){
        nav.classList.add("sticky");
        console.log("Activated");
    }
    else{
        nav.classList.remove("sticky");
        console.log("Unactivated");
    }
}