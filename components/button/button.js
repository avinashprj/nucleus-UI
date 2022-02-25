const mainBtn = document.querySelector('#main-btn');
mainBtn.addEventListener('click', () => {
  const btnContainer = document.querySelector('#floating-btn-container');
  btnContainer.classList.toggle('show');
});
