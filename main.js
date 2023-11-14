
let menu = {
    hamburguers: {
    cheddar: 5,
    cheddarBaccon : 7,
    cheddarBacconOnionEgg: 6 ,
    veggiePortobellosOnions: 8 
    },

    pizzas: {
    muzzarella: 8,
    fugazzeta: 9,
    bbq: 7,
    chikenfried: 5
    },

    salads: {
    cesar: 4,
    mediterranea: 5,
    eggCarrotTomato: 3 
    },

    drinks: {
    cocacola: 2,
    lemonMintGinger: 3,
    lemonMintAppleCedron: 6,
    water: 4,
    
    }
};

    let order = [];
    let total = 0;


    function agregarAlCarrito(categoria, plato) {
    if (categoria in menu && plato in menu [categoria]) {
        orden.push({ categoria, plato, precio: menu[categoria][plato] });
        console.log(`${plato} de ${categoria} agregado al carrito. Precio: $${menu[categoria][plato]}`);
    } else {
        alert("Plato no válido. Por favor, elija un plato del menú.");
        }
    }

    function calcularTotal() {
    total = 0;
    for (let i = 0; i < order.length; i++) {
        total += order[i].precio;
    }
    console.log(`Total a pagar: $${total}`);
    }



/*FALTA ARREGLAR : CONFUSED !! SEND ME HELP


    function mostrarHamburguers(categoria, hamburguers) {
        console.log(`Menú de ${categoria}:`);
        for (let hamburguer of hamburguers) {
            if (menu[hamburguers][opcion]) {
            console.log(`${opcion}: $${menu[categoria][opcion]}`);
            } else {
            console.log(`${opcion} no encontrada en el menú de ${categoria}`);
        }
    }
}
    function seleccionarOpciones() {
        mostrarHamburguers("hamburgers", ["cheddar, bacon, onion, egg"]);
        mostrarDrinks("drinks", ["lemon, mint, ginger"]);
    }

*/


    function simular() {
    let continuar = true;
    while (continuar) {
        let categoria = prompt("Menú: hamburguesas, pizzas, ensaladas, refrescos\nIngrese la categoría o escriba 'fin' para finalizar:");
    
        if (categoria.toLowerCase() === 'fin') {
        continuar = false;
    } else {
        let plato = prompt(`Menú de ${categoria}: ${Object.keys(menu[categoria]).join(", ")}\nIngrese el platillo que desea:`);
        agregarAlCarrito(categoria, plato);
        }
    }

    calcularTotal();
}


    simular();








