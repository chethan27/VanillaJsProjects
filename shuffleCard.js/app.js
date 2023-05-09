const cards = new Cards();

const generate = document.querySelector('#generate');
const reset = document.querySelector('#reset');

const container = document.querySelector('.container');

const renderCards = () => {
    if(cards.getCards().length === 0) {
          container.replaceChildren();
    } else {
        cards.getCards().map((ele) => {
            const div = document.createElement('div');
            const span = document.createElement('span');
            
            div.classList.add('card');
            span.classList.add('textStyle');
    
    
            div.appendChild(span);
            container.appendChild(div);
    
            span.innerText = ele;
        })
    }
}

generate.addEventListener('click' , () => {
    cards.generateCards()
    renderCards();
})

reset.addEventListener('click', () => {
    cards.resetCards();
    renderCards();
})