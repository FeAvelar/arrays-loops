const original = [5, 7, 13, 17, 26, 34, 118, 245];

for (let i = 0; i < original.length; i++) {
    const elemento = original[i];
    if (original[i] >= 10 && original[i] <= 20 || original[i] > 100) {
        indice = i;
        console.log(elemento);
    }
}