// 1. Calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("Solución 1:");
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log(calcularAreaRectangulo(7, 2)); // Resultado: 14
console.log(calcularAreaRectangulo(10, 5)); // Resultado: 50
console.log("//////////////////////");

/* 
Para resolver este ejercicio, vi en la consigna que la fórmula que tenía que utilizar es longitud por ancho. 
Puse estos dos elementos como los parámetros de la función.
Luego, al pasar 2 valores como argumentos, la función retorna el resultado, multiplicandolos.
*/

// 2. Contar palabras en una cadena
function contarPalabras(cadena) {
    return cadena.split(" ").length;
}

console.log("Solución 2:");
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log(contarPalabras("Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit")); // Resultado: 14
console.log(contarPalabras("Palabra")); // Resultado: 1
console.log("//////////////////////");

/* 
En este ejercicio utilicé el método split de JavaScript para dividir la cadena (parámetro de la función) en un array de palabras usando el espacio como separador. 
Luego usé la propiedad length para contar las palabras. 
Finalmente, pasé diferentes frases de distinta longitud como argumentos para probar que funcione.
*/

// 3. Invertir una cadena
function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

console.log("Solución 3:");
console.log(invertirCadena("hola")); // Resultado: "aloh"
console.log(invertirCadena("javascript")); // Resultado: "tpircsavaj"
console.log(invertirCadena("12345")); // Resultado: "54321"
console.log("//////////////////////");

/* 
Para invertir la cadena, pensé en usar los métodos split para separar los caracteres en un array, luego invertí el array con reverse y. finalmente, lo uní de nuevo en una cadena con join.
*/

// 4. Encontrar el palíndromo
function esPalindromo(cadena) {
    let cadenaMinusculas = cadena.toLowerCase();
    return cadenaMinusculas === invertirCadena(cadenaMinusculas);
}

console.log("Solución 4:");
console.log(esPalindromo("neuquen")); // Resultado: true
console.log(esPalindromo("reconocer")); // Resultado: true
console.log(esPalindromo("javascript")); // Resultado: false
console.log("//////////////////////");

/* 
Para comprobar si una palabra es un palíndromo, pensé primero en pasar a minúsculas las letras para que no me tirara resultados erróneos. 
Reutilicé la función creada en el punto anterior que se encargaba de invertir una cadena.
Luego comparé la cadena original con su versión invertida. 
Si son iguales, es un palíndromo y  se retorna true.
*/

// 5. Convertir edad de un perro a años humanos
function edadCanina() {
    let edad = parseInt(prompt("Introduce la edad de tu perro en años:"));
    console.log(`Tu perro tiene ${edad * 7} años humanos.`);
}

console.log("Solución 5:");
edadCanina(); // Muestra un mensaje en consola con la edad del perro convertida a años humanos.
console.log("//////////////////////");

/* 
Para este ejercicio, usé la función prompt() para recibir un valor del usuario. 
Convertí el valor a un número entero usando parseInt() y luego calculé la edad multiplicándola por 7. 
Mostré el resultado por consola.
*/
