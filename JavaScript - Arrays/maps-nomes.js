//Desafio, colocar todas as strings dentro do array nomes em maíusculo

const nomes = ['ana Julia','Caio vinicius','BIA silva'];

const nomesPadronizados = nomes.map((nome) =>{
    return nome.toUpperCase();
})


console.log (nomesPadronizados);