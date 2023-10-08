document.addEventListener('DOMContentLoaded', () =>{
    let products = document.querySelector(".products")
    async function fetchProducts(url){
    let data = await fetch(url);
    let response = await data.json();
    for (let i = 0; i < response.length; i++) {
   products.innerHTML = `
     <div class="product">
         <img src="${response[i].img}" alt="" srcset="">
    </div>
    <div class="product">
        <div class="product-text">
            <h2 class="name">${response[i].name}</h2>
             <p class="sub">${response[i].sub}</p>
            <p class="intro">${response[i].intro}</p>
        </div>
        <div class="choose-img">
          <img src="${response[i].img1}" alt="" srcset="" width="25%">
          <img src="${response[i].img2}" alt="" srcset="" width="25%">
          <img src="${response[i].img3}" alt="" srcset="" width="25%">
        </div>
        <div class="control">
           <button>${response[i].cart}</button>
           <button>${response[i].buy}</button>
        </div>
    </div>
   `;
    };
    };
    fetchProducts('http://127.0.0.1:5500/productpack.js')
    
})