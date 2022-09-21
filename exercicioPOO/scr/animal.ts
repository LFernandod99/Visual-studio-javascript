export abstract class animal{
    nome:    string;
    especie: string
    idade:   number
    patas:   string

    constructor(
    nome:    string,
    especie: string,
    idade:   number,
    patas:   string

    ){
        this.nome    = nome;
        this.especie = especie;
        this.idade   = idade;
        this.patas   = patas;
    }
     somCachorro():void{}

     somCavalo():void{}

     somPreguica():void{}

}