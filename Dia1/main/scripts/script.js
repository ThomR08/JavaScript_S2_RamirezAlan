// Proyecto Python a JavaScript
// Link proyecto Python: https://github.com/ThomR08/Proyecto_Python_RamirezAlan

// Simulador de Gasto Diario

// Importar funciones

import * as name from "./functions/functions.js";

// Iniciar programa
alert("Bienvenido al seguimiento de gastos");

// While para mantener el menu activo
let keepMainMenu = true;
while(keepMainMenu){
    name.optionNumInRange(name.mainMenu(), 1, 5);
};

// Developed by: Alan Ramirez - T.I 1096702159