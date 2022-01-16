

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBtnColor = document.querySelector('.change-color');
const randomColor = document.querySelector('.color');

function clickBtn() {
  randomColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
}

changeBtnColor.addEventListener('click', clickBtn)