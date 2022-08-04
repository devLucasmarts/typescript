"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcRectangleArea = exports.calcSquareArea = exports.calcTriangleArea = exports.sumArray = exports.add = exports.showNameAndAge = exports.greeter = void 0;
function greeter(name) {
    return `Eae ${name}`;
}
exports.greeter = greeter;
;
function showNameAndAge(name, age) {
    return `${name} ${age}`;
}
exports.showNameAndAge = showNameAndAge;
;
function add(x, y) {
    return x + y;
}
exports.add = add;
;
function sumArray(numbers) {
    return numbers.reduce(add, 0);
}
exports.sumArray = sumArray;
;
function calcTriangleArea(base, height) {
    const area = (base * height) / 2;
    return area;
}
exports.calcTriangleArea = calcTriangleArea;
;
function calcSquareArea(side) {
    const area = side ** 2;
    return area;
}
exports.calcSquareArea = calcSquareArea;
;
function calcRectangleArea(base, height) {
    const area = base * height;
    return area;
}
exports.calcRectangleArea = calcRectangleArea;
;
