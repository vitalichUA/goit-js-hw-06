
const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

function InputEvent () {
    if (inputRef.value === '') {
        return outputRef.textContent = "Anonymous"
     
    } return outputRef.textContent = inputRef.value
    
}


inputRef.addEventListener('input', InputEvent)