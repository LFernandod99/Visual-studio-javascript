/*   1- A prefeitura de uma cidade fez uma pesquisa entre 20 de seus habitantes,
coletando dados sobre o salário e número de filhos. A prefeitura deseja saber:  
a) média do salário da população;
b) média do número de filhos;
c) maior salário;
d) percentual de pessoas com salário até R$100,00.*/
/*let salario

wille(salario < 4){
for(i == 0; i <= 4; i++){
    salario = prompt("Qual o salario da pessoa ")

    }
}
alert("o salario é: " + salario)*/




let media, medias100 = 0, maior = 0, Msalario = 0.0, mediaf, somaf = 0.0, soma = 0.0, salario = 0.0, filhos = 0.0; // inicialização
for (i = 1; i < 4; i++) {
    salario = prompt("Digite o salario da pessoa " + i + ": ");
    filhos = prompt("Digite a quantidade de filhos da pessoa " + i + ": ");

    somaf = parseFloat(somaf) + parseFloat(filhos);
    soma = parseFloat(soma) + parseFloat(salario);
    media = soma / 3
    mediaf = somaf / 3

    if (salario < 101) {
        maior = parseFloat(maior) + parseFloat(salario)
        medias100 = maior / 3
    }
    if (Msalario < salario) {
        Msalario = salario
    }


}


alert("A media de salario do pessoal que tem renda de: " + medias100);
alert("A soma dos salarios é: " + soma);
alert("A soma dos filhos da população é: " + somaf);
alert("A média salarial da população é: " + media);
alert("Este é o maior salario: " + Msalario)
alert("A média de filhos da população é: " + mediaf);