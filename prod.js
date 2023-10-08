document.addEventListener('DOMContentLoaded', () =>{
    let items = document.querySelector(".items")
    async function fetchItems(url){
    let data = await fetch(url);
    let response = await data.json();
    for (let i = 0; i < response.length; i++) {
        
   items.innerHTML += `
    <div class="item" onclick="window.location = 'product.html?id=${response[i].id}'">
        <img src="${response[i].images}" alt="" class="images" width="70%">
        <div class="item-text">
           <h4 class="type">${response[i].type}</h4>
           <h3 class="title">${response[i].title}</h3>
           <p class="description">${response[i].description}</p>
           <p class="price">${response[i].price}</p>
        </div>
    </div>
    `;
    };
    };
    fetchItems('http://127.0.0.1:5500/pack.js')
    
})



    




