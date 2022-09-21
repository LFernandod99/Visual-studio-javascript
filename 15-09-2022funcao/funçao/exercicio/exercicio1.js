// Criar uma função para calcular a 
// porcentagem de um número
let num, porcento
function porcentagem (num, porcento){
    num      = prompt("Digite um numero: ")
    porcento = prompt("Qual a porcentagem que você quer desse numero? ")
    let resultado = parseFloat(num) * parseFloat(porcento) / 100
    return alert("A porcentagem é: " + resultado)
}
porcentagem(num, porcentagem)
