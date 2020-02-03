const body = document.querySelector('.modal-open');
const modalButton = document.getElementById('modal-button');
const modalContainer = document.getElementById('modal-container');
const navigationElement = document.getElementById('nav');

document.addEventListener('DOMContentLoaded', event => {
  /*
  modalButton.addEventListener('click', event => {
    modalContainer.classList.add('fade-up');
    body.classList.remove('modal-open');
    setTimeout(() => {
      //modalContainer.style.display = 'none';
    }, 1000);
  });
*/
  const topbarMenu = document.getElementById('topbar-menu');
  const topnavMenu = document.getElementById('topnav-menu');
  const topnavClose = document.getElementById('topnav-close');

  topbarMenu.addEventListener('click', event => {
    //topnavMenu.style.display = 'block';
    topnavMenu.classList.add('fade-down');
  });

  topnavClose.addEventListener('click', event => {
    //topnavMenu.style.display = 'none';
    topnavMenu.classList.remove('fade-down');
  });
});
