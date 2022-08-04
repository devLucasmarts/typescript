export function greeter(name: string) {
    return `Eae ${name}`;
};

export function showNameAndAge(name: string, age: number) {
    return `${name} ${age}`;
};

export function add(x: number, y: number) {
    return x + y;
};

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
};

export function calcTriangleArea(base: number, height: number): number {
    const area = (base * height) / 2;

    return area;
};

export function calcSquareArea(side: number): number {
    const area = side ** 2;

    return area;
};

export function calcRectangleArea(base: number, height: number): number {
    const area = base * height;

    return area;
};

