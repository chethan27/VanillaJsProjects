// 
let storeData;
let tagsData = new Set();

const search = document.querySelector("#search");
const container = document.querySelector('.container');
const sort = document.querySelector('#sort');
const filter = document.querySelector("#filter");

function getDataFromApi() {
    fetch('https://791bfeeb-7714-4e88-9a11-e730288f2d6d.mock.pstmn.io/order')
    .then(response => response.json())
    .then(data => {
        // implement a class for storeData
        storeData = data;
        filterTags(storeData)
        renderCards(storeData);
    }).catch((err) => {
        console.log(err);
    })
}

function filterTags(data) {
    tagsData.add('All');
    // always use forEach if not returning data
    data.forEach(x => {
        // x.tags.forEach(y => {   
        //     tagsData.add(y);
        // }) 
        tagsData.add(...x.tags);
    })
    tagsData.forEach(data => {
        const option = document.createElement('option');
        option.value = data;
        option.innerText = data;
        filter.appendChild(option);
    })
    console.log(tagsData)
}

// class for getCards 
function getCard(cardData) {

    const div = document.createElement("div");
    div.setAttribute("id", "card");

    // write modular 
    const spanName = document.createElement("span");
    spanName.setAttribute("id", "name")
    spanName.setAttribute("class", "cardEle")
    spanName.innerText = cardData.name;

    const spanETA = document.createElement("span");
    spanETA.setAttribute("id", "eta")
    spanName.setAttribute("class", "cardEle")
    spanETA.innerText = cardData.eta;

    const spanRating = document.createElement("span");
    spanRating.setAttribute("id", "rating")
    spanName.setAttribute("class", "cardEle")
    spanRating.innerText = cardData.rating;

    const favourite = document.createElement("span");
    favourite.setAttribute("id", "favourite")
    favourite.setAttribute("class", "cardEle")
    favourite.innerText = "fav";

    const image = document.createElement("img");
    image.setAttribute("id", "image")
    spanName.setAttribute("class", "cardEle")
    image.setAttribute("src" , cardData.img);

    container.appendChild(div);
    div.appendChild(spanName);
    div.appendChild(spanETA);
    div.appendChild(spanRating);
    div.appendChild(image);

}

function renderCards(storeData) {
    console.log(storeData);
    for(let i =0; i< storeData.length; i++) {
        getCard(storeData[i]);
    }
}

function searchResult() {
    const filteredData = storeData.filter(data => {
        return data.name.toLowerCase().startsWith(search.value);
    })
    container.replaceChildren()
    renderCards(filteredData);
}

function sortFuncByEta(a,b) {
    return a.eta -b.eta;
}

function sortFuncByRating(a,b) {
    return a.rating -b.rating;
}

function sortData() {
    // create new function 
    const sortedData = storeData.sort(sortFuncByEta); 
    container.replaceChildren()
    renderCards(sortedData)
}

function filterData(e) {
    console.log(e)
    if(e.target.value === 'All') {
        container.replaceChildren()
        renderCards(storeData);
        return;
    }
    const filteredData = storeData.filter(data => {
        return data.tags.includes(e.target.value);
    })
    container.replaceChildren()
    renderCards(filteredData)
}

// let searchFunc = debounce(searchResult, 400);

search.addEventListener("change" , searchResult);
sort.addEventListener("click", sortData);
filter.addEventListener("change" , filterData)

document.addEventListener('DOMContentLoaded' , function() {
    getDataFromApi();
})