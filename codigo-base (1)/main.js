const form= document.getElementById('form-deposito');

function validaCampo(campoA,campoB){
    const a= campoA;
    const b = campoB;

    return b>a;
}

form.addEventListener('submit',function(e){
    let formEvalido = false;
    e.preventDefault();
    
    const campoA = document.getElementById('CampoA');
    const campoB = document.getElementById('CampoB');
    const menssagemSucesso = `Tudo certo! O valor B=${campoB.value} é maior que o valor A=${campoA.value}`
    formEvalido =validaCampo(campoA.value,campoB.value);
    if (formEvalido){
        alert(menssagemSucesso);

        campoA.value = '';
        campoB.value = '';
    }else{
        alert("O Campo B deve ser maior que A");
    }

})

console.log(form);