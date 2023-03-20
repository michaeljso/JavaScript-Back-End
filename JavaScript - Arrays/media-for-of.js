const notas = [10, 6.5 ,8, 7.5];

somaDasNotas = 0;


//para cada elemento de notas executa o codigo
for (let nota of notas) {
    somaDasNotas += nota;
   // console.log(elemento);
}

console.log(somaDasNotas);

const media = somaDasNotas / notas.length;

console.log(`A Média das notas é ${media}.`);