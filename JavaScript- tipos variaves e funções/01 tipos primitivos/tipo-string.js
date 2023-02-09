const texto1 = "Olá, Mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura123456!";
const stringDeNumeros = "3456";

//aspas simples e duplas
const citacao = 'O Leo disse "oi"';
const citacao2 = "O Leo disse 'OI'"; 


console.log(texto1, texto2, senha, stringDeNumeros, citacao,citacao2);


//template string ou template literal
const textoLiteral = `Teste
texto literal`;

console.log(textoLiteral);

//string com variável concatenação (+)
const idade = 28;
const nome = "Michael ";
const concatenacao = "Olá, meu nome é "

console.log(concatenacao + nome + 'minha idade é '+ idade);

//maisucula e minuscula
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLocaleLowerCase();

console.log(cidade === inputMinusculo); //comparação de string

const senhaNova = "minhaSenha123";
console.log(senhaNova.length); //conta caracteres

