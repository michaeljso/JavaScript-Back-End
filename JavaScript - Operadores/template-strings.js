//padrao
const nome = "Michael";
const apresentacao = "Meu nome é: " + nome; //concatenação
console.log(apresentacao);

//template string
const idade = 28;
const cidadeDeNascimento = "Ceres";

//jeito complicado
//console.log(apresentacao + "Minha idade e: " + idade + " E nasci em: " + cidadeDeNascimento);

//jeito certo
const apresentacao2 = `Meu nome é ${nome}, Nasci em ${cidadeDeNascimento}, 
minha idade é ${idade}`;

console.log(apresentacao2);