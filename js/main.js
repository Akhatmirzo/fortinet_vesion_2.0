// ! Navbar Hamburger Menu
const hamburger = document.querySelector('.hamburgerBtn');
const navbarItem = document.querySelector('.navbarItem');

hamburger.addEventListener('click', () => {
  navbarItem.classList.toggle('navbarActive');

  if (navbarItem.classList.contains('navbarActive')) {
    hamburger.classList.add('hamburAnimated');
  } else {
    hamburger.classList.remove('hamburAnimated');
  }
});