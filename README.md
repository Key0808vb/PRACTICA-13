# PRACTICA-13

Este repositorio contiene: Ejercicios de tarea
Los siguientes ejercicios están diseñados para que los alumnos practiquen el uso de la sentencia switch, incluyendo el manejo del break y la cláusula default.
Ejercicio 1: Clasificación de Calificaciones
Objetivo: Crear una función que reciba una letra que representa una calificación (A, B, C, D, F) y devuelva una descripción del nivel de rendimiento, usando la sentencia switch.
Instrucciones:
* Crea una función llamada clasificarCalificacion(calificacion) que reciba un string con la letra de la calificación.
* Utiliza un switch para determinar la descripción:
 * A: “Excelente rendimiento”
 * B: “Buen rendimiento”
 * C: “Rendimiento satisfactorio”
 * D: “Necesita mejorar”
 * F: “Reprobado”
* Si la calificación no es ninguna de las anteriores (usa el default), la función debe imprimir: “Calificación no válida.”
* Incluye un caso adicional para a, b, c, d y f (minúsculas) que agrupe con sus respectivas mayúsculas, para hacer el código más robusto (aplicando fall-through).
  
Ejercicio 2: Menú de Opciones para Cajero Automático
Objetivo: Simular un menú de opciones para un cajero automático usando switch y la función console.log() para mostrar las acciones.
Instrucciones:
* Crea una función llamada ejecutarOpcion(opcion) que reciba un número entero (del 1 al 3) o la palabra “salir” como string.
* Dentro de la función, implementa un switch para manejar las siguientes opciones:
 * Caso 1: Imprimir: “Realizando un Retiro de Efectivo…”
 * Caso 2: Imprimir: “Consultando Saldo en Cuenta…”
 * Caso 3: Imprimir: “Accediendo a Transferencias…”
 * Caso ‘salir’: Imprimir: “Saliendo del sistema. ¡Gracias!”
* Utiliza la cláusula default para cualquier otra entrada, imprimiendo: “Opción no reconocida. Por favor, intente de nuevo.”
* Asegúrate de incluir la sentencia break donde sea necesario.

## Ejercicio 1: 

Archivo: [EJE1.ClasificacióndeCalificaciones.JS](./EJE1.ClasificacióndeCalificaciones.JS)

## Ejercicio 2: 

Archivo: [EJE2.MenúdeOpcionesdeCajeroAutomático.JS](./EJE2.MenúdeOpcionesdeCajeroAutomático.JS)

Hecho por **Keiry Ventura**
