const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "111222555",
    email: "andre@dominio.com",
}

//console.log(cliente);

console.log(`O cliente ${cliente.nome} tem a idade de ${cliente.idade} e seu CPF é ${cliente.cpf}`);

console.log(`Os tres primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`)