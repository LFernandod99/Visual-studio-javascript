import { animal } from "./animal";

 export class Cachorro extends animal{
    raca: string;
    cor: string;
    
    constructor(
    raca:    string,
    cor:     string,
    nome:    string,
    especie: string,
    idade:   number,
    patas:   string
    ){
        super(nome, especie, idade, patas)
        this.raca    = raca;
        this.cor     = cor;
        this.especie = especie;
        this.idade   = idade;
        this.patas   = patas
    }

    somCachorro(): void {
        console.log(`RUF RUF`)
    }
 }