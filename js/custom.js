/* 1] Conversión de Celsius a Fahrenheit | Conversion from Celsius to Fahrenheit */
document.getElementById("output-cnadf").textContent = 32;
document.getElementById("cnadf").addEventListener("change", function convertFtoC() {
  let c = document.getElementById("cnadf").value;
  let f = c * (9 / 5) + 32;
  document.getElementById("output-cnadf").textContent = f;
});
/* 2] Convertir de Libras a Kilogramos | Convert from Pounds to Kilograms*/
document.getElementById("output-kg").textContent = 0;
document.getElementById("pound").addEventListener("change", function convertPoundToKg() {
  let pound = document.getElementById("pound").value;
  let kg = pound / 2.2046;
  kg *= 1000;
  kg = Math.round(kg);
  kg /= 1000;
  document.getElementById("output-kg").textContent = kg;
});
/* 3] Convertir de kilómetros a millas | Convert from kilometers to miles */
document.getElementById("output-mi").textContent = 0;
document.getElementById("kilometer").addEventListener("change", function convertKmToMi() {
  let kilometer = document.getElementById("kilometer").value;
  let mi = kilometer * 0.62;
  mi *= 1000;
  mi = Math.round(mi);
  mi /= 1000;
  document.getElementById("output-mi").textContent = mi;
});
/* 4] Calcule el área de un triangulo rectángulo | Calculate the area of a right triangle */
document.getElementById("calculate").addEventListener("click", function area() {
  let base = document.getElementById("base").value;
  let height = document.getElementById("height").value;
  let area = (base * height) / 2;
  document.getElementById("output-area").textContent = area;
});
/* 5] El número mayor | The largest number */
let numeros = [4, 6, 76, 20, 64, 128, 500, 3, 5];
let numMax = 0;
for (let i = 0; i < numeros.length; i++) {
  // console.log(numeros[i]);
  if (numeros[i] >= numMax) {
    numMax = numeros[i];
  }
}
document.getElementById("output-number").textContent = numMax;
/* 6] Par y impar | Even and odd */
let numbers = [1, 6, 8, 4, 2, 7, 10, 31, 15];
for (var i = 0; i < numbers.length; i++) {
  if (!(numbers[i] % 2)) {
    // console.log('Il numero ' + numbers[i] + ' è pari!');
    document.getElementById("output-evenOdd").textContent += `The number ${numbers[i]} is even! `;
  } else {
    // console.log('Il numero ' + numbers[i] + ' è dispari!');
    document.getElementById("output-evenOdd").textContent += `The number ${numbers[i]} is odd! `;
  }
}
/* 7] Tabla | Table */
for (var i = 1; i <= 5; i++) {
  let ris = '';
  for (let j = 1; j <= 5; j++) {
    ris += ` ${i * j}`;
  }
  console.log(ris);
  document.getElementById("output-table").textContent += `${ris} || `;
};
/* 8] Mayor número | Greater number */
const greaterNumber = () => {
  let maxValue = Math.max(5, 2, 6);
  document.getElementById("output-greater").textContent = maxValue;
}
greaterNumber();
/* 9] Más letras | More lyrics */
let heroes = ['Nightcrawler', 'Profesor Charles Xavier', 'Deadpool', 'Ciclope', 'Magneto'];
const largestNameOfArray = (heroes) => {
  var nameHero = "";
  for (let h = 0; h < heroes.length; h++) {
    let hero = heroes[h];
    if (hero.length > nameHero.length) {
      nameHero = hero;
    }
  }
  console.log(nameHero);
  document.getElementById("output-longerName").textContent = nameHero;
};
largestNameOfArray(heroes);
/* 10] Todos los nombres que empiezan con una determinada letra | All names that start with a certain letter */
let heroes2 = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
const heroesThatStartsWith = (heroes2, letter) => {
  let newNameList = [];
  for (let i = 0; i < heroes2.length; i++) {
    let name = heroes2[i];
    if (name.startsWith(letter)) {
      newNameList.push(name);
    }
  }
  console.log(newNameList);
  document.getElementById("output-sameLetter").textContent = newNameList;
}
heroesThatStartsWith(heroes2, 'S');