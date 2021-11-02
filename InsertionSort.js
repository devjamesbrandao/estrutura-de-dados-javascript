function InsertionSort(array) {

    let x = array.length; //5

    for (let i = 1; i < x; i++) { //Supõe que o primeiro está ordenado;
        
        let atual = array[i];
        
        let y = i - 1; 
   
        while ((y > -1) && (atual < array[y])) {
            array[y+1] = array[y];
            y--;
        }

        array[y+1] = atual;
        
    }

    return array;
}

console.log(InsertionSort([5, 4, 3, 2, 1]));
