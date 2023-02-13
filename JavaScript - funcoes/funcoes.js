//erro na ordem dos codigos
// let x = "";
// console.log(x)
// x = "oi";


//executa em um determinado que queremos

// 1) - declara e diz o que ela faz

                      //string
function imprimeTexto(texto) {
    console.log(texto)
 }


// 2) Executa a função uma ou mais vezes

imprimeTexto("Minha Função");
imprimeTexto("Função Denovo");


//existem três formas de escrever funções

//return
function soma() {
    //const resultado = 2 +2;
    //pode ter outros codigos- mas return tem que ser a ultima linha
    return 2+2
}
console.log(soma());


//resultado de função dentro de outra função
imprimeTexto(soma());

