// Funciones

function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 5);

function createAdder (a: number): (number) => number {
  return function (b: number) {
    return b + a;
  }
}

const addFromFour = createAdder(4);
const fourPlusSix = addFromFour(6);
console.log(fourPlusSix);

function fullName(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
}

const richard = fullName('Richard');