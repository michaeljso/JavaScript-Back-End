const notas = [10, 6.5 ,8, 7.5];

let somaDasNotas = 0;

//callback
//da o valor e o indice do array
notas.forEach(function (nota,indice) {
    somaDasNotas += nota;
    console.log(indice);
    //console.log('oi');
});

const media = somaDasNotas / notas.length;

console.log(`A Média das notas é ${media}.`);
