
export function navBarScroll() {
    const nav_bar = document.querySelector(".nav");

    
    const card1 = document.querySelector("#card_open_lock");
    const card2 = document.querySelector("#total-productos");
    const card3 = document.querySelector(".nav-btn-grid");
    const card4 = document.querySelector(".nav-btn-close");
    const card5 = document.querySelector(".nav-btn-sun");

    const btn_home = document.querySelector("#btn_home");
    const btn_products = document.querySelector("#btn_products");
    if (nav_bar) {
        window.addEventListener('scroll', function () {
            if (this.window.scrollY > 50) {
                nav_bar.classList.add('nav-change');

                card1.classList.add('color_icon_black');
                card2.classList.add('color_icon_black');
                card3.classList.add('color_icon_black');
                card4.classList.add('color_icon_black');
                card5.classList.add('color_icon_black');

            } else {
                nav_bar.classList.remove('nav-change');

                card1.classList.remove('color_icon_black');
                card2.classList.remove('color_icon_black');
                card3.classList.remove('color_icon_black');
                card4.classList.remove('color_icon_black');
                card5.classList.remove('color_icon_black');
            }

            if(this.window.scrollY < 513){
                btn_home.classList.add('nav-menu-scroll');
                btn_products.classList.remove('nav-menu-scroll');
            }else{
                btn_home.classList.remove('nav-menu-scroll');
                btn_products.classList.add('nav-menu-scroll');
            }
            
        })
    }
}
