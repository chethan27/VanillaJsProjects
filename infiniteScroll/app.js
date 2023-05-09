const container = document.querySelector('.container');
const url = 'https://jsonplaceholder.typicode.com/todos';

let numTodos = 0;
let storeData; 

async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    storeData = await response.json();
    getCards();
}

// function getTodos() {
//     // return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.json())
//             .then(data => {
//               storeData = data
//               getCards();
//             })
//             .catch(error => reject(error));
//     // })
// }

// getTodos()
//   .then(users => {
//     // console.log(users);
//     storeData = users;
//     getCards();
//   })
//   .catch(error => {
//     console.error(error);
//   });

getTodos();

function getCards() {
    let i = numTodos; 
    numTodos = numTodos +10;
    while(i < numTodos && numTodos <= storeData.length) {
        const div = document.createElement('div');
        div.innerText = storeData[i].title;    
        div.classList.add('ele')
        container.appendChild(div);
        i++;
    }
}

// listen to scroll

window.addEventListener('scroll' , () => {
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        getCards();
    }
})

