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
//const novaPessoa = {
//    nome: "Pedro",
//};

//pessoa = novaPessoa;

//codigo novo aula atualizada

//pode criar obj vazio e atribuir propriedades depois
estudante2 ={};
estudante2.nome = 'Ana Maria';
console.log(estudante2.nome);