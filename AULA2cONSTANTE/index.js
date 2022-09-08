//Constante é fixa (Não muda) fica fora do escopo da pra por dentro mas n é legal
//Var global também é fora do escopo porém pode ser chamada dentro
//Let é criada dentro do escopo e morre la memo


let nome, peso, altura, dataI, diabetico

alert("Bem vindo ao centro medico Luiz Fernando \n aperte OK para efetuar seu cadastro")

nome      = prompt("Digite seu nome: ");
peso      = prompt("Digite seu peso: ");
altura    = prompt("Digite sua altura: ");
dataI     = prompt("Digite a data da sua internação: ");
diabetico = prompt("Você é diabetico? ");

alert("Nome: " + nome +
       "\n" + "Peso: "               + peso + " Kg" +
       "\n" + "Altura: "             + altura +
       "\n" + "Data de internação: " + dataI +
       "\n" + "Duabetico: "          + diabetico);

