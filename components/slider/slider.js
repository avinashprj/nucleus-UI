const rangeInput = document.querySelector('.slider-range input[type="range"]');
function handleChange(e) {
  const sliderValue = document.querySelector('#slider-value');
  sliderValue.textContent = e.target.value;
}
rangeInput.addEventListener('input', handleChange);
