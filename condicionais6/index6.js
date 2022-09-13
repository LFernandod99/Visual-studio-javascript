let idade
idade = prompt("Digite sua idade para verificar sua categoria: ")
 if(idade >= 5 && idade <= 7){
    alert("Categoria infantil A")
 } else if(idade >= 8 && idade <= 11){
   alert("Categoria infantil B")
 }

else if(idade >= 12 && idade <= 13){
   alert("Juvenil A")

} else if(idade >= 14 && idade <= 17){
   alert("Juvenil B")
} else if(idade >= 18){
 alert("Adulto")
}
