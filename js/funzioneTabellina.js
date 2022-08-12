function stampareTabellina(base, limite) {
	for (var i = 1; i <= limite; i++) {
		let res = base * i;
		console.log(base + " * " + i + " = " + res);
	}
}

stampareTabellina(3, 10);