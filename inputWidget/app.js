const ele = document.querySelector('.inpElement');
const button = document.querySelector('.numSubmit');
const numbers = document.querySelector('.numbers');

button.addEventListener('click', function() {
    let num = ele.value;
    if(numbers.innerHTML) {
        numbers.innerHTML = "";
    }
    if(!num) {
        alert("please enter a valid number and submit");
    } else if(num > 100 || num < 0) {
        alert("please enter a number between 0 to 100 and submit")
    } else {
        for (let i = num; i >=0 ; i--) {
            setTimeout(() => {
                numbers.innerHTML = i;
            }, 300 * (num -i));
        }
    }
})