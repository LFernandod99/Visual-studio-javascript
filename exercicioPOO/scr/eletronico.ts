export class Eletronico{
    produto1: string;
    produto2: string;
    produto3: string;

    constructor(
    produto1: string,
    produto2: string,
    produto3: string

    ){
        this.produto1 = produto1;
        this.produto2 = produto2;
        this.produto3 = produto3;
    }

    verproduto(){
        console.log(`Os produtos eletrônicos adquiridos são:${"\nPrimeiro produto:" + this.produto1 +
                      "\nSegundo produto: " + this.produto2 + "\nO terceiro produto é: " + this.produto3} `)
    }
}