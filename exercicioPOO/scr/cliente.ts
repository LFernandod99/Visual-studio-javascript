export class Cliente{
        nome:  string;
        idade: string;
        email: string;

        constructor(
        nome:  string,
        idade: string,
        email: string
        ){
            this.nome  = nome;
            this.idade = idade;
            this.email = email;
        }

        verCliente(){ //METODO
            console.log(`Os dados do cliente é: ,\nNome:${ this.nome}
                      \nIdade: ${this.idade}  \nE-mail: ${this.email}`)
        }

}
