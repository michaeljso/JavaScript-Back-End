const salaJS = [7,8,8,7,10,6.5,4,10,7];
const salaJava = [6,5,8,9,5,6];
const salaPython = [7,3.5,8,9.5];

//acc = acumulador
 
//função completa
function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => {
        return acc + nota;
    }, 0);

   const media = somaDasNotas / notasDaSala.length;

   return media;
}

//função reduzida para calculo de numeros de um array
function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
  
     const media = somaDasNotas / notasDaSala.length;
  
     return media;
  }
  


console.log (` Á Média da sala de JS é: ${calculaMedia(salaJS)}`);
console.log (` Á Média da sala de Java é: ${calculaMedia(salaJava)}`);
console.log (` Á Média da sala de Python é: ${calculaMedia(salaPython)}`);