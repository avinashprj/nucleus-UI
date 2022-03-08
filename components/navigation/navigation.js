const btnHamburger = document.querySelector('#btnHamburger');
const searchIcon = document.querySelector('#search');
const searchClose = document.querySelector('#search-close');
const searchBarModal = document.querySelector('.search-bar-modal');
const searchBar = document.querySelector('.search-bar');
const sidebarModal = document.querySelector('.sidebar-modal');
const sidebar = document.querySelector('.sidebar');
// note: For toggling the search bar
function toggleSearchModal() {
  searchBarModal.classList.toggle('open');
  searchBar.classList.toggle('open');
}

// note: For toggling the side bar
function toggleSideBarModal() {
  btnHamburger.classList.toggle('open');
  sidebarModal.classList.toggle('open');
  sidebar.classList.toggle('open');
}

function OutsideClick(e) {
  if (e.target.classList.contains('sidebar-modal')) {
    btnHamburger.classList.toggle('open');
    sidebarModal.classList.toggle('open');
    sidebar.classList.toggle('open');
  } else if (e.target.classList.contains('search-bar-modal')) {
    searchBarModal.classList.toggle('open');
    searchBar.classList.toggle('open');
  }
}
btnHamburger.addEventListener('click', toggleSideBarModal);
searchIcon.addEventListener('click', toggleSearchModal);
searchClose.addEventListener('click', toggleSearchModal);
window.addEventListener('click', OutsideClick);
