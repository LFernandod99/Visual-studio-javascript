export class Funcionario{
    codigo: number;
    nome:   string;
    cargo:  string;

    constructor(
    codigo: number,
    nome:   string,
    cargo:  string
    ){
        this.codigo = codigo;
        this.nome   = nome;
        this.cargo  = cargo;
    }

    verFuncionario(){
        console.log(`BOM DIA FUNCIONÁRIO ${this.nome + "\nCódigo: " + this.codigo + "\nNome: " +
                    this.nome + "\nCargo: " + this.cargo}`)
    }
}