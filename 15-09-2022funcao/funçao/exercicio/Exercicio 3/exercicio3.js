

let peso, altura, imc

function indice(peso,altura){
    peso = prompt("Digite seu peso para o calculo do seu indice de massa corporal: ")
    altura = prompt("Digite sua altura em metros: ")

     imc = peso/ (parseFloat(altura) * parseFloat (altura)) 
    if(imc < 18.5){
       return alert("Seu imc é " + imc + " Abaixo do peso")

    }else if(imc >= 18.5 && imc < 24.9){
        return alert("Seu imc é " + imc + " Seu peso está normal")

    }else if(imc >= 24.9 && imc < 29.9)
    return alert("Seu imc é " + imc + " você esta Obeso");

}
indice(peso,altura);