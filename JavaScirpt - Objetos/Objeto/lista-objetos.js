const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '05640181125',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['62994280497','62996806162'],
    endereco: [{
        rua: 'Rua Benedito Luiz dias',
        numero: '45',
        complemento: 'Apto 43'
    }]
}

//console.log(estudante.endereco);
//console.log(estudante.endereco[0]); //o objeto ocupa somente uma posição do array, não importa o tamanho

estudante.endereco.push({
    rua: 'Avenida Bernardo sayão',
    numero: '2005',
    complemento: ''
});

//console.log(estudante.endereco);
//console.log(estudante.endereco[1]);

//arrow function que retorna quando complemento exite (true)
const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento)
