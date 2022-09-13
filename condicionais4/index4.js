let numero;

numero = prompt("Digite um número: ");

if(numero %2 == 0 && numero >= 0){
    alert("Este número é par e positivo");
}else if(numero %2 == 0 && numero <0){
    alert("Este número é par e negativo");
}else if(numero %2 != 0 && numero >= 0){
    alert("Este número é impar e positivo")
}else if(numero %2 != 0 && numero < 0){
    alert("Este número é impar e negativo")
}