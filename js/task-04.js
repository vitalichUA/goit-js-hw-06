

const incrementValueREf = document.querySelector('button[data-action="increment"]');
const decrementValueRef = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');

let counterValueText = 0;

incrementValueREf.addEventListener('click', event => {
    console.log("Клик по кнопке +1");
    counterValueText += 1
    counterValue.textContent = counterValueText;
});

decrementValueRef.addEventListener('click', event => {
     console.log("Клик по кнопке -1");
    counterValueText -= 1
    counterValue.textContent = counterValueText;
})