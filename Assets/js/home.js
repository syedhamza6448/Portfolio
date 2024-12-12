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

  fadeUp = document.querySelector('.fadeUp');

  window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const fadeRate = 1 - scrollValue / 200;
    const moveRate = scrollValue / 2;
    
    fadeUp.style.opacity = fadeRate < 0 ? 0 : fadeRate;
    fadeUp.style.transform = `translateY(-${moveRate}px)`; 
  });

  fadeDown = document.querySelector('.fadeDown');

  window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    const fadeRate = 1 - scrollValue / 200;
    const moveRate = scrollValue / 2;
    
    fadeDown.style.opacity = fadeRate < 0 ? 0 : fadeRate;
    fadeDown.style.transform = `translateY(${moveRate}px)`; 
  });