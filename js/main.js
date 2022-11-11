


import { navBarScroll } from './navMenu.js';
import { CardOperation } from './cardOpen.js';
import { traslateScroll } from './scrollAnimate.js';
import { mostrarMenu } from './menuRespons.js';
import { modoOscuro } from './darkTheme.js';
import { mostarProducts } from './listProducts/list.js';
import { btnItems } from './listCar/addProduct.js';




document.addEventListener('DOMContentLoaded', function(){
    navBarScroll();
    CardOperation();
    traslateScroll();
    mostrarMenu();
    modoOscuro();
    mostarProducts(); 
    btnItems(this.querySelectorAll('.btn-mas'));
    
});




