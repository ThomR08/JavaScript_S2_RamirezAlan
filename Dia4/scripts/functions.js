let textMainMenu = "=============================================\n                       Gestor de Hamburguesería\n=============================================\nSeleccione una opción para modificar:\n\n1. Ingredientes\n2. Categorías\n3. Hamburguesas\n4. Chefs\n5. Salir\n=============================================\n";

export function mainMenu() {
    return textMainMenu;
};

export function optionNumInRange(text, minVal, maxVal){
    let keepRunning = true;
    while(keepRunning){
        let userOption = Number(prompt(text+"\nSeleccione una opción (Númerica):"));
        if (userOption >= minVal && userOption <= maxVal){
            return userOption
        } else{
            alert("Ingresaste una opción fuera de rango o invalida, intenta nuevamente\n")
        }
    };
};

export function menuCRUD(elemento){
    let text = (`=============================================\n                       Modificar ${elemento}\n=============================================\nSeleccione una opción:\n\n1. Crear ${elemento}\n2. Ver ${elemento}\n3. Actualizar ${elemento}\n4. Eliminar ${elemento}\n5. Salir\n=============================================\n`)
    return text
};

export function imprimirIngrediente(ingrediente){
    let text = (`Nombre: ${ingrediente["nombre"]}\nDescripción: ${ingrediente["descripcion"]}\nPrecio: ${ingrediente["precio"]}\nStock: ${ingrediente["stock"]}`)
    return text
}

export function imprimirCategoria(ingrediente){
    let text = (`Nombre: ${ingrediente["nombre"]}\nDescripción: ${ingrediente["descripcion"]}`)
    return text
}

function imprimirListaI(lista){
    let text = "\n  "
    lista.forEach((element, index) => {
        text += ` ${index+1}. ${element}`
    });
    return text
}

export function imprimirHamburguesa(ingrediente){
    let text = (`Nombre: ${ingrediente["nombre"]}\nCategoría: ${ingrediente["categoria"]}\nIngredientes: ${imprimirListaI(ingrediente["ingredientes"])}\nPrecio: ${ingrediente["precio"]}\nChef: ${ingrediente["chef"]}`)
    return text
}

export function imprimirChef(ingrediente){
    let text = (`Nombre: ${ingrediente["nombre"]}\nEspecialidad: ${ingrediente["especialidad"]}`)
    return text
}