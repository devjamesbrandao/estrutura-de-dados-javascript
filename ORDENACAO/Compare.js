function VerificaDiferencaEntreObjetos(){

    var dados = ["kkk", "ccc", "sss", "fff"];

    var dados2 = ["kkk"];

    let difference = dados.filter(x => !dados2.includes(x));

    console.log(difference)

}

VerificaDiferencaEntreObjetos();

