const animateScroll = (e) => {
    const desing = document.querySelector(e);
    desing.scrollIntoView({
        behavior: 'smooth'
    });
}

export function traslateScroll() {
    const btn_home = document.querySelector("#btn_home");
    const btn_products = document.querySelector("#btn_products");

    btn_home.addEventListener('click', (e) => {
        //console.log(e.target.id);
        animateScroll('.container__collections');
        closeMenuRespons();
    });

    btn_products.addEventListener('click', (e) => {
        //console.log(window.scrollY);
        animateScroll('.container__menu-products');
        closeMenuRespons();
    });
}

function closeMenuRespons() {
    const btn_grid = document.querySelector(".nav-btn-grid");
    const btn_close = document.querySelector(".nav-btn-close");
    const menu_respons = document.querySelector(".menu");
    if (window.innerWidth < 769) {
        menu_respons.classList.remove("menu-block");
        btn_grid.classList.remove("nav-btn-none");
        btn_close.classList.remove("nav-btn-grid");
    }
}




