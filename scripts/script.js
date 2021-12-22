let burgerMenu = document.querySelector('.burger-menu');
let navBar = document.querySelector('.navbar');
let burgerMenuBars = document.querySelectorAll('.bar');
let burgerBool = false;

// display navbar
burgerMenu.addEventListener('click', function () {
    if (!burgerBool) {
        if (window.innerWidth <= 766) {
            navBar.style.top = '70px';
        } else {
            navBar.style.top = '103px';
        }
        
        burgerBool = true;
        activeBurgerBar();
    } else {
        navBar.style.top = '-278px';
        burgerBool = false;
        inActiveBurgerBar();
    }
})

// change burger bar bg colour to active colour
function activeBurgerBar() {
for (let i = 0; i <= burgerMenuBars.length; i++) {
            burgerMenuBars[i].style.background = '#7ec4bd';
        }
}

// change burger bar bg colour to default colour
function inActiveBurgerBar() {
for (let i = 0; i <= burgerMenuBars.length; i++) {
            burgerMenuBars[i].style.background = 'black';
        }
}

// Carousel

let next = document.getElementById('left-chevron');
let prev = document.getElementById('right-chevron');
let slides = document.getElementsByClassName("slideshow-item");

const totalImages = 4;
let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
    if (direction == 'next') {
    index++;
        if (index == totalImages) {   
      index = 0;
    }
    } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }
  slides[index].classList.add('active');
}
