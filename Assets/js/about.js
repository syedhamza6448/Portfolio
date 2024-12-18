document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtns = document.querySelectorAll(".read-more-btn");

    readMoreBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const moreText = btn.previousElementSibling; // Target the hidden text
            if (moreText.style.display === "none" || moreText.style.display === "") {
                moreText.style.display = "inline";
                btn.textContent = "Read Less";
            } else {
                moreText.style.display = "none";
                btn.textContent = "Read More";
            }
        });
    });
});

fadeRight = document.querySelector('.fadeRight');

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  const fadeRate = 1 - scrollValue / 200;
  fadeRight.style.opacity = fadeRate < 0 ? 0 : fadeRate;
  fadeRight.style.transform = `translateX(${scrollValue}px)`;
});

fadeLeft = document.querySelector('.fadeLeft');

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  const fadeRate = 1 - scrollValue / 200;
  const moveRate = scrollValue / 2;

  fadeLeft.style.opacity = fadeRate < 0 ? 0 : fadeRate;
  fadeLeft.style.transform = `translateX(-${moveRate}px)`;
});

document.querySelectorAll('.sub-service .main').forEach((mainDiv) => {
    mainDiv.addEventListener('click', () => {
        const description = mainDiv.nextElementSibling;
        description.classList.toggle('active');
        
        // Toggle the plus/minus icon
        const icon = mainDiv.querySelector('i');
        if (description.classList.contains('active')) {
            icon.classList.replace('fa-plus', 'fa-minus');
        } else {
            icon.classList.replace('fa-minus', 'fa-plus');
        }
    });
});

