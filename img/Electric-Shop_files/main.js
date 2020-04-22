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
const addMobileMenu = () => {
    mobile.forEach((e) => {
        e.classList.toggle('mobile__show');
    })
}

const addBurgerMenu = () => {

}
btnSearch.addEventListener('click', addMobileMenu)
btnBurger.addEventListener('click', addBurgerMenu)