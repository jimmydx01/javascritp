//27) Programa una clase llamada Pelicula.
/* La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western. */

console.log("%cEjercicio 27", "font-weight:bold; font-size:12px");
const generosAceptados = [
  "Action",
  "Adult",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "Game-Show",
  "History",
  "Horror",
  "Musical",
  "Music",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western",
];
class Pelicula {
  constructor({ id, titulo, director, anio, paises, genero, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.anio = anio;
    this.paises = paises;
    this.genero = genero;
    this.calificacion = calificacion;

    this.validacion0(id);
    this.validacion1(titulo);
    this.validacion2(director);
    this.validacion3(anio);
    this.validacion4(paises);
    this.validacion5(genero);
    this.validacion6(calificacion);
  }

  validacion0(id) {
    if (id === undefined)
      return console.warn("Falto insertar la id de la película.");
    if (!/^([A-Za-z]{1,2})+([0-9]{1,7})\w/gi.test(id) || id.length !== 9)
      return console.error("Introduce un Id válido en formato IMDB.");
    if (typeof id !== "string")
      return console.error(
        "Has introducido un dato que NO es una cadena de texto."
      );
  }
  validacion1(titulo) {
    if (titulo === undefined || titulo === "")
      return console.warn("Falto insertar el título de la película.");
    if (titulo.length > 100)
      return console.error("El título excede el máximo de 100 caracteres.");
    if (typeof titulo !== "string")
      return console.error("El título debe ser una cadena de texto.");
  }
  validacion2(director) {
    if (director === undefined)
      return console.warn(
        "Falto insertar el nombre del director de la película."
      );
    if (typeof director !== "string")
      return console.error("El título debe ser una cadena de texto.");
    if (director.length > 100)
      return console.error(
        "El nombre del director excede el máximo de 50 caracteres."
      );
  }
  validacion3(anio) {
    if (anio === undefined)
      return console.warn("Falto insertar la id de la película.");
    if (typeof anio !== "number")
      return console.error("El año de publicación debe ser un número.");
    if (Math.floor(anio) - anio !== 0)
      return console.error(
        "El dato introducido es un decimal, inserta un año correcto. Ej. 1994."
      );
    if (Math.sign(anio) === -1)
      return console.error(
        "El año que colocastes está en negativo, inserta un año válido. Ej. 1995"
      );
    let anioString = anio.toString();
    if (anioString.length !== 4)
      return console.error("Inserta un año completo correcto. Ej. 1995.");
  }
  validacion4(paises) {
    if (paises === undefined)
      return console.warn("Falto insertar el pais donde se filmó la película.");
    if (!Array.isArray(paises))
      return console.error("Has introducido un dato que NO es un array.");
    for (let i = 0; i < paises.length; i++) {
      if (typeof paises[i] !== "string") {
        return console.error(
          "Has introducido un dato que NO es un array, solo se admiten cadenas de texto en este caso nombre de paises."
        );
      }
    }
  }
  validacion5(genero) {
    if (genero === undefined)
      return console.warn("Falto insertar el genero de la película.");
    if (!Array.isArray(genero))
      return console.error("Has introducido un dato que NO es un array.");
    const generosAceptadosMin = generosAceptados.map((a) => a.toLowerCase());
    let generoMin = genero.map((b) => b.toLowerCase());
    for (let i = 0; i < genero.length; i++) {
      if (typeof genero[i] !== "string")
        return console.error(
          "Has introducido un dato que NO es un array, solo se admiten cadenas de texto en este caso nombre de generos. Si quiere ver el listado de generos aceptados escriba Peliculas.generosAceptados(); y tendrá el listado."
        );
      if (!generosAceptadosMin.includes(generoMin[i]))
        return console.error(
          `Has introducido un género de películas no aceptado. Los generos aceptados son ${generosAceptados}.`
        );
    }
  }

  validacion6(calificacion) {
    if (calificacion === undefined)
      return console.warn("Falto insertar la calificación de la película");
    let calificacionStr = calificacion.toString();
    if (typeof calificacion !== "number")
      return console.error("Insertastes un dato que NO es un número.");
    if (calificacionStr.length > 3)
      return console.error(
        "Inserta una calificación válida con 1 solo decimal."
      );
    if (calificacion < 0 || calificacion > 10)
      console.error("Inserta una calificación válida entre el 0 al 10.");
    if (Math.sign(calificacion) === -1)
      return console.error(
        "No se admiten números negativos. Inserta una calificación válida."
      );
  }

  static generosAceptados() {
    console.info(`Estos son los géneros aceptados: ${generosAceptados}.`);
  }

  fichaTecnica() {
    if (
      !this.id ||
      !this.titulo ||
      !this.director ||
      !this.anio ||
      !this.paises ||
      !this.genero ||
      !this.calificacion
    ) {
      return console.warn(
        "Todos los datos son obligatorios. Son todos los siguientes: ID, Título, Director, Año, Paises, Genero, Calificacion."
      );
    } else {
      let generO = this.genero.map(function (x) {
        return x[0].toUpperCase() + x.slice(1);
      });
      let generOSeparado = generO.join(", ");
      return console.info(
        `Título: ${this.titulo}.\nID IMDB: ${this.id}. \nAño: ${this.anio}. \nDirector: ${this.director}. \nPaís: ${this.paises}. \nGénero: ${generOSeparado}. \nCalificación: ${this.calificacion}`
      );
    }
  }
}

//Una película

const cenicienta = new Pelicula({
  id: "tt1661199",
  titulo: "Cinderella",
  director: "Kenneth Branagh",
  anio: 1995,
  paises: ["España"],
  genero: ["Drama", "family", "fantasy"],
  calificacion: 10,
});

cenicienta.fichaTecnica();

// Las tres películas

const tresPeliculas = [
  {
    id: "tt0120338",
    titulo: "Titanic",
    director: "James Cameron",
    anio: 1997,
    paises: ["Spain"],
    genero: ["Drama", "Romance"],
    calificacion: 7.8,
  },
  {
    id: "tt0046183",
    titulo: "Peter Pan",
    director: "Clyde Geronimi",
    anio: 1953,
    paises: ["USA", "London"],
    genero: ["Animation", "Adventure", "family"],
    calificacion: 7.3,
  },
  {
    id: "tt0088763",
    titulo: "Back to the future",
    director: "Robert Zemeckis",
    anio: 1985,
    paises: ["USA"],
    genero: ["adventure", "comedy", "sci-fi"],
    calificacion: 8.5,
  },
];

tresPeliculas.forEach((x) => {
  let triPack = new Pelicula(x);
  triPack.fichaTecnica();
});

console.log(
  "%cÚltima ronda de ejercicios hecha, gracias Jon, hecho por Codereggs",
  "color:lightblue; font-size:20px"
);
