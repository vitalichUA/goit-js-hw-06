

const inputFontSize = document.querySelector('#font-size-control');
const textChangeEl = document.querySelector('#text');

function changeInputValue(event) {
    return textChangeEl.style.fontSize = event.target.value + 'px'
}

inputFontSize.addEventListener('input', changeInputValue)