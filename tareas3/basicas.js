// 1.- Programa una funcion  que cuente  el numero de carateres  de una cadena de texto pe.miFuncion("hola mundo")devolvera 10//
function contarCaracteres(cadena) {
  if (typeof cadena === "string") {
    return cadena.length;
  } else {
    return "no es una cadena de texto";
  }
}
console.log(contarCaracteres("Hola Mundo"));

//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola"
   function recortarCaracteres(c, n) {
      if (typeof c === "string") {
        if (isNaN(n)) {
          console.log("Tu segundo parametro debe ser un numero entero");
        } else {
          console.log(c.slice(0, n));
        }
      } else {
        console.log("Debes ingresar una cadena");
      }
    }
    recortarCaracteres("Resultado de la cadena(esto no debe aparecer)", 22);


    //3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
    function separarCaracteres(c) {
      if (typeof c === "string") {
        let arreglo = c.split([" "]);
        console.log(arreglo);
      } else {
        console.log("Debes ingresar una cadena");
      }
    }
    separarCaracteres("hola que tal");
    
    //4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
    function repetirTexto(c, n) {
      if (typeof c === "string") {
        if (isNaN(n)) {
          console.log("Tu segundo parametro debe ser un numero entero");
        } else {
          let i = 0;
          while (i < n) {
            console.log("Hola mundo");
            i++
          }
        }
      } else {
        console.log("Debes ingresar una cadena");
      }
    }
    repetirTexto("Hola iteraciones", 3);

    //5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
    const invertString = (str) =>
      typeof str != "string"
        ? console.warn("No se ingresó una cadena")
        : str.split("").reverse().join("");
    // implementación:
    console.log(invertString("Hola mundo"));
    
    //6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    const repeticiones = (texto = "", search = "") => {
      if (texto != "" && search != "") {
        let transform = texto.trim().split(" ");

        var textRepeat = 0;

        transform.forEach((element) => {
          if (element === search) {
            textRepeat += 1;
          }
        });
        console.log(`El número de veces que se repite es: ${textRepeat}`);
      } else {
        console.warn("Ingrese datos correctos");
      }
    };

    repeticiones("Juan toledo tomas tomas tomas tomas", "tomas");

    repeticiones("", "vela");

    repeticiones();
    


    //7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (string = "") => {
  if (string != "") {
    var stringTotal = "";
    for (let i = 0; i < string.length; i++) {
      const element = string[i];
      stringTotal = element + stringTotal;
    }

    const value =
      stringTotal === string
        ? `${string} si es palindromo`
        : `Joder, ${string} no es palindromo`;

    console.log(value);
  } else {
    console.warn("Ingrese datos correctos");
  }
};

palindromo("adora");
palindromo("salas");
palindromo("ada");




//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.


const removeCharacter = (string = '' , removed = '') =>{
    if(string != ''){

        let transform = string.trim().split(' ');

        var textTranformRemoved = '';

        transform.forEach(element => {
            textTranformRemoved += ' ' + element.replace(removed, '');
        });
        console.log(`El resultado es: ${textTranformRemoved}`);
    }else{
        console.warn('Ingrese datos correctos');
    }
}

removeCharacter('xyz1, xyz2, xyz3, xyz4 y xyz5','xyz');
removeCharacter('xyz1, xyz2, xyz3, xyz4 y xyz5','xy');
removeCharacter('xyz1, xyz2, xyz3, xyz4 y xyz5','y');
removeCharacter('y');


//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const nRandom = () =>
  console.log(Math.round(Math.random() * (600 - 501 + 1) + 501));
  console.log(numeroAleatorio());
  console.log(numeroAleatorio());
  console.log(numeroAleatorio());

//  10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (n = undefined) => {
  if (isNaN(n)) return console.error("No ingresaste un numero");
  let nn = String(n).split("").reverse().join("");
  nn == n
    ? console.log(`${nn} si es un capicua`)
    : console.log(`${nn} no es un capicua`);
};
/*prueba*/
  console.log(capicua(123));
  console.log(capicua(2002));
  console.log(capicua());
  console.log(capicua("abc"));




  //11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
  const factorial = (n = undefined) => {
    if (!n) return console.warn("No ingresaste ningun valor");
    if (n <= 0)
      return console.error("Solo se permiten numeros enteros positivos");
    let valor = 1;
    for (i = 1; i <= Math.abs(n); i++) valor = valor * i;
    console.log(`${n}! = ${valor}.`);
  };

  //impresion
  nRandom();
  capicua(2002);
  factorial(5);


  
  //12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
  function primos(num = undefined) {
	if (!num) return console.warn(`No has ingresado un numero`);
	if (typeof num !== "number") return console.error();
	`El dato ingresado "${num}" es un string`;
	const arregloResultados = [];

	for (let i = 1; i < 10; i++) {
		let division = num / i;
		!Number.isInteger(division)
			? arregloResultados.push("No es Entero")
			: arregloResultados.push("Es Entero");
	}

	let b = 0;

	for (let a = 0; a < arregloResultados.length; a++) {
		if (arregloResultados[a] === "Es Entero") {
			b = b + 1;
		}
	}

	b === 1 || b === 2
		? console.log(`%c El numero ${num} si es primo`, "color:green")
		: console.log(`%c El numero ${num} no es primo`, "color:red");
}

primos(17);









