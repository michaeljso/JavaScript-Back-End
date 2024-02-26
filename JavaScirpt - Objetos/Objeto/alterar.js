const pessoa = {
    nome: "Michael",
    profissao: "Dev",
}

console.log(pessoa.nome);

//como não foi declarada retorna undefined
console.log(pessoa.telefone);

//definindo depois de criado
pessoa.telefone = "62996806162";

console.log(pessoa.telefone);

//adiconando sobrenome
//substitui o nome
pessoa.nome = "Jonatas da Silva";

console.log(pessoa);


//Erro
const novaPessoa = {
    nome: "Pedro",
};

pessoa = novaPessoa;

