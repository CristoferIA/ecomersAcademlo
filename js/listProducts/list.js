import { items } from "../db/data.js";

let html = "";
const products = document.querySelector(".container__products");

export function mostarProducts() {

   
    items.forEach((item, index, arr) => {
        html += `
        <div class="producto mix ${item.category}">
                    <div class="img-producto">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="dato-producto">
                        <div>
                            <div>
                                <h1>$${item.price.toFixed(2)}</h1>
                                <p>| Stock: <span>${item.quantity}</span></p>
                            </div>                           
                            <div>${item.name}</div>
                        </div>                        
                        <button class="btn-mas" dataid="${item.id}" >+</button>
                    </div>  
                </div>
        `;
    })

   products.innerHTML = html;

   const containerEl = document.querySelector('.container__products');
   const mixer = mixitup(containerEl);
}