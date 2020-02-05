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

  const body = document.getElementById('body');
  const menuOpen = document.getElementById('topbar__menu__open');
  const menuClose = document.getElementById('topbar__menu__close');
  const navigation = document.getElementById('navigaion');
  const topbar = document.getElementById('topbar');
  const navLinks = document.querySelectorAll('.navigaion__link');

  const showNavigation = () => {
    navigation.classList.add('active');
    topbar.style.opacity = 1;
    body.style.overflow = 'hidden';
  };
  const hideNavigation = () => {
    navigation.classList.remove('active');
    topbar.style.opacity = 0.85;
    body.style.overflow = '';
  };

  menuOpen.addEventListener('click', event => {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'flex';
    //show Navigation
    showNavigation();
  });

  menuClose.addEventListener('click', event => {
    menuOpen.style.display = 'flex';
    menuClose.style.display = 'none';
    //hide Navigation
    hideNavigation();
  });

  for (const link of navLinks) {
    link.addEventListener('click', event => {});
  }
});
