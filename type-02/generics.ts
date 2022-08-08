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