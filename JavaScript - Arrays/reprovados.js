const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

//precisa nomear o primeiro parametro para acessar o segundo, mas caso não queira dar nome
// coloque _

const reprovados = alunos.filter((_, indice) => {
    // sempre retorne verdadeiro ou falso
    return medias[indice] < 7;
})

console.log(reprovados);