let count =0 ;

// const decrease = document.getElementsByClassName('decrease');
// const increase = document.querySelector('.increase');
// const reset = document.querySelector('.reset');

const span = document.getElementById("value")


// //returns a html collection list 
// decrease[0].addEventListener("click", function(e) {
//     count--;
//     span.textContent = count;
// })

// increase.addEventListener("click", function() {
//     count++;
//     span.textContent = count;
// })

// reset.addEventListener("click", function() {
//     count = 0;
//     span.textContent = count;
// })

// => further efficent code

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        debugger
        console.log(e)
        const value = e.currentTarget.classList; 
        if(value.contains('decrease')) {
            count--;
        } else if(value.contains('increase')) {
            count++;
        } else{
            count =0;
        }
        span.textContent = count;
    })
})