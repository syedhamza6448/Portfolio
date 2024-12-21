fadeDown = document.querySelector('.fadeDown');

window.addEventListener('scroll', () => {
  const scrollValue = window.scrollY;
  const fadeRate = 1 - scrollValue / 200;
  const moveRate = scrollValue / 2;

  fadeDown.style.opacity = fadeRate < 0 ? 0 : fadeRate;
  fadeDown.style.transform = `translateY(${moveRate}px)`;
});