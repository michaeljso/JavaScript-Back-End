//map => utilizado para escrever arrays
//não altera o array original => atribuir novo
const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota)=> {
    return nota + 1 >=10 ? 10 : nota + 1;
})

console.log(notasAtualizadas);