const hamburger = document.querySelector('.hamburger.menu');
const menuMobile = document.querySelector('.menu-mobile');

const addMenu = () => {
    const active = menuMobile.classList.contains('open');
    console.log(active);
    if (!active) {
        menuMobile.classList.add('open');
    } else {
        menuMobile.classList.remove('open');
    }
}

hamburger.addEventListener('click', addMenu)