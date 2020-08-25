let numero = 0;

numero = prompt('Ingresa el numero y mira en consola la altura de tu arbol ');
acumulador = '';
let estrella = '★';
let tronco = '|'

console.log(estrella);

for(let i=0; i<numero; i++){
acumulador = acumulador +'▲';

console.log('' + acumulador);
}

console.log(tronco);