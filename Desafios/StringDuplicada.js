// Desafio: remover elementos duplicados de um array

// Solução 1: Ruim
// Complexidade: O(n^2)
function NoDuplicate1(array)
{

    let tamanho = array.length;

    let b = [];

    for(let i = 0; i < tamanho; i++){
        if(b.indexOf(array[i]) === -1){
            b.push(array[i]);
        }
    }

    console.log(b);

}

// Solução 2: Razoável
// Complexidade: O(n * logn)
function NoDuplicate2(array){

    let tamanho = array.length;

    let b = [];

    array.sort();

    let _temp;

    for(let i = 0; i < tamanho; i++){
        if(array[i] !== _temp){
            b.push(array[i]);
            _temp = array[i];
        }
    }

    console.log(b);

}

// Solução 3: Boa
// Complexidade: O(n)
function NoDuplicate3(array){

    objeto = {};

    for(let i of array){
        objeto[i] = true;
    }

    console.log(Object.keys(objeto));

}

// Solução 1: Excelente (HardCore)
// Complexidade: O(n)
function NoDuplicate4(array){

    //Apenas uma linha Hardcore mlk kkkkk
    console.log([...new Set(array)]);
}

NoDuplicate4([1, 5, 1]);



