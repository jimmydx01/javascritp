//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const pares = (num) => {
  if (!num) return console.warn(`No has ingresado un numero`);
  if (typeof num !== "number")
    return console.error(`El dato ingresado "${num}" es un string`);
  let resultado = num / 2;
  if (Number.isInteger(resultado)) {
    console.log(`%c El numero ${num} es par`, "color:green");
  } else {
    console.log(`%c El numero ${num} es impar`, "color:red");
  }
};

pares(4);

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const celcius = (grados) => {
  if (!grados) return console.warn(`No has ingresado los °C a convertir`);
  if (typeof grados !== "number")
    return console.error(`El dato ingresado "${grados}" es un string`);
  let farenheit = (grados * 9) / 5 + 32;
  console.log(
    `%c ${grados}° C es igual a ${farenheit}° Farenheit`,
    "color:pink"
  );
};

celcius(1);

const farenheit = (grados = 0) => {
  if (typeof grados !== "number")
    return console.error(`El dato ingresado "${grados}" es un string`);
  let celcius = ((grados - 32) * 5) / 9;
  console.log(
    `%c ${grados}° F es igual a ${celcius.toFixed(1)}° Celcius`,
    "color:yellow"
  );
};

farenheit(64);

//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const binarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined)
    return console.warn("No se ha ingresado un número para convertir");
  if (typeof numero !== "number")
    return console.error("El valor ingresado no es un número");
  if (base === undefined)
    return console.warn("No se ha ingresado una base para la conversión");
  if (typeof base !== "string")
    return console.error("El valor ingresado para la base no es un string");
  if (base.length !== 1)
    return console.error(
      "No se ha ingresado un carácter válido a la unidad para la conversión"
    );

  let resultadoB = numero.toString(2),
    resultadoD = parseInt(numero, 2);

  return base.toUpperCase() === "B"
    ? console.log(
        `El número ${numero} en base decimal equivale a ${resultadoB} en base binaria`
      )
    : base.toUpperCase() === "D"
    ? console.log(
        `El número ${numero} en base binaria equivale a ${resultadoD} en base decimal`
      )
    : console.error(
        "No se ha ingresado un carácter válido a la unidad para la conversión"
      );
};

binarioDecimal();
binarioDecimal("4");
binarioDecimal(5);
binarioDecimal(5, true);
binarioDecimal(5, "Hola");
binarioDecimal(5, "H");
binarioDecimal(4, "B");
binarioDecimal(100, "D");

//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const descuento = (monto = undefined, descuento = undefined) => {
  if (monto === undefined) return console.warn("No se ha ingresado un monto");
  if (typeof monto !== "number")
    return console.error("El monto ingresado no es un número");
  if (monto === 0) return console.error("El monto no puede ser 0");
  if (Math.sign(monto) === -1)
    return console.error("El monto no puede ser negativo");
  if (descuento === undefined)
    return console.warn("No se ha ingresado el descuento a aplicar");
  if (typeof descuento !== "number")
    return console.error("El descuento ingresado no es un número");
  if (Math.sign(descuento) === -1)
    return console.error("No se ha ingresado un descuento válido");
  if (descuento === 0)
    return console.info(`No hay descuento. El monto total es ${monto}`);

  let x = monto - (descuento * monto) / 100;

  return descuento <= 100
    ? console.info(
        `El monto es de ${monto} con un descuento de ${descuento}. El monto total es de ${x}`
      )
    : console.error("No se ha ingresado un descuento válido");
};

descuento();
descuento(true);
descuento(230);
descuento(230, "Hola");
descuento(230, -120);
descuento(230, 120);
descuento(230, 0);
descuento(1000, 20);

//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

const calculaFecha = (fecha = undefined) => {
  if (!fecha) return console.warn("No se ha ingresado una fecha");
  if (!(fecha instanceof Date))
    return console.error("El valor ingresado no es una fecha");

  let operacion = new Date().getTime() - fecha.getTime(),
    resultado = Math.floor(operacion / (1000 * 60 * 60 * 24 * 365));

  return Math.sign(resultado) === -1
    ? console.info(
        `Faltan ${Math.abs(
          resultado
        )} años para el ${fecha.toLocaleDateString()}`
      )
    : Math.sign(resultado) === 1
    ? console.info(
        `Desde ${fecha.toLocaleDateString()} han pasado ${resultado} años`
      )
    : console.info(`Esta en el año actual de ${fecha.toLocaleDateString()}`);
};

