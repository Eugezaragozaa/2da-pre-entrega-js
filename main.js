Swal.fire({
    title: 'Adulto independiente',
    text: '¿Estás seguro de que deseas realizar la compra?',
    icon: 'question',
    denyButtonText: 'Deseas agregar al carrito?',
    showCancelButton: true,
    confirmButtonText: 'Shut up and take my money',
    cancelButtonText: 'cancel',
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire('¡Compra realizada con éxito!', '', 'success');
    } else if (result.isDenied) {
        Swal.fire('Producto agregado al carrito', '', 'info');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Compra cancelada', '', 'info');
    }
});
let shop = {
    shirts: [
        { name: "Aurora T-shirt", price: 2000 },
        { name: "valentine Shirt", price: 2500 },
        { name: "batick Shirt", price: 3000 },
        { name: "Radiant Blossom", price: 2200 },
        { name: "Ethernal harmony", price: 5000 },
        { name: "Esmeralda", price: 2200 },
        { name: "Bonnie Rabbit", price: 2000 },
        

    ],

    pants: [
        { name: "Jeans shibina", price: 30000 },
        { name: "jean Catalina", price: 22800 },
        { name: "jean oversice ", price: 15000 },
        { name: "Short denim", price: 21000 },
        { name: "jumper black", price: 10000 },
        { name: "Pollera Renata", price: 12000 },
        { name: "Falda short", price: 10000 },
    ],

    jackets: [
        { name: "Leather Jacket", price: 4000 },
        { name: "Jean Jacket", price: 3500 },
        { name: "Bomber Jacket", price: 3800 },
        { name: "Blazer Magdalena", price: 2000 },
        { name: "Blazer withe", price: 2000 },
        { name: "Frihda Jacket", price: 2000 },
        { name: "Reverse", price: 2000 },
    ],

    accessories: [
        { name: "Leather Belt", price: 800 },
        { name: "Woolen Scarf", price: 1200 },
        { name: "Sunglasses", price: 1000 },

    ],
};

let cart = [];
let total = 0;

function showProducts(category) {
    console.log(`Productos disponibles en la categoría ${category}:`);
    shop[category].forEach(item => {
        console.log(`${item.name} - Precio: $${item.price}`);
    });
}

function addToCart(category, itemName) {
    const categoryItems = shop[category];
    const selectedItem = categoryItems.find(item => item.name.toLowerCase() === itemName.toLowerCase());

    if (selectedItem) {
        cart.push({
            category,
            item: selectedItem,
        });

        console.log(`Se ha agregado ${selectedItem.name} al carrito.`);
        updateCartUI();
        saveCartToLocalStorage();
    } else {
        console.log(`Artículo no encontrado en la categoría ${category}.`);
    }
}

function showCart() {
    console.log("Carrito de compras:");
    cart.forEach(item => {
        console.log(`${item.category}: ${item.item.name} - Precio: $${item.item.price}`);
    });
}

function calculateTotalCart() {
    let total = 0;

    cart.forEach(item => {
        total += item.item.price;
    });

    return total;
}

function generateProductCards() {
    const productContainer = document.getElementById("product-container");

    for (const category in shop) {
        const categoryContainer = document.createElement("div");
        categoryContainer.className = "category-container";

// Añadir el nombre de la categoría como encabezado
const categoryHeader = document.createElement("h2");
categoryHeader.textContent = capitalizeFirstLetter(category);
categoryContainer.appendChild(categoryHeader);

shop[category].forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    const name = document.createElement("p");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;

    card.appendChild(name);
    card.appendChild(price);

    categoryContainer.appendChild(card);
});

productContainer.appendChild(categoryContainer);
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateCartUI() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ""; // Limpiar contenido anterior

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.textContent = `${item.category}: ${item.item.name} - Precio: $${item.item.price}`;
        cartContainer.appendChild(cartItem);
    });
}

function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}


// Ejemplos de uso para la tienda de ropa

document.addEventListener("DOMContentLoaded", () => {
showProducts("shirts");
showProducts("pants");

loadCartFromLocalStorage();
    generateProductCards();

    document.getElementById("add-to-cart-button").addEventListener("click", () => {
        const categorySelect = document.getElementById("category-select").value;
        const itemSelect = document.getElementById("item-select").value;
        addToCart(categorySelect, itemSelect);
    });
});


const totalCart = calculateTotalCart();
console.log("Total de la compra: $" + totalCart)


