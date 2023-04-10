const nomes = ["Evaldo","Mari", "Camis"];

nomes.forEach(function(nome){
    console.log(nome);
});


nomes.forEach((nome)=>{
    console.log(nome);
});


function imprimiNome(nome){
    console.log(nome);
}
//referencia de uma função externa
nomes.forEach(imprimiNome);