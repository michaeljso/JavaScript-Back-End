const notas = [10, 6.5 ,8, 7.5];

let somaDasNotas = 0;

//callback
notas.forEach(function (nota) {
    somaDasNotas += nota;
    
    //console.log('oi');
});

const media = somaDasNotas / notas.length;

console.log(`A Média das notas é ${media}.`);
