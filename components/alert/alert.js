// /* eslint-disable prettier/prettier */
const crossBtns = document.querySelectorAll('.icon-position');
crossBtns.forEach((btn) => btn.addEventListener('click', handleClick));

function handleClick(e) {
  const alertDiv = e.target.parentNode.parentElement;
  if (!alertDiv.classList.contains('alert')) return;
  alertDiv.style.opacity = '0';
  setTimeout(() => alertDiv.remove(), 300);
}
const ds = {};
