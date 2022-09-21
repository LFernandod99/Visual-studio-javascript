export class Paciente{
    nome:   string;
    idade:  number;
    doenca: string;

    constructor(
    nome:   string,
    idade:  number,
    doenca: string
    ){
        this.nome   = nome;
        this.idade  = idade;
        this.doenca = doenca;
    }

    verPaciente(){
        console.log(`BOM DIA PACIÊNTE ${this.nome + "\nIdade: " + this.idade +
                      "\nDoença: " + this.doenca}`)
    }
}