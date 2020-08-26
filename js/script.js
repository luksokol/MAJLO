// TOGGLE MENU
const links = document.querySelector('.links');
const toggle = document.querySelector('.toggle');
function toggleMenu() {
  if(links.classList.contains('active')) {
    links.classList.remove('active');
  } else {
    links.classList.add('active');
  }
}
toggle.addEventListener('click', toggleMenu, false);

// NAVBAR COLOR CHANGE
const navbar = document.querySelector('.navbar');
window.onscroll = function() {
  if(window.pageYOffset > 100) {
    navbar.classList.remove('top');
  } else {
    navbar.classList.add('top');
  }
}