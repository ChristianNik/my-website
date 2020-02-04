const body = document.querySelector('.modal-open');
const modalButton = document.getElementById('modal__button');
const modalContainer = document.getElementById('modal-container');
const navigationElement = document.getElementById('nav');

document.addEventListener('DOMContentLoaded', event => {
  console.log(modalButton);

  modalButton.addEventListener('click', event => {
    modalContainer.classList.add('fade-up');
    body.classList.remove('modal-open');
    setTimeout(() => {
      //modalContainer.style.display = 'none';
    }, 1000);
  });

  const menuOpen = document.getElementById('topbar__menu__open');
  const menuClose = document.getElementById('topbar__menu__close');
  const navigation = document.getElementById('navigaion');
  const topbar = document.getElementById('topbar');

  menuOpen.addEventListener('click', event => {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'flex';
    //show Navigation
    navigation.classList.add('active');
    topbar.style.opacity = 1;
  });

  menuClose.addEventListener('click', event => {
    menuOpen.style.display = 'flex';
    menuClose.style.display = 'none';
    //hide Navigation
    navigation.classList.remove('active');
    topbar.style.opacity = 0.85;
  });
});
