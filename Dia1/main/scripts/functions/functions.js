let textMainMenu = "=============================================\n         Simulador de Gasto Diario\n=============================================\nSeleccione una opción:\n\n1. Modificar gastos\n2. Listar gastos\n3. Calcular total de gastos\n4. Generar reporte de gastos\n5. Salir\n=============================================\n"

export function mainMenu() {
    return textMainMenu;
};

export function optionNumInRange(text, minVal, maxVal){
    let keepRunning = true;
    while(keepRunning){
        let userOption = Number(prompt(text+"\nSeleccione una opción (Númerica):"));
        if (userOption >= minVal && userOption <= maxVal){
            return userOption
        }
        else{
            alert("Ingresaste una opción fuera de rango o invalida, intenta nuevamente\n")
        }
    };
};