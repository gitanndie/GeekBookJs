function horasVividas() {
    let años = 30;
    let horas = 8640;
    
    horasVividas = (años * horas);
}
horasVividas()
console.log(`las horas vividas son ${horasVividas}`);

console.log("las horas vividas son "+horasVividas+ 'caracteres');

document.querySelector('body').innerHTML =`<h1>Mis horas vividas son ${horasVividas}</h1>`;