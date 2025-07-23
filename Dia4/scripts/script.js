// Examen Dia4 JavaScript

// Gestor de Hamburguesería

// Declarar la data

let ingredientesJSON = [
    {
        "nombre": "Pan",
        "descripcion": "Pan de hamburguesa clásico",
        "precio": 2.5,
        "stock": 500
    },
    {
        "nombre": "Carne de res",
        "descripcion": "Carne de res jugosa y sabrosa",
        "precio": 8,
        "stock": 300
    },
    {
        "nombre": "Queso cheddar",
        "descripcion": "Queso cheddar derretido",
        "precio": 1.5,
        "stock": 200
    }
];

let categoriasJSON = [
    {
        "nombre": "Clásica",
        "descripcion": "Hamburguesas clásicas y sabrosas"
    },
    {
        "nombre": "Vegetariana",
        "descripcion": "Hamburguesas sin carne, perfectas para vegetarianos"
    },
    {
        "nombre": "Gourmet",
        "descripcion": "Hamburguesas gourmet con ingredientes premium"
    }
];

let hamburguesasJSON = [
    {
        "nombre": "Clásica",
        "categoria": "Clásica",
        "ingredientes": ["Pan", "Carne de res", "Queso cheddar", "Lechuga", "Tomate", "Cebolla", "Mayonesa", "Ketchup"],
        "precio": 10,
        "chef": "ChefA"
    },
    {
        "nombre": "Vegetariana",
        "categoria": "Vegetariana",
        "ingredientes": ["Pan integral", "Hamburguesa de lentejas", "Queso suizo", "Espinacas", "Cebolla morada", "Aguacate", "Mayonesa vegana"],
        "precio": 8,
        "chef": "ChefB"
    },
    {
        "nombre": "Doble Carne",
        "categoria": "Gourmet",
        "ingredientes": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
        "precio": 12,
        "chef": "ChefC"
    }
];

let chefsJSON = [
    {
        "nombre": "ChefA",
        "especialidad": "Carnes"
    },
    {
        "nombre": "ChefB",
        "especialidad": "Cocina Vegetariana"
    },
    {
        "nombre": "ChefC",
        "especialidad": "Gourmet"
    }
];

// Importar funciones

import * as name from "./functions.js";

// Start program

alert("Bienvenido al Gestor de Hamburguesería");

let userOption = null;
let keepMainMenu = true;
while (keepMainMenu){
    userOption = name.optionNumInRange(name.mainMenu(), 1, 5);
    if (userOption == 1){
        var keepMenu = true;
        while (keepMenu){
            userOption = name.optionNumInRange(name.menuCRUD("Ingredientes"), 1, 5);
            if (userOption == 1) {
                var INombre = prompt("Ingrese el Nombre del Ingrediente:");
                var IDescripcion = prompt("Ingrese la Descripción del Ingrediente:");
                var IPrecio = prompt("Ingrese el Precio del Ingrediente:");
                var IStock = prompt("Ingrese el Stock del Ingrediente:");
                var Itemp = {
                    "nombre": INombre,
                    "descripcion": IDescripcion,
                    "precio": IPrecio,
                    "stock": IStock
                };
                var keep1 = true
                while (keep1){
                    userOption = name.optionNumInRange(`Verifique los valores del Ingrediente:\n\n${name.imprimirIngrediente(Itemp)}\n\nOpciones:\n\n1. Guardar Ingrediente\n2. No guardar\n`, 1, 2);
                    if (userOption == 1){
                        ingredientesJSON = ingredientesJSON.unshift(Itemp);
                        alert("El Ingrediente se guardo correctamente");
                        keep1 = false
                    } else if(userOption == 2){
                        Itemp = null;
                        alert("El ingrediente no ha sido guardado");
                        keep1 = false
                    } else{
                        alert("Ingresaste una opción fuera de rango o invalida, intenta nuevamente\n");
                    }
                }
            } else if(userOption == 5){
                keepMenu = false
                alert("Saliendo al Menu principal")
            } else{
                alert("No se permiten decimales")
            }
        }
    } else if (userOption == 5) {
        keepMainMenu = false;
        alert("Gracias por usar el programa\n\n !Nos vemos pronto¡");
    } else{
        alert("No se permiten decimales")
    }
};

// Developed by: Alan Ramirez - T.I 1096702159