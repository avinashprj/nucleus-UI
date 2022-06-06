const signinForm = document.querySelector('.form-signin');
const signupForm = document.querySelector('.form-signup');
const signinBtn = document.querySelector('#form-signin-link');
const signupBtn = document.querySelector('#form-signup-link');
signinBtn.addEventListener('click', () => {
  signinForm.classList.add('close');
  signupForm.classList.add('open');
});
signupBtn.addEventListener('click', () => {
  signinForm.classList.remove('close');
  signupForm.classList.remove('open');
});
