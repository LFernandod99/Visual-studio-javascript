export class Patinete{
    roda:   number;
    guidao: string;

    constructor(
        roda:   number,
        guidao: string
    
    ){
        this.roda   = roda;
        this.guidao = guidao; 
    }

    verPatinete(){
        console.log(`Você comprou um patinete ${"\nQuantidade de rodas: " + this.roda +
                     "\nGuidão: " + this.guidao}`)
    }
}