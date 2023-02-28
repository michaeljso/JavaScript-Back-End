// - Crie  uma função que  recebe como parametro o nome de um aluno;
// - Verifique se o aluno está presente na lista e retorne a média final
//que se contra no mesmo indice
// - Caso o nome do aluno não esteja na lista retorne que o aluno não foi encontrado

const alunos = ['João', 'Juliana', 'Ana','Caio'];
const medias = [10,8,7.5,9];

//lista dentro de lista
const listaCompleta = [alunos, medias];

function exibeNomeENota(aluno) {
    //verifica com includes se existe o correspondente dentro do array
    if (listaCompleta[0].includes(aluno)) {
        //verifica qual o indice do parametro
        const indice = listaCompleta[0].indexOf(aluno);
        const mediaAluno = listaCompleta[1][indice];
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('Aluno não cadastrado')
    }
}

exibeNomeENota('João');

// arrow function
const notaAluno = (aluno2) => {
    if (listaCompleta[0].includes(aluno2)) {
        //verifica em qual indice está o parametro passado
        const indice2 = listaCompleta[0].indexOf(aluno2);
        //pega a media correspondente ao indice encontrado acima
        const mediaAluno2 = listaCompleta[1][indice2] 
        return `${aluno2} tem a média ${mediaAluno2}!`;
        //console.log(`${aluno2} tem a média de ${mediaAluno2}!`)

    }else {
        console.log('Aluno não cadastrado!')
    }
}

console.log(notaAluno('Juliana'));


//codigo reduzido utilizando operador ternário:

const notaAluno2= (aluno3) =>
  listaCompleta[0].includes(aluno) ? `${aluno3} tem a média ${listaCompleta[1][listaCompleta[0].indexOf(aluno3)]}!` : 'Aluno não cadastrado!';

console.log(notaAluno('Caio'));


// O método .includes() é um método que pode ser utilizado em um array no JavaScript
//  para verificar se um elemento específico está contido dentro desse array.

// Ele funciona da seguinte maneira:

// O método recebe um valor como argumento.
// O valor é então comparado a cada elemento do array.
// Se o valor for igual a algum elemento do array, o método retorna true.
// Caso contrário, o método retorna false.
// A sintaxe para utilizar o método é a seguinte:


// array.includes(valor, startIndex)
// Onde:

// valor: O valor que se deseja verificar se está contido no array.
// startIndex (opcional): A posição a partir da qual a pesquisa deve começar. 
// Se não for fornecido, a pesquisa começa no índice 0.
// Aqui está um exemplo de como o método .includes() pode ser utilizado em um array:


// const frutas = ['maçã', 'banana', 'laranja', 'limão'];
// const contemLaranja = frutas.includes('laranja');

// console.log(contemLaranja); // true
// Neste exemplo, o método .includes() é utilizado para verificar se o array 
// frutas contém a string 'laranja'. Como o array de fato contém essa string,
//  o método retorna true.