class Cachorro {

    nome: string;
    patas: number;
    corDoPelo?: string;

    constructor(nome: string, patas: number, corDoPelo?: string) {
        this.nome = nome;
        this.patas = patas;
        this.corDoPelo = corDoPelo;
    };

    latir(): string {
        return "Au au";
    };
};

let golden = new Cachorro('Mark', 4);

console.log(golden.corDoPelo);
console.log(golden.latir());