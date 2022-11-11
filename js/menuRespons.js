const btn_grid = document.querySelector(".nav-btn-grid");
const btn_close = document.querySelector(".nav-btn-close");
const menu_respons = document.querySelector(".menu");

export function mostrarMenu() {

    btn_grid.addEventListener('click', (e) => {
        menu_respons.classList.add("menu-block");
        btn_close.classList.add("nav-btn-grid");
        btn_grid.classList.add("nav-btn-none");
    });

    btn_close.addEventListener('click', (e) => {
        menu_respons.classList.remove("menu-block");
        btn_grid.classList.remove("nav-btn-none");
        btn_close.classList.remove("nav-btn-grid");
    });
}