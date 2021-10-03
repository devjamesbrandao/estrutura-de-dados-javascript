//BubbleSort: 

function BubbleSort(){

    var array = [5, 1, 2, 3, 4];

    var auxiliar = 0;

    for(var j = array.length - 1; j >= 0; j--){
        for(var i = 0; i < j; i++){
            if(array[i] > array[i+1]){

                auxiliar = array[i];

                array[i] = array[i+1];

                array[i+1] = auxiliar;

            }
        }
    }

    return array;

}

var ordenado = BubbleSort();

console.log(ordenado);
