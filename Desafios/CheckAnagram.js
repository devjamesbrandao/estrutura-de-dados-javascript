// Desafio: verificar se uma palavra é anagrama da outra

// Solução : Boa
// Complexidade: O(n)
function CheckAnagrama(p1, p2){

    //Lógica: cria um objeto com todas as letras do anagrama
    let objeto = {};

    //Cria um objeto com todas as letras da primeira palavra
    for(let i = 0; i < p1.length; i++){
        let letra = p1[i];
        if(letra in objeto){
            objeto[letra]++;
        } else {
            objeto[letra] = 1;
        } 
    }

    //Verifica se cada letra da segunda palavra encontra-se no objeto criado acima
    for(let i = 0; i < p2.length; i++){
        let letra = p2[i];
        if(letra in objeto){
            objeto[letra]--;
        } else {
            return false;
        }
    }

    //Verifica se alguma das letras presente no objeto é maior que zero;
    for(let valor in objeto){
        if(objeto[valor]){
            return false;
        }
    }

    return true;

}

console.log(CheckAnagrama('vala', 'lava'))