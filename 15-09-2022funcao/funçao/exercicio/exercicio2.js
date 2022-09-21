// 2 - Criar uma função que converta uma temperatura 
// de Celsius para Fahrenheit

let cel

function converte (cel){
    cel = prompt("Digite o valor de Celsius que você deseja converter para Fahrenheit: ");
    let fare = cel * 1.8 + 32;
    
    return alert("Você converteu " + cel + "ºC " + " para " + fare + "°F")
}
converte(cel);