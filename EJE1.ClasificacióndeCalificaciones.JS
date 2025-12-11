// Objetivo: Crear una función que reciba una letra que representa una calificación (A,
B, C, D, F) y devuelva una descripción del nivel de rendimiento, usando la sentencia
switch.
// Instrucciones: Crea una función llamada clasificarCalificacion(calificacion) que reciba un string con la letra de la calificación.
// Utiliza un switch para determinar la descripción:
 * A: “Excelente rendimiento”
 * B: “Buen rendimiento”
 * C: “Rendimiento satisfactorio”
 * D: “Necesita mejorar”
 * F: “Reprobado”
* Si la calificación no es ninguna de las anteriores (usa el default), la función debe
imprimir: “Calificación no válida.”
* Incluye un caso adicional para a, b, c, d y f (minúsculas) que agrupe con sus
respectivas mayúsculas, para hacer el código más robusto (aplicando fall-through).

console.log("=======================================");
console.log("       MENÚ DE CALIFICACIONES");
console.log("=======================================");
console.log("A - Excelente rendimiento");
console.log("B - Buen rendimiento");
console.log("C - Rendimiento satisfactorio");
console.log("D - Necesita mejorar");
console.log("F - Reprobado");
console.log("---------------------------------------");
console.log("Ingrese una letra de calificación para clasificarla:");
console.log("=======================================");

function clasificarCalificacion(calificacion) {
  switch (calificacion) {
    case 'A':
    case 'a':
      console.log('Excelente rendimiento');
      break;

    case 'B':
    case 'b':
      console.log('Buen rendimiento');
      break;

    case 'C':
    case 'c':
      console.log('Rendimiento satisfactorio');
      break;

    case 'D':
    case 'd':
      console.log('Necesita mejorar');
      break;

    case 'F':
    case 'f':
      console.log('Reprobado');
      break;

    default:
      console.log('Calificación no válida.');
  }
}
