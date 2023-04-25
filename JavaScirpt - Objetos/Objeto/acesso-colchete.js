const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "111222555",
    email: "andre@dominio.com",
}

//console.log(cliente);

console.log(`O cliente ${cliente["nome"]} tem a idade de ${cliente["idade"]} e seu CPF é ${cliente["cpf"]}`);
                                            //ainda não existe
const chaves = ["nome","idade","cpf","email","altura"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
});

