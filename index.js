const heroBtn = document.querySelector('.hero-button');
const burgerBtn = document.querySelector('.burger-btn');
const modalWindow = document.querySelector('.backdrop');
const mobileNav = document.querySelector('.mobile-menu');

heroBtn.addEventListener('click', () => toggleModal(modalWindow));
burgerBtn.addEventListener('click', () => toggleModal(mobileNav));
modalWindow.addEventListener('click', handleModalButtonClick);
mobileNav.addEventListener('click', handleModalButtonClick);

function toggleModal(element) {
  element.classList.toggle('is-open');
}

function handleModalButtonClick(e) {
  const target = e.target.closest('.modal-btn');
  if (!target) return;

  const modal = e.currentTarget;
  toggleModal(modal);
}
