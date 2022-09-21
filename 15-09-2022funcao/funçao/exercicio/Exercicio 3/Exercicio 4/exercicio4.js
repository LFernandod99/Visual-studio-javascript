// 1 - Faça um programa que recebe três números do usuário, 
// e identifica o maior através de uma função e o menor número através de outra função.

let usuario, Mnum = 0, menor = 0;
function recebe(usuario) {
    for (i = 1; i < 4; i++) {
        usuario = prompt("Digite o numero do usuario " + i)

        if (Mnum < usuario) {
            Mnum = usuario
        }
    }
    return Mnum
    // return alert("o maior numero é: " + Mnum +
    //     "\no menor numero é: " + menor);
}

function retira(usuario) {
    for (i = 1; i < 4; i++) {

        if (menor > usuario) {
            menor = usuario
        }
    }
    return menor
    
}

// recebe(usuario);
// retira(usuario);
alert(recebe(usuario) + retira(usuario))