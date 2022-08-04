import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.showNameAndAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.calcTriangleArea(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.calcTriangleArea(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.calcTriangleArea(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.calcSquareArea(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.calcSquareArea(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.calcSquareArea(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.calcRectangleArea(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.calcRectangleArea(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.calcRectangleArea(100, 200)}cm²`);