calculaFecha();
calculaFecha(true);
calculaFecha(1984, 4, 23);
calculaFecha(new Date(1984, 4, 23));
calculaFecha(new Date());
calculaFecha(new Date(2130, 0, 5));

//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
console.log("%cEjercicio 18", "font-weight:bold; font-size:12px");
const contadorVocales = (texto = "") => {
  if (texto === "" || !texto) return console.warn("Escribe un texto.");
  if (typeof texto !== "string")
    return console.error(
      "Has insertado un número, objeto o array. Por favor introduce un texto."
    );
  if (texto.match(/[0-9.]/g))
    return console.error(
      "Has escrito un número o caracter especial en el string, inserta un texto."
    );

  let vocales = new RegExp("[aeiou]", "ig");
  let consonantes = new RegExp("[^aeiou]", "ig");

  let textoSinEspacios = texto.replace(/\s+/g, "");
  let numeroVocales = textoSinEspacios.match(vocales).length;
  let numeroConsonantes = textoSinEspacios.match(consonantes).length;

  console.log(
    `El nombre ${texto}, tiene ${numeroVocales} vocales y ${numeroConsonantes} consonantes.`
  );
};

contadorVocales("Hola Mundo");

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan Mircha") devolverá verdadero.
console.log("%cEjercicio 19", "font-weight:bold; font-size:12px");
const validadorNombre = (texto = "") => {
  if (texto === "" || !texto) return console.warn("Escribe un nombre.");
  if (typeof texto !== "string")
    return console.error(
      "Has insertado un número, objeto o array. Por favor introduce un nombre."
    );
  if (texto.match(/[0-9.]/g))
    return console.error(
      "Has escrito un número o caracter especial en el string, inserta un nombre."
    );

  let nombre = new RegExp(
    /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/
  );

  let nombreValido = nombre.test(texto);

  nombreValido
    ? console.info(`%cEl nombre ${texto} es válido.`, "color:green")
    : console.warn(`El nombre ${texto} es inválido intente con otro nombre.`);
};

validadorNombre("Jonathan Mircha");

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
console.log("%cEjercicio 20", "font-weight:bold; font-size:12px");
const validadorEmail = (texto = "") => {
  if (texto === "" || !texto) return console.warn("Escribe un nombre.");
  if (typeof texto !== "string")
    return console.error(
      "Has insertado un número, objeto o array. Por favor introduce un nombre."
    );

  let email = new RegExp(
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/
  );

  let emailValido = email.test(texto);

  emailValido
    ? console.info(`%cEl email ${texto} es válido.`, "color:green")
    : console.warn(
        `El email ${texto} es inválido, escriba correctamente su email.`
      );
};

validadorEmail("jonmircha@gmail.com");

console.log(
  "%c6ta Ronda de ejercicios hecha, gracias Jon, hecho por Codereggs",
  "color:lightblue; font-size:20px"
);

//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
console.log("%cEjercicio 21", "font-weight:bold; font-size:12px");
const numerosCuadrado = (numerosArray) => {
  if (numerosArray === undefined || numerosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(numerosArray))
    return console.error("Has introducido un dato que NO es un array.");
  for (let i = 0; i < numerosArray.length; i++) {
    if (typeof numerosArray[i] !== "number")
      return console.error(
        "Has introducido un string en el array, solo se admiten números."
      );
  }
  let dobles = numerosArray.map(function (x) {
    return Math.pow(x, 2);
  });
  dobles.includes(NaN)
    ? console.error(
        "Has insertado un texto dentro del array, inserta solo números válidos."
      )
    : console.log(`El array original es ${numerosArray}.
Este es el array al cuadrado ${dobles}.`);
};

