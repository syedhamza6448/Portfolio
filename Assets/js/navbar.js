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
// Get the button
const backToTopButton = document.getElementById("backToTop");
const footer = document.getElementById("footer");

// Function to update button visibility and border progress
function updateButton() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calculate scroll percentage
  const scrollPercent = (scrollTop / scrollHeight) * 100;

  // Show or hide the button
  if (scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }

  // Update the border progress
  backToTopButton.style.borderImage = `
    conic-gradient(#A49083 ${scrollPercent}%, transparent ${scrollPercent}% 100%)
  `;
  backToTopButton.style.borderImageSlice = 1;
  
    const footerRect = footer.getBoundingClientRect();
    if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
      // If it's near the footer, change the button's color to #4E342E
      backToTopButton.style.setProperty('border-color', '#4E342E');
      backToTopButton.style.setProperty('color', '#4E342E');
    } else {
      // Else, set it back to original color
      backToTopButton.style.setProperty('border-color', '#A49083');
      backToTopButton.style.setProperty('color', '#A49083');
    }
}

// Smooth scroll to top on button click
backToTopButton.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling
  });
};


// Listen for scroll events
window.addEventListener("scroll", updateButton);
