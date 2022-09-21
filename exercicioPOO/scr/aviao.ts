export class Aviao{
    partida:  string;
    destino:  string;
    horarioP: number;
    horarioC: number;

    constructor(
        partida:  string,
        destino:  string,
        horarioP: number,
        horarioC: number){

            this.partida  = partida;
            this.destino  = destino;
            this.horarioP = horarioP;
            this.horarioC = horarioC;
        }

        verAviao(){
            console.log(`BOM DIA SENHORES (AS) PASSAGEIROS ${"\nO voo com partida de: " + this.partida +
                        "\nDestino: " + this.destino + "\nSai as: " + this.horarioP + "hs" + "\nCom previsão de chegada as: " 
                        + this.horarioC + "hs"}`)

        }
    

}