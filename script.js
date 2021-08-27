
// Modelo
/*
function nomeDaFuncao(array, callback) {
    // conteúdo da função
}*/


//ForEach() 

let myArr = ["maçã", "uva", "pera"];

function myCallBack1(element, i, array){
    console.log(element + "-" + i + " - " + array)
}


function newForEach(array, callBack) {

    for(let i = 0; i < array.length; i++){
        let elementAtual = array[i];
        let index = i;
        callBack(elementAtual, index, array)
    }

}
let retornoForEach =  myArr.forEach(myCallBack1);
let retornoNewForEach = newForEach(myArr,myCallBack1);


//O método fill() preenche todos os valores do array a partir do índice inicial a um índice final com um valor estático.


function newFill(array, myCallback) {
    // conteúdo da função
}









function newMap(array, myCallback) {
    // conteúdo da função
}


function newSome(array, myCallback) {
    // conteúdo da função
}


function newFind(array, myCallback) {
    // conteúdo da função
}


function newFindIndex(array, myCallback) {
    // conteúdo da função
}

function newEvery(array, myCallback) {
    // conteúdo da função
}

function newFilter(array, myCallback) {
    // conteúdo da função
}


function newConcat(array, myCallback) {
    // conteúdo da função
}


function newIncludes(array, myCallback) {
    // conteúdo da função
}


function newIndexOf(array, myCallback) {
    // conteúdo da função
}


function newJoin(array, myCallback) {
    // conteúdo da função
}


function newReduce(array, myCallback) {
    // conteúdo da função
}


















