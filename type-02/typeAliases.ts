type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {
    console.log("O valor da coordenada x é: " + pt.x);
    console.log("O valor da coordenada y é: " + pt.y);
};

printCoord({ x: 10, y: -5 });

type Num = {
    x: number;
    y: number;
};

function sumNum(n: Num) {
    let sum = n.x + n.y;

    return `O resultado da soma é ${sum}`;
};

console.log(sumNum({ x: 10, y: 10 }));
