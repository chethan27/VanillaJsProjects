const container = document.querySelector('.container');
const card = document.querySelector('.card');

let cardData;

async function fetchData() {
    try {
      const response = await fetch('https://791bfeeb-7714-4e88-9a11-e730288f2d6d.mock.pstmn.io/order');
      const data = await response.json();
      getCards(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
//   const myData = fetchData();
//   myData.then(data => cardData = data)
//   console.log(cardData);

window.addEventListener('onload', function(){
  fetchData();
})

function getCards(data) {
    
}

function createCard() {
  
}

