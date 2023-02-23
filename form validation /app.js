const name = document.querySelector('#fullname'); 
const email = document.querySelector('#email'); 
const mobile = document.querySelector('#mobile'); 
const password = document.querySelector('#password'); 
const form = document.querySelector('#form');

const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
    debugger
    let messages = [];
    if(name.value ==='') {
        messages.push('Enter a valid name');
    } else if(!email.value.includes('@', '.com' ) && !email.value.startsWith('s')) {
        messages.push("enter a valid email")
    } else if(mobile.value.length !== 10) {
        messages.push("enter a valid number")
    }  else if(password.value.length < 6 || password.value.length > 16) {
        messages.push('Enter a valid password');
    } 

    if(messages.length >0) {
        e.preventDefault();
        error.innerText = messages.join(' ');
    }
})

document.addEventListener('DOMContentLoaded', () => {
    name.value = '';
    email.value = '';
    mobile.value = '';
    form.value = '';
})
