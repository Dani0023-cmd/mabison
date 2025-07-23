document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.icon-cart');
    const cart = document.getElementById('cart');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    let carrito = [];
    let total = 0;

    cartIcon.addEventListener('click', () => {
        cart.classList.add('show');
        renderCart();
    });

    closeCart.addEventListener('click', () => {
        cart.classList.remove('show');
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const producto = button.closest('.producto'); // Cambia a .product si es tu clase
            const nombre = producto.querySelector('p:nth-of-type(1)').innerText;
            const precio = parseFloat(producto.querySelector('.precio').innerText.replace('$', ''));

            carrito.push({ nombre, precio });
            total += precio;
            renderCart();
        });
    });

    function renderCart() {
        cartItems.innerHTML = '';
        if (carrito.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        } else {
            carrito.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('cart-item');
                div.innerHTML = `
                    <p>${item.nombre}</p>
                    <p>$${item.precio.toFixed(2)}</p>
                `;
                cartItems.appendChild(div);
            });
        }
        cartTotal.innerText = total.toFixed(2);
    }
});

const searchIcon = document.querySelector('.icon-search'); // Icono lupa
const searchModal = document.getElementById('search-modal');
const closeSearch = document.querySelector('.close-search');
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

// Abrir buscador
searchIcon.addEventListener('click', () => {
    searchModal.classList.add('show');
});

// Cerrar buscador al dar clic en la ❌
closeSearch.addEventListener('click', () => {
    searchModal.classList.remove('show');
});

// Cerrar buscador al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target == searchModal) {
        searchModal.classList.remove('show');
    }
});

// Filtrar productos
searchBtn.addEventListener('click', () => {
    const term = searchInput.value.toLowerCase();
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        const nombre = producto.querySelector('p').innerText.toLowerCase();
        if (nombre.includes(term)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
});

const userIcon = document.querySelector('.icon-user'); // Icono de perfil
const loginModal = document.getElementById('login-modal');
const closeLogin = document.querySelector('.close-login');

// Abrir ventana al dar clic en el icono de usuario
userIcon.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Cerrar ventana al dar clic en la X
closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Cerrar ventana al hacer clic fuera de ella
window.addEventListener('click', (e) => {
    if (e.target == loginModal) {
        loginModal.style.display = 'none';
    }
});

const favIcon = document.querySelector('.icon-heart'); // Icono del corazón ❤️
const favModal = document.getElementById('favorites-modal');
const closeFav = document.querySelector('.close-favorites');

// Abrir ventana favoritos
favIcon.addEventListener('click', () => {
    favModal.style.display = 'block';
});

// Cerrar ventana al dar clic en ❌
closeFav.addEventListener('click', () => {
    favModal.style.display = 'none';
});

// Cerrar ventana al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target == favModal) {
        favModal.style.display = 'none';
    }
});


const menuIcon = document.querySelector('.icon-menu'); // Icono ☰
const menuModal = document.getElementById('menu-modal');
const closeMenu = document.querySelector('.close-menu');

// Abrir menú
menuIcon.addEventListener('click', () => {
    menuModal.classList.add('show');
});

// Cerrar menú al dar clic en la X
closeMenu.addEventListener('click', () => {
    menuModal.classList.remove('show');
});

// Cerrar menú al hacer clic fuera de él
window.addEventListener('click', (e) => {
    if (e.target == menuModal) {
        menuModal.classList.remove('show');
    }
});