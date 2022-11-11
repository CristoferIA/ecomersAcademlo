const btn_dark = document.querySelector(".nav-btn-dark");
const btn_sun = document.querySelector(".nav-btn-sun");
const body = document.querySelector("body");

export function modoOscuro(){
    btn_dark.addEventListener("click", (e)=>{
        btn_dark.classList.add("btn-sun-none");
        btn_sun.classList.add("btn-sun-block");
        body.classList.toggle('dark-theme');
        store(body.classList.contains('dark-theme'));
    });

    btn_sun.addEventListener("click", (e)=>{
        btn_dark.classList.remove("btn-sun-none");
        btn_sun.classList.remove("btn-sun-block");
        body.classList.toggle('dark-theme');
        store(body.classList.contains('dark-theme'));
    });

    loadStorge();
}

export function loadStorge(){
    const dark_mode = localStorage.getItem('dark-theme');
    if(!dark_mode){
        store('false');
    }else if(dark_mode == 'true'){
        body.classList.add('dark-theme');
    }
}


function store(value){
    localStorage.setItem('dark-theme', value);
}