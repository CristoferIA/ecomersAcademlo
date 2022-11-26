import { items } from "../db/data.js";

let car = document.querySelector(".carrito__items");
let car_compras = [];
let btn_tabla = document.querySelectorAll('.btn_tabla');

let car_item = document.querySelector('.carrito__items');
let checkout = document.querySelector('#btn_checkout');

export function btnItems(element){
    addProduct(element);
    car_item.addEventListener('click',(e)=>{quitarItem(e)});
    checkout.addEventListener('click',(e)=>{enviarCompars()});
}

function addProduct(element) {

    element.forEach((item, index, arr) => {
        item.addEventListener('click', (e) => {

            let data = items[ (item.getAttribute("dataid")) - 1 ];

            let pre_data = {
                id: data.id,
                image: data.image,
                name: data.name,
                price: data.price,
                stock: data.quantity,
                subtotal: data.price,
                units: 1
            }

            if (car_compras.length === 0) {
                car_compras[0] = pre_data;

            } else {
                let bol = false
                car_compras.forEach((item_obj, index_arr) => {
                    if (item_obj.id === pre_data.id) {
                        item_obj.units += 1;
                        item_obj.subtotal += pre_data.price;
                        bol = true;
                    }
                });
                if (!bol) {
                    car_compras.push(pre_data);
                }
            }
            pintarCarrito(car_compras) ;
            actualizarData();
        })
    });
}

function removeItemstaba(element){
    element.forEach((item, index, arr) => {
        item.addEventListener('click', (e) => {

            let data = item.getAttribute("dataid");
            let tem = 0
            car_compras.forEach((item, index)=>{
                
                if(item.id == data){
                    
                    if(item.units > 1){
                        item.units -= 1;
                        item.subtotal -= item.price; 
                    }else{

                        car_compras.splice(index, 1);
                    }
                      
                }

            });

            // console.log(car_compras);
            pintarCarrito(car_compras) ;
            actualizarData();
            
        })
    });
}

function actualizarData(){

    let cantidadTotal = 0;
    let precioTotal = 0;

    car_compras.forEach((item, index)=>{

        cantidadTotal += item.units;
        precioTotal += item.subtotal;

    });

    document.querySelector(".total_productos").innerHTML = cantidadTotal;
    document.querySelector(".total-items").innerHTML = cantidadTotal;
    document.querySelector(".total-price").innerHTML = precioTotal.toFixed(2);
}

function pintarCarrito(arr) {
    let html = '';
    arr.forEach((data) => {
        //console.log(data);
        html += `
                    <table>
                    <tr>
                        <td rowspan="5"><img class="table-img" src="${data.image}" alt=""></td>
                    </tr>
                    <tr>
                        <td><b>${data.name}</b></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Stock</td>
                        <td>${data.stock}</td>
                        <td><b>| $${parseFloat(data.price).toFixed(2)}</b></td>
                    </tr>
                    <tr>
                        <td>subtotal</td>
                        <td><b>$${data.subtotal.toFixed(2)}</b></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button class="btn_tabla_remove" dataid="${data.id}" style="font-size:1rem; width:1.2rem; height:1.2rem; background-color:white; border:1px solid #ddd;cursor: pointer;">-</button>
                            <span>${data.units}</span> Units
                            <button class="btn_tabla" dataid="${data.id}" style="font-size:1rem; width:1.2rem; height:1.2rem; background-color:white; border:1px solid #ddd;cursor: pointer;">+</button>
                        </td>
                        <td>
                            <button style="background-color:white; color:red; border:none ;cursor: pointer;"><span class="material-symbols-outlined" dataid-quitar="${data.id}">
                            delete
                            </span></button>
                        </td>
                    </tr>
                    </table>
                `;

        


    });

    car.innerHTML = html;
    btn_tabla = document.querySelectorAll('.btn_tabla');
    addProduct(btn_tabla);

    btn_tabla = document.querySelectorAll('.btn_tabla_remove');
    removeItemstaba(btn_tabla);
}


function quitarItem(e){

    let item_id = e.target.getAttribute('dataid-quitar');

    //console.log(item_id);

    if (item_id) {

        let tem = [];

        car_compras.forEach((item, index) => {

            if(item.id == item_id){
                tem[0] = index;
            }
        });
        //console.log(tem);
        car_compras.splice(tem[0], 1);
        tem = ''
    
        //console.log(car_compras);
        //console.log(item_id);
    
        pintarCarrito(car_compras) ;
        actualizarData();
    }


    
    if(car_compras.length === 0){

        car.innerHTML = `
        <img src="img/empty-cart.png" alt="">
        <h1>Your cart is empty</h1>
        <p>You can add items to your cart by clicking on the "+" button on the product page.</p>

        `
    }


}


function enviarCompars(){

    console.log(car_compras);
    
}

export function listCar(){

    console.log(car_compras);
    
}




