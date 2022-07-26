function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector('.change-color');
const colorName = document.querySelector('.color');


colorButton.addEventListener('click', () => {
  colorName.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor()
})

