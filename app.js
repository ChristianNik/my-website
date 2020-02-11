'use strict';
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
  const navLinksMobile = document.querySelectorAll('.navigaion__link');
  const navLinksDesktop = document.querySelectorAll('.topbar__link');

  const showNavigation = () => {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'flex';

    navigation.classList.remove('slideOutUp');
    navigation.classList.add('slideInDown');

    topbar.style.opacity = 1;
    body.style.overflow = 'hidden';
  };
  const hideNavigation = () => {
    menuOpen.style.display = 'flex';
    menuClose.style.display = 'none';

    navigation.classList.remove('slideInDown');
    navigation.classList.add('slideOutUp');

    topbar.style.opacity = 0.85;
    body.style.overflow = '';
  };

  const changeActive = aktiveLink => {
    navLinksDesktop.forEach(value => {
      value === aktiveLink
        ? value.classList.add('active')
        : value.classList.remove('active');
    });
  };

  menuOpen.addEventListener('click', event => {
    showNavigation();
  });

  menuClose.addEventListener('click', event => {
    hideNavigation();
  });

  for (const link of navLinksMobile) {
    link.addEventListener('click', event => {
      hideNavigation();
    });
  }

  for (const link of navLinksDesktop) {
    link.addEventListener('click', event => {
      changeActive(event.target);
    });
  }

  //
  // Image click
  //
  const projectImage = document.getElementById('project__image');
  projectImage.addEventListener('click', () => {
    alert('Diese Funktion ist noch nicht verfügbar.');
  });
});
