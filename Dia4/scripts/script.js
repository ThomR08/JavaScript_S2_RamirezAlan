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
while (keepMainMenu) {
    userOption = name.optionNumInRange(name.mainMenu(), 1, 5);
    if (userOption == 1) {
        let keepMenu = true;
        while (keepMenu) {
            userOption = name.optionNumInRange(name.menuCRUD("Ingredientes"), 1, 5);
            if (userOption == 1) {
                let INombre = prompt("Ingrese el Nombre del Ingrediente:");
                let IDescripcion = prompt("Ingrese la Descripción del Ingrediente:");
                let IPrecio = prompt("Ingrese el Precio del Ingrediente:");
                let IStock = prompt("Ingrese el Stock del Ingrediente:");
                let Itemp = {
                    "nombre": INombre,
                    "descripcion": IDescripcion,
                    "precio": IPrecio,
                    "stock": IStock
                };
                let keep1 = true;
                while (keep1) {
                    userOption = name.optionNumInRange(`Verifique los valores del Ingrediente:\n\n${name.imprimirIngrediente(Itemp)}\n\nOpciones:\n\n1. Guardar\n2. No guardar\n`, 1, 2);
                    if (userOption == 1) {
                        ingredientesJSON.unshift(Itemp);
                        alert("El Ingrediente se guardo correctamente");
                        keep1 = false;
                    } else if (userOption == 2) {
                        Itemp = null;
                        alert("El ingrediente no ha sido guardado");
                        keep1 = false;
                    } else {
                        alert("Ingresaste una opción fuera de rango o invalida, intenta nuevamente\n");
                    }
                }
            } else if (userOption == 2) {
                let listaIngredientes = "\n";
                ingredientesJSON.forEach((Element) => listaIngredientes = listaIngredientes + name.imprimirIngrediente(Element) + "\n\n");
                alert(`Ver Ingredientes:\n${listaIngredientes}`);
            } else if (userOption == 3) {
                let listaIngredientes = "\n";
                for (let i = 0; i < ingredientesJSON.length; i++) {
                    listaIngredientes = `${listaIngredientes}${i + 1}. ${name.imprimirIngrediente(ingredientesJSON[i])}\n\n`;
                }
                let searchIngrediente = prompt(`Ingrese la posición del Ingrediente a modificar:\n${listaIngredientes}`) - 1;
                if (searchIngrediente >= 0 && searchIngrediente <= ingredientesJSON.length) {
                    userOption = name.optionNumInRange(`Desea Actualizar este Ingrediente:\n\n${searchIngrediente + 1}. ${name.imprimirIngrediente(ingredientesJSON[searchIngrediente])}\n\nOpciones:\n\n1. Actualizar\n2. No Actualizar\n`, 1, 2);
                    if (userOption == 1) {
                        let INombre = prompt("Ingrese el nuevo Nombre del Ingrediente:");
                        let IDescripcion = prompt("Ingrese la nueva Descripción del Ingrediente:");
                        let IPrecio = prompt("Ingrese el nuevo Precio del Ingrediente:");
                        let IStock = prompt("Ingrese el nuevo Stock del Ingrediente:");
                        let Itemp = {
                            "nombre": INombre,
                            "descripcion": IDescripcion,
                            "precio": IPrecio,
                            "stock": IStock
                        };
                        let keep1 = true;
                        while (keep1) {
                            userOption = name.optionNumInRange(`Verifique los valores del Ingrediente:\n\n${name.imprimirIngrediente(Itemp)}\n\nOpciones:\n\n1. Guardar\n2. No guardar\n`, 1, 2);
                            if (userOption == 1) {
                                ingredientesJSON[searchIngrediente] = Itemp;
                                alert("El Ingrediente se Actualizo correctamente");
                                keep1 = false;
                            } else if (userOption == 2) {
                                Itemp = null;
                                alert("El ingrediente no ha sido Actualizado");
                                keep1 = false;
                            } else {
                                alert("Ingresaste una opción fuera de rango o invalida, intenta nuevamente\n");
                            }
                        }
                    } else if (userOption == 2) {
                        alert("El ingrediente no ha sido Actualizado");
                    } else {
                        alert("Ingresaste una opción invalida")
                    }
                } else {
                    alert("Ingresaste una opción Invalida");
                }
            } else if (userOption == 4) {
                let listaIngredientes = "\n";
                for (let i = 0; i < ingredientesJSON.length; i++) {
                    listaIngredientes = `${listaIngredientes}${i + 1}. ${name.imprimirIngrediente(ingredientesJSON[i])}\n\n`;
                }
                let searchIngrediente = (prompt(`Ingrese la posición del Ingrediente a Eliminar:\n${listaIngredientes}`) - 1);
                if (searchIngrediente >= 0 && searchIngrediente <= ingredientesJSON.length - 1) {
                    userOption = name.optionNumInRange(`Esta seguro de que desea !ELIMINAR¡ este Ingrediente:\n\n${searchIngrediente + 1}. ${name.imprimirIngrediente(ingredientesJSON[searchIngrediente])}\n\nOpciones:\n\n1. !ELIMINAR¡\n2. No Eliminar\n`, 1, 2);
                    if (userOption == 1) {
                        ingredientesJSON.splice(searchIngrediente, 1)
                        alert("El ingrediente ha sido Eliminado")
                    } else if (userOption == 2) {
                        alert("El ingrediente no ha sido Eliminado");
                    } else {
                        alert("Ingresaste una opción invalida")
                    }
                } else {
                    alert("Ingresaste una opción Invalida");
                }
            } else if (userOption == 5) {
                keepMenu = false
                alert("Saliendo al Menu principal");
            } else {
                alert("No se permiten decimales");
            }
        }
    } else if (userOption == 2) {
        let keepMenu = true;
        while (keepMenu) {
            userOption = name.optionNumInRange(name.menuCRUD("Categorías"), 1, 5);
            if (userOption == 1) {
                let CNombre = prompt("Ingrese el Nombre de la Categoría:");
                let CDescripcion = prompt("Ingrese la Descripción de la Categoría:");
                let Ctemp = {
                    "nombre": CNombre,
                    "descripcion": CDescripcion,
                };
                let keep1 = true
                while (keep1) {
                    userOption = name.optionNumInRange(`Verifique los valores de la Categoría:\n\n${name.imprimirCategoria(Ctemp)}\n\nOpciones:\n\n1. Guardar\n2. No guardar\n`, 1, 2);
                    if (userOption == 1) {
                        categoriasJSON.unshift(Ctemp);
                        alert("La Categoría se guardo correctamente");
                        keep1 = false
                    } else if (userOption == 2) {
                        Ctemp = null;
                        alert("La Categoría no ha sido guardada");
                        keep1 = false
                    } else {
                        alert("Ingresaste una opción fuera de rango o invalida, intenta nuevamente\n");
                    }
                }
            } else if (userOption == 2) {
                let listaCategorias = "\n";
                categoriasJSON.forEach((Element) => listaCategorias = listaCategorias + name.imprimirCategoria(Element) + "\n\n");
                alert(`Ver Categorías:\n${listaCategorias}`);
            } else if (userOption == 3) {
                let listaCategorias = "\n";
                for (let i = 0; i < categoriasJSON.length; i++) {
                    listaCategorias = `${listaCategorias}${i + 1}. ${name.imprimirCategoria(categoriasJSON[i])}\n\n`;
                }
                let searchIngrediente = prompt(`Ingrese la posición de la Categoría a modificar:\n${listaCategorias}`) - 1;
                if (searchIngrediente >= 0 && searchIngrediente <= categoriasJSON.length) {
                    userOption = name.optionNumInRange(`Desea Actualizar esta Categoría:\n\n${searchIngrediente + 1}. ${name.imprimirCategoria(categoriasJSON[searchIngrediente])}\n\nOpciones:\n\n1. Actualizar\n2. No Actualizar\n`, 1, 2);
                    if (userOption == 1) {
                        let CNombre = prompt("Ingrese el nuevo Nombre de la Categoría:");
                        let CDescripcion = prompt("Ingrese la nueva Descripción de la Categoría:");
                        let Ctemp = {
                            "nombre": CNombre,
                            "descripcion": CDescripcion,
                        };
                        let keep1 = true;
                        while (keep1) {
                            userOption = name.optionNumInRange(`Verifique los valores de la Categoría:\n\n${name.imprimirCategoria(Ctemp)}\n\nOpciones:\n\n1. Guardar\n2. No guardar\n`, 1, 2);
                            if (userOption == 1) {
                                categoriasJSON[searchIngrediente] = Ctemp;
                                alert("La Categoría se Actualizo correctamente");
                                keep1 = false;
                            } else if (userOption == 2) {
                                Ctemp = null;
                                alert("La Categoría no ha sido Actualizado");
                                keep1 = false;
                            } else {
                                alert("Ingresaste una opción fuera de rango o invalida, intenta nuevamente\n");
                            }
                        }
                    } else if (userOption == 2) {
                        alert("La Categoría no ha sido Actualizado");
                    } else {
                        alert("Ingresaste una opción invalida")
                    }
                } else {
                    alert("Ingresaste una opción Invalida");
                }
            } else if (userOption == 4) {
                let listaCategorias = "\n";
                for (let i = 0; i < categoriasJSON.length; i++) {
                    listaCategorias = `${listaCategorias}${i + 1}. ${name.imprimirCategoria(categoriasJSON[i])}\n\n`;
                }
                let searchIngrediente = (prompt(`Ingrese la posición de la Categoría a Eliminar:\n${listaCategorias}`) - 1);
                if (searchIngrediente >= 0 && searchIngrediente <= categoriasJSON.length - 1) {
                    userOption = name.optionNumInRange(`Esta seguro de que desea !ELIMINAR¡ esta Categoría:\n\n${searchIngrediente + 1}. ${name.imprimirCategoria(categoriasJSON[searchIngrediente])}\n\nOpciones:\n\n1. !ELIMINAR¡\n2. No Eliminar\n`, 1, 2);
                    if (userOption == 1) {
                        categoriasJSON.splice(searchIngrediente, 1)
                        alert("La Categoría ha sido Eliminado")
                    } else if (userOption == 2) {
                        alert("La Categoría no ha sido Eliminado");
                    } else {
                        alert("Ingresaste una opción invalida")
                    }
                } else {
                    alert("Ingresaste una opción Invalida");
                }
            } else if (userOption == 5) {
                keepMenu = false
                alert("Saliendo al Menu principal")
            } else {
                alert("No se permiten decimales")
            }
        }
    } else if (userOption == 3) {
        let keepMenu = true;
        while (keepMenu) {
            userOption = name.optionNumInRange(name.menuCRUD("Hamburguesas"), 1, 5);
            if (userOption == 1) {
                let HNombre = prompt("Ingrese el Nombre de la Hamburguesa:");
                let HCategoria = prompt("Ingrese la Categoría de la Hamburguesa:");
                let HIngredientes = prompt("Ingrese los Ingredientes de la Hamburguesa separados por , (Ing1, ing2, ing3)").split(",");
                let HPrecio = prompt("Ingrese el Precio de la Hamburguesa");
                let HChef = prompt("Ingrese el Chef de la Hamburguesa");
                let Htemp = {
                    "nombre": HNombre,
                    "categoria": HCategoria,
                    "ingredientes": HIngredientes,
                    "precio": HPrecio,
                    "chef": HChef
                };
                let keep1 = true
                while (keep1) {
                    userOption = name.optionNumInRange(`Verifique los valores de la Hamburguesa:\n\n${name.imprimirHamburguesa(Htemp)}\n\nOpciones:\n\n1. Guardar\n2. No guardar\n`, 1, 2);
                    if (userOption == 1) {
                        hamburguesasJSON.unshift(Htemp);
                        alert("La Hamburguesa se guardo correctamente");
                        keep1 = false
                    } else if (userOption == 2) {
                        Htemp = null;
                        alert("La Hamburguesa no ha sido guardada");
                        keep1 = false
                    } else {
                        alert("Ingresaste una opción fuera de rango o invalida, intenta nuevamente\n");
                    }
                }
            } else if (userOption == 2) {
                let listaHamburguesas = "\n";
                hamburguesasJSON.forEach((Element) => listaHamburguesas = listaHamburguesas + name.imprimirHamburguesa(Element) + "\n\n");
                alert(`Ver Hamburguesas:\n${listaHamburguesas}`);
            } else if (userOption == 3) {
                let listaHamburguesas = "\n";
                for (let i = 0; i < hamburguesasJSON.length; i++) {
                    listaHamburguesas = `${listaHamburguesas}${i + 1}. ${name.imprimirHamburguesa(hamburguesasJSON[i])}\n\n`;
                }
                let searchIngrediente = prompt(`Ingrese la posición de la Hamburguesa a modificar:\n${listaHamburguesas}`) - 1;
                if (searchIngrediente >= 0 && searchIngrediente <= hamburguesasJSON.length) {
                    userOption = name.optionNumInRange(`Desea Actualizar esta Hamburguesa:\n\n${searchIngrediente + 1}. ${name.imprimirHamburguesa(hamburguesasJSON[searchIngrediente])}\n\nOpciones:\n\n1. Actualizar\n2. No Actualizar\n`, 1, 2);
                    if (userOption == 1) {
                        let HNombre = prompt("Ingrese el Nuevo Nombre de la Hamburguesa:");
                        let HCategoria = prompt("Ingrese la Nueva Categoría de la Hamburguesa:");
                        let HIngredientes = prompt("Ingrese los Nuevos  Ingredientes de la Hamburguesa separados por , (Ing1, ing2, ing3)").split(",");
                        let HPrecio = prompt("Ingrese el Nuevo Precio de la Hamburguesa");
                        let HChef = prompt("Ingrese el Nuevo Chef de la Hamburguesa");
                        let Htemp = {
                            "nombre": HNombre,
                            "categoria": HCategoria,
                            "ingredientes": HIngredientes,
                            "precio": HPrecio,
                            "chef": HChef
                        };
                            let keep1 = true;
                        while (keep1) {
                            userOption = name.optionNumInRange(`Verifique los valores de la Hamburguesa:\n\n${name.imprimirHamburguesa(Htemp)}\n\nOpciones:\n\n1. Guardar\n2. No guardar\n`, 1, 2);
                            if (userOption == 1) {
                                hamburguesasJSON[searchIngrediente] = Htemp;
                                alert("La Hamburguesa se Actualizo correctamente");
                                keep1 = false;
                            } else if (userOption == 2) {
                                Htemp = null;
                                alert("La Hamburguesa no ha sido Actualizado");
                                keep1 = false;
                            } else {
                                alert("Ingresaste una opción fuera de rango o invalida, intenta nuevamente\n");
                            }
                        }
                    } else if (userOption == 2) {
                        alert("La Hamburguesa no ha sido Actualizado");
                    } else {
                        alert("Ingresaste una opción invalida")
                    }
                } else {
                    alert("Ingresaste una opción Invalida");
                }
            } else if (userOption == 4) {
                let listaHamburguesas = "\n";
                for (let i = 0; i < hamburguesasJSON.length; i++) {
                    listaHamburguesas = `${listaHamburguesas}${i + 1}. ${name.imprimirHamburguesa(hamburguesasJSON[i])}\n\n`;
                }
                let searchIngrediente = (prompt(`Ingrese la posición de la Hamburguesa a Eliminar:\n${listaHamburguesas}`) - 1);
                if (searchIngrediente >= 0 && searchIngrediente <= hamburguesasJSON.length - 1) {
                    userOption = name.optionNumInRange(`Esta seguro de que desea !ELIMINAR¡ esta Hamburguesa:\n\n${searchIngrediente + 1}. ${name.imprimirHamburguesa(hamburguesasJSON[searchIngrediente])}\n\nOpciones:\n\n1. !ELIMINAR¡\n2. No Eliminar\n`, 1, 2);
                    if (userOption == 1) {
                        hamburguesasJSON.splice(searchIngrediente, 1)
                        alert("La Hamburguesa ha sido Eliminado")
                    } else if (userOption == 2) {
                        alert("La Hamburguesa no ha sido Eliminado");
                    } else {
                        alert("Ingresaste una opción invalida")
                    }
                } else {
                    alert("Ingresaste una opción Invalida");
                }
            } else if (userOption == 5) {
                keepMenu = false
                alert("Saliendo al Menu principal")
            } else {
                alert("No se permiten decimales")
            }
        }
    } else if (userOption == 5) {
        keepMainMenu = false;
        alert("Gracias por usar el programa\n\n !Nos vemos pronto¡");
    } else {
        alert("No se permiten decimales")
    }
};

// Developed by: Alan Ramirez - T.I 1096702159