// Validation for inputs

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event)=>{
    event.preventDefault();

    // Username validation
    if(username.value.trim() == ''){
        error(username, 'username cannot be empty');
    }
    else{
        success(username);
    }

    // Username validation
    if(password.value.trim() == ''){
        error(password, 'password cannot be empty');
    }
    else{
        success(password);
    }
});

function error(element, msg){
    element.style.border = '3px red solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p')
    p.textContent = msg;
    p.style.visibility = 'visible'
}
function success(element, msg){
    element.style.border = '3px green solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p')
    p.textContent = msg;
    p.style.visibility = 'hidden'
}