let navbar = document.querySelector('.nav');

document.getElementById('menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartitems.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.getElementById('search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartitems.classList.remove('active');
}

let cartitems = document.querySelector('.cart-items');

document.getElementById('cart-btn').onclick = () => {
    cartitems.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartitems.classList.remove('active');
}