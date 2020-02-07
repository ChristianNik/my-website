const modalButton = document.getElementById('modal__button');
const modalContainer = document.getElementById('modal-container');
const navigationElement = document.getElementById('nav');

document.addEventListener('DOMContentLoaded', event => {
  if (modalButton) {
    modalButton.addEventListener('click', event => {
      modalContainer.classList.add('fade-up');
      setTimeout(() => {
        //modalContainer.style.display = 'none';
      }, 1000);
    });
  }

  //
  // Navigation
  //
  const body = document.getElementById('body');
  const menuOpen = document.getElementById('topbar__menu__open');
  const menuClose = document.getElementById('topbar__menu__close');
  const navigation = document.getElementById('navigaion');
  const topbar = document.getElementById('topbar');
  const navLinks = document.querySelectorAll('.navigaion__link');

  const showNavigation = () => {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'flex';
    navigation.classList.add('active');
    topbar.style.opacity = 1;
    body.style.overflow = 'hidden';
  };
  const hideNavigation = () => {
    menuOpen.style.display = 'flex';
    menuClose.style.display = 'none';
    navigation.classList.remove('active');
    topbar.style.opacity = 0.85;
    body.style.overflow = '';
  };

  menuOpen.addEventListener('click', event => {
    showNavigation();
  });

  menuClose.addEventListener('click', event => {
    hideNavigation();
  });

  for (const link of navLinks) {
    link.addEventListener('click', event => {
      hideNavigation();
    });
  }
});
