// parâmetros de função

function soma(num1, num2) {
    return num1 + num2;    
}

console.log(soma(5,5)); // passa os parâmetros
console.log(soma(254,20));
console.log(soma(-500,5));

//parâmetros x argumentos

//parâmetros tem ordem
function nomeIdade(nome, idade) {
    return `Olá, meu nome é: ${nome} e minha idade é: ${idade} `;
}
//certo
console.log (nomeIdade('Michael', '28'));
//errado
console.log (nomeIdade('28', 'Michael'));


// função com resultado de outra função
function multiplica(num1, num2) {
    return num1 * num2;
}
0,
0
console.log(multiplica(soma(2,3), soma(4,5)));


//erro de não passar parâmetros suficiente -> undefined
console.log(multiplica(soma(4,5)));


//decalrando valor incial no parâmetro -> para caso seja informado so um parâmetro
function multiplica2(num1 =1, num2 =1) {
    return num1 * num2;
}

console.log(multiplica2(soma(4,5)));

//os nomes dos parâmetros so são utilizados somente dentro da funçao, 
//pode ter várias funções com mesmo nome de parâmetro