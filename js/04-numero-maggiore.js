let numeros = [1, 6, 80, 40, 2, 7, 10, 3, 5];
let numMax = 0;
for (let i = 0; i < numeros.length; i++) {
	console.log(numeros[i]);
	if (numeros[i] >= numMax) {
		numMax = numeros[i];
	}
}
console.log('Numero massimo: ' + numMax);