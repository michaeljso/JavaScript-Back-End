const alunos = ['João', 'Juliana', 'Ana','Caio'];
const medias = [10,8,7.5,9];

//lista dentro de lista
const listaCompleta = [alunos, medias];

console.log(listaCompleta);

//acessando valor
console.log(`A aluna da posição 1 da lista de alunos é:${listaCompleta[0][1]}.
A nota dessa aluna é ${listaCompleta[1][1]}`);

