const heroBtn = document.querySelector('.hero-button');
const burgerBtn = document.querySelector('.burger-btn');
const modalWindow = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-menu');

heroBtn.addEventListener('click', () => toggleModal(modalWindow));
burgerBtn.addEventListener('click', () => toggleModal(mobileNav));
modalWindow.addEventListener('click', handleClick);
mobileNav.addEventListener('click', handleClick);

function toggleModal(element) {
  element.classList.toggle('is-open');
  document.documentElement.classList.toggle('scroll-disabled');
}

function handleClick(e) {
  if (e.target.closest('.modal-btn') || e.target.closest('.mobile-menu-link')) {
    toggleModal(e.currentTarget);
  } else if (e.currentTarget === modalWindow && e.target === modalWindow) {
    toggleModal(modalWindow);
  }
}
