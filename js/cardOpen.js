export function CardOperation(){
    const card_open = document.querySelector("#card_open_lock");
    const card_open2 = document.querySelector("#total-productos");

    const card = document.querySelector(".carrito");
    const card_close = document.querySelector("#card_close");

    card_open.addEventListener('click', (e) => {
        card.style.transform = 'translateX(0)';
    })
    card_open2.addEventListener('click', (e) => {
        card.style.transform = 'translateX(0)';
    })
    card_close.addEventListener('click', (e) => {
        card.style.transform = 'translateX(100%)';
    })
}