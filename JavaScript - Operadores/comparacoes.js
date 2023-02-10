// == (comparação implícita) -> converte os tipos diferentes e compara o valor
const numero = 145;
const texto = "145";

console.log(numero == texto);


// === compara tipo e valor
console.log(numero === texto);

//typeof -> tipo de dado da variável
console.log(typeof numero, typeof texto);

// == so compara o valor
// === compara o valor e o tipo

// não utilizar ==, utilize === e faça conversão
//Number();
//String();

//outros operadores

/* 
||: Operador “ou”, retorna true caso uma condição seja válida;
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”
*/