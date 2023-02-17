// Exercício 1:
// Declare uma função comum, utilizando uma declaração ou expressão de função. 
//Essa nossa função deverá possuir dois parâmetros (name, lastName). 
// A nossa função deve mostrar no console a seguinte frase: “Olá name lastName, eu sou uma função!”.
// Realizada esta parte do exercício, você deverá:
// Replicar o exercício anterior, utilizando Arrow Function. 
//Utilize os mesmos parâmetros e retorne no console a mesma frase


function exercicio1(name, lastName) {
    console.log(`Olá ${name} ${lastName}, eu sou uma função!`);
}

exercicio1('Michael', 'Jonatas');


//arrow function
const exercicioB1 = (name, lasName) => `Olá ${name} ${lasName}, eu sou uma função!`;

console.log(exercicioB1('Michael', 'Jonatas'));



// Exercício 2:
// Agora, no exercício dois, criaremos uma função chamada descobreDiametro, 
// onde receberemos um parâmetro chamado raio e um parâmetro chamado diametro. 
// Dentro da função, retornaremos o resultado do seu diâmetro.

// Realizada a primeira parte do exercício, replique o exercício 2 utilizando Arrow Function.

// Não esqueça de mostrar o resultado no console!

// Gostou deste exercício? Comente os seus resultados abaixo!

function descobreDiametro (raio, diamentro) {
    return raio * diamentro;
}

console.log(descobreDiametro(4,3));


//arrow function
const descobreDiametroArrow = (raio, diametro) => {
    return raio * diametro;
}

console.log(descobreDiametroArrow(4,8));



//função contar numero passos parra partir do x e chegar no y
function atravessaRua(x, y, z) {
    const distancia = y -x;
    const numpassos = Math.ceil(distancia/z);
    return numpassos

}

const x = 5
const y = 40
const z = 1

const numpassos = atravessaRua(x,y,z);

console.log(numpassos);


//arrow function

const numeropassos1 = (x,y,z) =>{
    const distancia1 = y-x;
    const numeropassos1 = Math.ceil(distancia1/z);
    return numeropassos1;
}

const x1 = 6;
const y1 = 55;
const z1 = 1;

console.log(numeropassos1(x1,y1,z1));

//exercicio com array

let carrinho = [
    { nome: 'abacaxi', preco: '2.00' },
    { nome: 'detergente', preco: '2.50' },
    { nome: 'bolacha', preco: '3.80' }
];
const imprimeProduto = (nome, preco) => {
    console.log(`Produto: ${nome} | Preço: ${preco}`);
}

carrinho.forEach((produto) => imprimeProduto(produto.nome, produto.preco));

//exercico com aray 2
let itens = ['abacaxi', 'bana', 'maçã', 'laranja', 'limão'];
itens.forEach((item) => console.log(item));


let palavroes = [
    "Inconstitucionalíssimo",
    "Otorrinolaringologista",
    "Pneumoultramicroscopicossilicovulcanoconiose",
    "Oftalmotorrinolaringologista"
];

let tamanhos =  palavroes.map(palavrao => palavrao.length)

console.log(tamanhos); // [ 22, 22, 44, 28 ]