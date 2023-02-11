const topContainer = document.querySelector('.topContainer');

let coloredDiv;

window.addEventListener('load', function() {
    
    for(let i = 0; i<3; i++) {
        const boxContainer = document.createElement('div');
        boxContainer.classList.add('boxContainer');
        topContainer.appendChild(boxContainer);
        for(let j = 0; j <3 ; j++) {
                const id = parseInt(Math.random() * 100);
                const DIV = document.createElement('div');
                DIV.classList.add('boxes');
                DIV.setAttribute("id", `box${id}`);
                DIV.setAttribute('onclick', 'divClick(event)')
                boxContainer.appendChild(DIV);
                
        }
    }
})

function divClick(e) {
    // console.log(e.target.id)
    if(coloredDiv && coloredDiv.style.backgroundColor !=='') {
        coloredDiv.style.backgroundColor = '';
    }
    let colorId = Math.floor(Math.random() * 1000000);
    const box = document.getElementById(`${e.target.id}`);
    box.style.backgroundColor = `#${colorId}`;
    coloredDiv = box;
}





