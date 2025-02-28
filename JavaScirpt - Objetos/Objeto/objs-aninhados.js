const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '05640181125',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['62994280497','62996806162'] //array  -- dados de um mesmo formato
}

//adicionando obj dentro do obj -- obj aninhado
estudante.endereco = {
    rua: 'Rua Benedito Luiz dias',
    numero: '45',
    complemento: 'Apto 43'
}

console.log(estudante);

console.log(estudante.endereco);

//pegar apenas a rua (obj dentro do obj)
console.log(estudante.endereco.rua);