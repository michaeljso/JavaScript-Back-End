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

//codigo atualizado nova versão curso

const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '05640181125',
    turma: 'JavaScript'
}

estudante.nome //jose

//função para retornar dinamicamente os dados de um objeto passando como parametro a chave desejada
function exibeInfoEstudante(objEstudante,infoEstudante){
    return objEstudante[infoEstudante];
}

// o que ocorre por trás
console.log(estudante['nome']);
console.log(estudante['cpf']);


console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));