"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    Cliente.prototype.verCliente = function () {
        console.log("Os dados do cliente \u00E9: ".concat("\nNome: " + this.nome + "\nIdade: " + this.idade + "\nE-mail: " + this.email));
    };
    return Cliente;
}());
exports.Cliente = Cliente;
