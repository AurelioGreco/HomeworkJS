let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
for (var i = 0; i < numeros.length; i++) {
	if (!(numeros[i] % 2)) {
		console.log('Il numero ' + numeros[i] + ' è pari!');
	} else {
		console.log('Il numero ' + numeros[i] + ' è dispari!');
	}
}