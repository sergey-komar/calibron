$(function () {

})

window.addEventListener('DOMContentLoaded', () => {
    const headerSerch = document.querySelector('.header-bottom__search');
    const headerSearchOpen = document.querySelector('.header-bottom__box-img');
    const headerSearchClose = document.querySelector('.header-bottom__form-close');

    headerSearchOpen.addEventListener('click', () => {
        headerSerch.classList.add('searh-hidden');
    });

    headerSearchClose.addEventListener('click', () => {
        headerSerch.classList.remove('searh-hidden');
    });
});