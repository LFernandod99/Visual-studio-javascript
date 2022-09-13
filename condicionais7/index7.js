let b, a, t

b = prompt ("Digite um valor para a base do triângulo: ")
a = prompt ("Digite um valor para a altura do triângulo: ")

if (b > 0 && a > 0) {
    t = (b*a)/2
    alert ("A área do triângulo é de " + t + ".")
} else {
    alert ("Não podemos fazer a operação com números não condizentes.")
}
