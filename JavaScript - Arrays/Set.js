const nomes = ['Ana', 'Clara','Maria','Maria','João','João','João'];

//Set = os elementos de um Set não podem se repetir
const meuSet = new Set(nomes);

//transformar Set de volta em lista
const nomesAtualizados = [...meuSet];

//forma consiza resumida
const nomesAtualizadosResumido = [...new Set(nomes)]
;
console.log(nomesAtualizados);
console.log(nomesAtualizadosResumido);