function getArray<T>(items: T[]) : T[] {
    return new Array<T>().concat(items);
};

let myList = getArray(['Tomate', 'Abacaxi', 'Miojo']);

let numbers = getArray([1, 2, 3]);

myList.push('Macarrão')

console.log(myList);

numbers.push(4)
console.log(numbers);


// Garantindo tipos

let bookList = getArray<string>(["Lord Of The Rings"]);

bookList.push("The Hitchhiker's Guide to the Galaxy");
// bookList.push(123456) // Vai dar erro!

console.log(bookList);

// =====================

function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}

let returnNumber = identity<number, string>(100, "Olá");
let returnString = identity<string, string>("100", "Mundo");
let returnBoolean = identity<boolean, string>(true, "Olá, Mundo!");

// =====================

class ProcessIdentity<T, U> {
    _value: T;
    _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}

let processor = new ProcessIdentity<number, string>(100, "Olá");
processor.getIdentity();  // imprime "Olá" e retorna 100