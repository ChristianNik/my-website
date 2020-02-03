const body = document.querySelector('.modal-open');
const modalButton = document.getElementById('modal-button');
const modalContainer = document.getElementById('modal-container');
const navigationElement = document.getElementById('nav');

document.addEventListener('DOMContentLoaded', event => {
  const navLinks = navigationElement.querySelectorAll('.navigation-link');
  console.log(navLinks);
  for (const nav of navLinks) {
    nav.addEventListener('click', event => {
      for (const nav of navLinks) {
        if (nav.classList.contains('active')) {
          nav.classList.remove('active');
        }
        event.target.classList.add('active');
      }
    });
  }
  modalButton.addEventListener('click', event => {
    modalContainer.classList.add('fade-up');
    body.classList.remove('modal-open');
    setTimeout(() => {
      //modalContainer.style.display = 'none';
    }, 1000);
  });
});
