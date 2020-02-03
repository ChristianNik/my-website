const body = document.querySelector('.modal-open');
const modalButton = document.getElementById('modal-button');
const modalContainer = document.getElementById('modal-container');
const navigationElement = document.getElementById('nav');

document.addEventListener('DOMContentLoaded', event => {
  modalButton.addEventListener('click', event => {
    modalContainer.classList.add('fade-up');
    body.classList.remove('modal-open');
    setTimeout(() => {
      //modalContainer.style.display = 'none';
    }, 1000);
  });
});
