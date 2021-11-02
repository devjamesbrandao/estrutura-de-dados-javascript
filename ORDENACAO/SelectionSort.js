//Selection sort: busca o menor valor e adiciona-o no começo do vetor;

function SelectionSort(){

    var vetor = [13, 9, 5, 3];

    var auxiliar = 0;

    for(var i = 0; i < vetor.length - 1; i++){

        // Esse valor fica fixo no laço
        var menor = i;

        for(var j = i + 1; j < vetor.length; j++){

            if(vetor[menor] > vetor[j]){
                menor = j;
            }

        }

        if(menor != i){
            auxiliar = vetor[i];
            vetor[i] = vetor[menor];
            vetor[menor] = auxiliar;
        }

    }

    return vetor;

}

console.log(SelectionSort());