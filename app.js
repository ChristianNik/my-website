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
	const menuOpen = document.getElementById('btn__topbar__open');
	const menuClose = document.getElementById('btn__topbar__close');
	const topbar = document.getElementById('topbar');
	const navLinks = document.querySelectorAll('.nav__link');

	const showNavigation = () => {
		body.style.overflow = 'hidden';

		menuOpen.classList.remove('active');
		menuClose.classList.add('active');

		topbar.classList.add('tb--extended');
	};

	const hideNavigation = () => {
		body.style.overflow = '';

		menuOpen.classList.add('active');
		menuClose.classList.remove('active');

		topbar.classList.remove('tb--extended');
	};

	/*
  const changeActiveNavigation = aktiveLink => {
    navLinksDesktop.forEach(value => {
      value === aktiveLink
        ? value.classList.add('active')
        : value.classList.remove('active');
    });
  };
  */

	menuOpen.addEventListener('click', event => {
		showNavigation();
	});

	menuClose.addEventListener('click', event => {
		hideNavigation();
	});

	for (const navLink of navLinks) {
		navLink.addEventListener('click', event => {
			hideNavigation();
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
