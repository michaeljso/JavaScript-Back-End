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