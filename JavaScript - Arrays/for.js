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