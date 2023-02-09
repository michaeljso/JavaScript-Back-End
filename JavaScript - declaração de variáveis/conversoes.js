// =  atribui valor a uma variável
// == comparação considerando somente o valor sem aspas e etc.
// === compara valor e o tipo do dado 

//conversão implicita
const numero = 456;
const numeroString = "456";

//comparação de numero => texto
console.log(numero === numeroString);

// == compara o valor dentro da string e compara os dois
console.log(numero == numeroString);

//vira concatenação quando soma string com outro tipo
console.log(numero + numeroString);


//conversão explícita

//Numer() - não pode converter string que contenha outros caracteres além de numero
//String()

//converte a string em numero
console.log(numero + Number(numeroString));
