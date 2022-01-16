
const loginFormRef = document.querySelector('.login-form');


function inputLoginForm(event) {
    event.preventDefault()


    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
        alert('Не все поля заполнены')
    };

    const formValue = { email, password };
    console.log(formValue);
    loginFormRef.reset()
};

loginFormRef.addEventListener('submit',inputLoginForm )