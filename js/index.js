/* eslint-disable no-console */
import VanillaTilt from './vanilla-tilt.js';

window.addEventListener('DOMContentLoaded', () => {
  const heroImg = document.querySelector('.hero-images');

  VanillaTilt.init(heroImg, {
    max: 40,
    speed: 100,
  });
});
