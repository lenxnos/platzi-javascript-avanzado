// Boolean
let muted: boolean = true;
muted = false;

// Números 
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = "Richard";
let saludo = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Raul'];
// people.push('Juan');

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Paul');
peopleAndNumbers.push(9001);

// Enum

enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

let colorFavorito: Color = Color.Azul;
console.log(`Mi color favorito es ${colorFavorito}`);

// Any
let comodin: any = "Joker";
comodin = { type: 'Wildcard' };

// Object
let someObject: object = { type: 'Wildcard' };