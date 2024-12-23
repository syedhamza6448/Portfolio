fadeUp = document.querySelector('.fadeUp');

window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const fadeRate = 1 - scrollValue / 200;
    const moveRate = scrollValue / 2;

    fadeUp.style.opacity = fadeRate < 0 ? 0 : fadeRate;
    fadeUp.style.transform = `translateY(-${moveRate}px)`;
});

function copyDiscord() {
    const discordTag = document.getElementById("discordTag").textContent;
    navigator.clipboard.writeText(discordTag)
      .then(() => {
        alert("Discord username copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }
   