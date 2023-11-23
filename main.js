
let menu = {
    hamburgers: [
    { name: "Cheddar Burger", precioSolo: 2000, precioCombo: 3000 },
    { name: "Cheddar Baccon Burger", precioSolo: 2500, precioCombo: 3500 },
    { name: "Cheddar Baccon Onion Egg Burger", precioSolo: 2800, precioCombo: 3200 },
    { name: "Veggie Portobellos Onions Burger", precioSolo: 2800, precioCombo: 3200 },
    ],

    pizzas: [
    { name: "Muzzarella Pizza", precioSolo: 2000, precioCombo: 3000 },
    { name: "Fugazzeta Pizza", precioSolo: 3000, precioCombo: 3800 },
    { name: "bbq Pizza", precioSolo: 3700, precioCombo: 4200 },
    { name: "Chiken Fried Pizza", precioSolo: 4000, precioCombo: 4500 },
    ],

    salads: [
    { name: "Cesar Salad", precioSolo: 2800, precioCombo: 3600 },
    { name: "Mediterrranea Salad", precioSolo: 2600, precioCombo: 3300 },
    { name: "Mixed Salad", precioSolo: 2000, precioCombo: 2800 },
    ],

    drinks: [
    {name: "Coca-Cola", precioSolo: 2000},
    {name: "Limonated Zen", precioSolo: 2000},
    {name: "Mistic Lemonated", precioSolo: 2000},
    {name: "Water", precioSolo: 1800},
    ],
};

    let order = [];
    let total = 0;


    function showProductsToCart() {
    console.log("ver carrito:");
    carrito.forEach(item => {
        const { category, hamburguer, drinks, precioTotal } = item;
        console.log(`${category}: ${hamburguer.name} + ${drinks.name} - Precio Total: $${precioTotal}`);
    });
}
function addComboToCart(hamburgers, drinks) {
    if (menu.hamburgers[hamburgers] && menu.drinks[drinks]) {
        const { nombre: cheddarBacconBurger, precioSolo: precioBurgerSolo, precioCombo: precioBurgerCombo } = menu.hamburgers[hamburger];
        const { nombre: misticLemonade, precioSolo: precioBebidaSolo } = menu.drinks[dink];

        const combo = {
            categoria: "combo",
            hamburguesa: { nombre: cheddarBacconBurger, precioSolo: precioBurgerSolo, precioCombo: precioBurgerCombo },
            bebida: { nombre: misticLemonade, precioSolo: precioBebidaSolo},
            precioTotal: precioBurgerCombo + precioBebidaSolo
        };




        cart.push(combo);

        console.log(`Se ha agregado el combo ${cheddarBacconBurger} + ${misticLemonade} al carrito.`);
    } else {
        console.log(`Hamburguesa o bebida no encontrada en el menú.`);
    }
}



function calculateTotalCart() {
    let total = 0;

    cart.forEach(item => {
        total += item.precioTotal;
    });

    return total;
}

// asi se veria la card que muestra la informacion que contiene el carrito para hacer la suma de los productos elegidos 

showProducts("hamburgers");

showProductos("drinks");

addComboToCart("cheddar", "lemonMintGinger");

showProductsToCart();

// aca mostramos el total de lo que se encuentra en el carrito 
const totalCart = calculateTotalCart();
console.log("Total del carrito: $" + totalCart);


Simular ();



