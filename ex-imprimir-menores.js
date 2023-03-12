const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

for (let i = 0; i < arrayA.length; i++){
    const elementoA = arrayA[i];
    if (arrayA[i] < arrayB[i]) {
        console.log(elementoA);
    }
}
for (let i = 0; i < arrayB.length; i++){
    const elementoB = arrayB[i];
    if (arrayB[i] < arrayA[i]){
    console.log(elementoB);
    }
}