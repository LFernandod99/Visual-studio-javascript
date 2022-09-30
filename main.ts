// let imc = (peso: number, altura: number) => peso / (altura ** 2);
// console.log(`Seu IMC é `+imc(95, 1.93));


let estoque: string[] = []

console.log ("Os itens disponíveis no estoque são: ")
estoque.push ('tênis', 'chuteira', 'meia', 'bolas', 'quimono', 'camisa');

for (let i of estoque){
    console.log (i)
}

estoque.splice(0, 1);
    console.log(`O tênis esta fora de estoque`)


console.log (`Itens disponiveis no momento `)
console.log (estoque)
