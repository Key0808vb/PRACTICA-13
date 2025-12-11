// Objetivo: Simular un menú de opciones para un cajero automático usando switch y la función console.log() para mostrar las acciones.
// Instrucciones:
* Crea una función llamada ejecutarOpcion(opcion) que reciba un número entero
(del 1 al 3) o la palabra “salir” como string.
* Dentro de la función, implementa un switch para manejar las siguientes opciones:
 * Caso 1: Imprimir: “Realizando un Retiro de Efectivo…”
 * Caso 2: Imprimir: “Consultando Saldo en Cuenta…”
 * Caso 3: Imprimir: “Accediendo a Transferencias…”
 * Caso ‘salir’: Imprimir: “Saliendo del sistema. ¡Gracias!”
* Utiliza la cláusula default para cualquier otra entrada, imprimiendo: “Opción no
reconocida. Por favor, intente de nuevo.”
* Asegúrate de incluir la sentencia break donde sea necesario.

console.log("===================================");
console.log("       MENÚ DEL CAJERO AUTOMÁTICO");
console.log("===================================");
console.log("1 - Retiro de Efectivo");
console.log("2 - Consultar Saldo");
console.log("3 - Transferencias");
console.log("salir - Salir del sistema");
console.log("===================================");

let opcion = prompt("Ingresa la opción que deseas ejecutar: ");
function ejecutarOpcion(opcion) {
    switch (opcion) {

        case "1":
            console.log("Realizando un Retiro de Efectivo…");
            break;
        case "2":
            console.log("Consultando Saldo en Cuenta…");
            break;
        case "3":
            console.log("Accediendo a Transferencias…");
            break;
        case "salir":
            console.log("Saliendo del sistema. ¡Gracias!");
            break;
        default:
            console.log("Opción no reconocida. Por favor, intente de nuevo.");
    }
}

ejecutarOpcion(opcion);
