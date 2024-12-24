hamburger = document.getElementById("hamburger");
menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "350px";
        hamburger.style.color = "#CFBEAD"
    }
    else {
        menuList.style.maxHeight = "0px";
        hamburger.style.color = "#4E342E"
    }
}
window.addEventListener("scroll", function () {
    header = this.document.querySelector("header")
    header.classList.toggle("sticky", this.window.scrollY > 0)
    header.style.transition = "all 1s"
})

const backToTopButton = document.getElementById("backToTop");
const footer = document.getElementById("footer");

function updateButton() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const scrollPercent = (scrollTop / scrollHeight) * 100;

  if (scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }

  backToTopButton.style.borderImage = `
    conic-gradient(#A49083 ${scrollPercent}%, transparent ${scrollPercent}% 100%)
  `;
  backToTopButton.style.borderImageSlice = 1;
  
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
      backToTopButton.style.setProperty('border-color', '#4E342E');
      backToTopButton.style.setProperty('color', '#4E342E');
    } else {
      backToTopButton.style.setProperty('border-color', '#A49083');
      backToTopButton.style.setProperty('color', '#A49083');
    }
}

backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", updateButton);
