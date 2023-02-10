// funciona como if else de forma reduzida
const idadeMinima = 18;
const idadeCliente = 16;

//if clássico
if (idadeCliente >= idadeMinima){
    console.log("Cliente pode beber");
}else{
    console.log("Cliente não pode beber")
}

//ternário
                    //condição           //true      //false
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");

//ter cuidado com operador ternário, não usar dentro de outro e etc. não é comendado
