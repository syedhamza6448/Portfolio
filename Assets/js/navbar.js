hamburger = document.getElementById("hamburger");
menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "350px";
        hamburger.style.color = "#F5F6FA"
    }
    else {
        menuList.style.maxHeight = "0px";
        hamburger.style.color = "#34495E"
    }
}
 window.addEventListener("scroll", function() {
    header = this.document.querySelector("header")
    header.classList.toggle("sticky", this.window.scrollY > 0)
    header.style.transition = "all 1s"
 })