let codigo, numeroH, excesso, valorHE, st, s

codigo  = prompt("Digite o seu codigo de identificação: ");
numeroH = prompt("Quantas horas você trabalhou esse mês? ");
excesso = numeroH - 50
valorHE = excesso * 20
st      = valorHE + 500
s       = numeroH * 10
 if(numeroH > 50){
    alert("OLÁ " + codigo + "\nO salario btotal é: " + st )
 } else{
    alert("OLÁ " + codigo + "\nSeu salario é: " + s)
 }