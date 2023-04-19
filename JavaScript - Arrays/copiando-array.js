//copiando array para um novo sem alterar  o original
//a atribuição de =  trona os dois arrays iguais

//o spread operator, percorre o array e pega os valores e coloca separado 
//por virgula em outro array


const notas = [7,7,8,9];

const novasNotas = [...notas]; // ... spread operator
//const novasNotas = [...notas,10];

novasNotas.push(10);


console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas antigas são ${notas}`);

