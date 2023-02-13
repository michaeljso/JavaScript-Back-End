const produto = "Suco laranja";
const codigoProduto = 200699;
const preco = 14.99;

const resultado = `O produto ${codigoProduto} - ${produto} custa ${preco} `;

console.log(resultado);

if (preco <= 13) {
    console.log(resultado);
} else {
    console.log("Preço abaixo da margem");
}

console.log(typeof String(preco));
