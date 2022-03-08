const closeModalBtn = document.querySelector('.modal-close');
const modalBtn = document.querySelector('#modal-btn');
function openModal(e) {
  e.preventDefault();
  const modalBg = document.querySelector('.modal-bg');
  const modal = document.querySelector('.modal');
  modalBg.classList.toggle('open');
  modal.classList.toggle('open');
}

function outsideClick(e) {
  if (e.target.classList.contains('modal-bg')) {
    openModal(e);
  }
}
modalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', openModal);
window.addEventListener('click', outsideClick);
