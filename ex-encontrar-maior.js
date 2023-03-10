const numeros = [3, 4, 1, 8, 11, 7, 5];

let maiornumero = 0;

for (let i = 0; i < numeros.length; i++) {
    let testador = numeros[i];
    if (testador > maiornumero) {
        maiornumero = testador;
    }
} 
console.log(maiornumero);