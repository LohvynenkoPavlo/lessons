document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.header__menu-list');

  burger.addEventListener('click', () => {

    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__menu-list--active');

    if (menu.classList.contains('header__menu-list--active')) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = ''; 
    }
  });
});
