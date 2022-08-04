// Tipos primitivos

// Boolean
let yes: boolean = true; // Cria uma variável yes e diz que o seu tipo é boolean;
let no: boolean = false; // Cria uma variável no e diz que o seu tipo é boolean;

// Number - são valores númericos e de pontos flutuantes
let x: number;

let y: number = 0;
let z: number = 123456.44;

// string: recebe uma sequência de caracteres armazenados como unidades de código UTF-16 Unicode.

let s: string = 's';
let empty: string = '';
let abc: string = 'abc';

// Void: indica ausência de valor, como em uma função que não retorna nada.
const helloWorld = (): void => {
    console.log('Hello World');
};

// null e undefined: são subtipos de todos os outros tipos.
let nullValue = null;
let undefinedValue = undefined;

// =================================

// Inferência de tipo

let flag = true; // o compilador irá inferir o tipo boolean
const numberPI = 3.1416; // o compilador irá inferir o tipo number
let message = "Hello World!"; // o compilador irá inferir o tipo string
