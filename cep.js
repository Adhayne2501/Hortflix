function verificarCEP(CEP){
    fetch(`https://viacep.com.br/ws/${CEP}/json/`)
    .then(res => res.json())
    .then(dados => {console.log(dados)
    document.getElementById('Bairro').value = dados.bairro
    document.getElementById('Cidade').value = dados.localidade
    document.getElementById('UF').value = dados.uf
    document.getElementById('Logradouro').value = dados.logradouro
    })
}

    
function buscar(){
    var pesquisa = document.getElementById('CEP').value
    alert (pesquisa)
    if (pesquisa.length == 9){
        verificarCEP(pesquisa)
    }else{
        alert('NÃO TEM 9 DÍGITOS')
    }
}
function buscarCEP(){
    var CEP = document.getElementById('CEP').value
    console.log(CEP)
    var inputValues = document.getElementById('CEP')
    console.log(inputValues.value)
    var h = ''
    var i = 5
    var subs = ''
    subs = inputValues.value
    var sub1 = ''
    var sub2 = ''
    h = inputValues.value
    if (h.length>=6){
        if(subs.indexOf('-' ) > 0){
            i = subs.lastIndexOf('-')+1
        }
        sub1 = subs.substring(0,5)
        sub2 = subs.substring(i)
        inputValues.value = sub1 + "-" + sub2

    }
    subs = inputValues.value
    if (h.length > 9){
        inputValues.value = subs.substring(0,9)
    }

}