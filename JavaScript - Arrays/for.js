//imprima o índice e a lista com os sguintes numeros
// - 100, 200, 300, 400, 500, 600

const numeros = [100, 200, 300, 400, 500, 600];

//estrutura for

// Primeira expressão: é executada apenas uma vez (let index =0)
// Segunda expressão: é uma condição de execução (index < array.length)
// Terceira expressão: é executada sempre ao final do bloco (index ++)

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);   
}


// A estrutura for em JavaScript é uma forma de criar um loop que permite executar um bloco de código repetidamente até que uma condição específica seja atendida. A sintaxe básica da estrutura for é a seguinte:

// javascript

// for (inicialização; condição; incremento/decremento) {
//   // bloco de código a ser executado
// }

// Aqui está o que cada parte da estrutura for significa:

// A inicialização é uma expressão que é executada antes da primeira iteração do loop. É comum usar a inicialização para definir um contador ou variável de controle.
// A condição é uma expressão que é verificada antes de cada iteração do loop. Se a condição for verdadeira, o bloco de código é executado. Se a condição for falsa, o loop é encerrado.
// O incremento/decremento é uma expressão que é executada após cada iteração do loop. É comum usar o incremento para atualizar um contador ou variável de controle.
// Aqui está um exemplo simples de como usar a estrutura for para exibir os números de 1 a 5:

// javascript

// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }

//desafio

const imprimeNumeros = (numero) => {
    for (let i =1; i <= numero; i++){
        console.log(i)
    }
}

imprimeNumeros(5);