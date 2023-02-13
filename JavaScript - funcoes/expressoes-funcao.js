//expressão de função
//não tem nome

const  soma = function(num1, num2) {return num1 + num2};

console.log(soma(1,1));

//diferença principal entre expressão e declaração?
//consegue chamar antes de inicializar : HOISTING
console.log(apresentar());

function apresentar() {
    return "olá";
}


//não consegue chamar antes de inicializar
console.log(soma2(1,1));

const  soma2 = function(num1, num2) {return num1 + num2};


