// var altura = 5;
// var comprimento = 7;

// //node declara a variavel
// area  = altura * comprimento; 

// //podemos declarar a variável depois de usar no var // porém pode dar problema de usar duas vezes o mesmo nome
// var area; 

// //podemos usar a let

//area = altura * comprimento;

// console.log(area);

//em let temos que declarar a variável antes de usar

let area;
let forma = 'retângulo';
let altura = 5;
let comprimento = 7;

if (forma === 'retângulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) /2;
}

//console.log(area);

//const precisa ter um valor inicial e não pode ser alterado depois
const forma2 = 'triangulo';
const altura2 = 5;
const comprimento2 = 7;
let area2;

if (forma2 === 'quadrado') {
    area2 = altura2 * comprimento2;
} else {
    area2 = (altura2 * comprimento2) /2;
}
console.log(area2);