numerosCuadrado([1, 4, 5]);

//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
console.log("%cEjercicio 22", "font-weight:bold; font-size:12px");
const numerosAltoBajo = (numerosArray) => {
  if (numerosArray === undefined || numerosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(numerosArray))
    return console.error("Has introducido un dato que NO es un array.");
  for (let i = 0; i < numerosArray.length; i++) {
    if (typeof numerosArray[i] !== "number")
      return console.error(
        "Has introducido un string en el array, solo se admiten números."
      );
  }
  console.log(
    `El array que colocaste es: ${numerosArray}, el número mas alto es ${Math.max(
      ...numerosArray
    )}, y el número mas bajo es ${Math.min(...numerosArray)}.`
  );
};

numerosAltoBajo([1, 4, 5, 99, -60]);

//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
console.log("%cEjercicio 23", "font-weight:bold; font-size:12px");
const numerosParesImpares = (numerosArray) => {
  if (numerosArray === undefined || numerosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(numerosArray))
    return console.error("Has introducido un dato que NO es un array.");
  for (let i = 0; i < numerosArray.length; i++) {
    if (typeof numerosArray[i] !== "number")
      return console.error(
        "Has introducido un string en el array, solo se admiten números."
      );
  }
  let pares = [];
  let impares = [];

  numerosArray.map(function (x) {
    x % 2 === 0 ? pares.push(x) : impares.push(x);
  });

  return console.log(`El array original que insertaste es: ${numerosArray}.
Los números pares de ese array son: ${pares}.
Los números impares de ese array son: ${impares}.`);
};

numerosParesImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.log(
  "%c7ma Ronda de ejercicios hecha, gracias Jon, hecho por Codereggs",
  "color:lightblue; font-size:20px"
);

//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
console.log("%cEjercicio 24", "font-weight:bold; font-size:12px");

const numerosAscDesc = (numerosArray) => {
  if (numerosArray === undefined || numerosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(numerosArray))
    return console.error("Has introducido un dato que NO es un array.");

  for (let i = 0; i < numerosArray.length; i++) {
    if (typeof numerosArray[i] !== "number")
      return console.error(
        "Has introducido un string en el array, solo se admiten números."
      );
  }
  const descendente = (a, b) => b - a;
  const ascendente = (a, b) => a - b;
  return console.log(`El array original es: ${numerosArray}.
    El array en orden ascendente es: ${numerosArray.sort(ascendente)}.
    El array en orden descendente es: ${numerosArray.sort(descendente)}.`);
};

numerosAscDesc([7, 5, 2, 8, 6]);

//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
console.log("%cEjercicio 25", "font-weight:bold; font-size:12px");

const eliminarDuplicados = (elementosArray) => {
  if (elementosArray === undefined || elementosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(elementosArray))
    return console.error("Has introducido un dato que NO es un array.");

  const detector = (a, i) => {
    return elementosArray.indexOf(a) === i;
  };
  let elementosFiltrados = elementosArray.filter(detector);

  return console.log(`El array original es el siguiente: ${elementosArray}.
El array sin elementos duplicados es el siguiente: ${elementosFiltrados}.`);
};

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
console.log("%cEjercicio 26", "font-weight:bold; font-size:12px");

const promedioArray = (numerosArray) => {
  if (numerosArray === undefined || numerosArray.length === 0)
    return console.warn("Inserta un dato válido.");
  if (!Array.isArray(numerosArray))
    return console.error("Has introducido un dato que NO es un array.");
  for (let i = 0; i < numerosArray.length; i++) {
    if (typeof numerosArray[i] !== "number")
      return console.error(
        "Has introducido un string en el array, solo se admiten números."
      );
  }

  const suma = (a, b) => {
    return a + b;
  };
  let total = numerosArray.reduce(suma);
  let promedio = total / numerosArray.length;

  return console.log(`El array original es: ${numerosArray}.
El promedio del array es ${promedio}.`);
};

promedioArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);

console.log(
  "%c8va Ronda de ejercicios hecha, gracias Jon, hecho por Codereggs",
  "color:lightblue; font-size:20px"
);
