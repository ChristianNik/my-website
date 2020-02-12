'use strict';
const modalCloseButtons = document.querySelectorAll('.modal__close');
const navigationElement = document.getElementById('nav');

document.addEventListener('DOMContentLoaded', event => {
  //
  // Modal
  //
  if (modalCloseButtons) {
    for (const button of modalCloseButtons) {
      button.addEventListener('click', event => {
        button.parentElement.classList.add('fade-up');
        setTimeout(() => {
          button.parentElement.classList.remove('active');
        }, 1000);
      });
    }
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
  const projectImage = document.querySelectorAll('.item__image');

  if (projectImage) {
    for (const image of projectImage) {
      image.addEventListener('click', () => {
        alert('Diese Funktion ist noch nicht verfügbar.');
      });
    }
  }

  //
  // To Top Button
  //
  const toTopButton = document.getElementById('toTop');

  // When the user scrolls down 20px from the top of the document, show the button
  document.addEventListener('scroll', () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      toTopButton.style.display = 'block';
    } else {
      toTopButton.style.display = 'none';
    }
  });
});
