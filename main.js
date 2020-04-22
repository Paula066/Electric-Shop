$(".carousel1").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    animateOut: "slideOutDown",
    animateIn: "flipInX",
    items: 1,
    autoplayTimeout: 1000,
    autoplay: true
});

const Car = function () { }
const maluch = new Car()

const btnSearch = document.querySelector('.headerMobile__search');
const btnBurger = document.querySelector('.headerMobile__hamburg')
const mobile = document.querySelectorAll('.mobile');
const headerTop = document.querySelectorAll('.header__main');
const headerCategory = document.querySelectorAll('.headerMobile__category');
const addMobileMenu = () => {
    mobile.forEach((li) => {
        li.classList.toggle('mobile__show');
    })
    headerTop.forEach((li) => {
        li.classList.toggle('header__main--show')
    })
}

const addBurgerMenu = () => {
    headerCategory.forEach(li => {
        li.classList.toggle('headerMobile__show')
    })
}
btnSearch.addEventListener('click', addMobileMenu)
btnBurger.addEventListener('click', addBurgerMenu)