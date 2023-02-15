listaProdutos = []
produto = 0
const todos = document.getElementById('todos')

produtosId = [
    {id:0 , nome:'banana', preco:1.20},
    {id:1 , nome:'tomate', preco:6.99},
    {id:2 , nome:'cenoura', preco:2.59},
    {id:3 , nome:'uva',preco:6.99},
    {id:4 , nome:'abacaxi',    preco:4.99},
    {id:5 , nome:'banana da terra',preco:2.65},
    {id:6 , nome:'mandioquinha',preco:1.44},
    {id:7 , nome:'castanha',preco:14.59},
    {id:8 , nome:'pimentão', preco:4.35},
    {id:9 , nome:'beterraba', preco:3.65},
    {id:10 , nome:'banana maçã', preco:1.91},
    {id:11 , nome:'laranja', preco:3.08},
    {id:12,  nome:'uva passa', preco:19.79},
    {id:13,  nome:'ameixa seca', preco:11.95},
    {id:14,  nome:'pêra', preco:1.40},
    {id:15,  nome:'berinjela', preco:2.08},
    {id:16,  nome:'melancia', preco:24.95},
    {id:17,  nome:'gengibre', preco:0.80}
]

function adicionar(id){
    var prod = produtosId.find(x => x.id == id)

    addCarrinho(prod.nome, prod.preco)
    alert('Produto adicionado ao carrinho! ')
}

function addCarrinho(produto,preco){
    var novoProduto = {nome: produto, valor: preco}
    listaProdutos.push(novoProduto)
    console.log(listaProdutos)
    exibirProdutos()
    salvarCarrinho();
}

function exibirProdutos(){
    console.log("aaaaaaaaaa")
    var codHTML = '';
    var posicao = 0
    listaProdutos.forEach((prod) => {
        codHTML += `<div class="divisao"><h1>${prod.nome}</h1><div>R$ ${(prod.valor)}<a href="javascript:void(0)" onclick="excluirItem(${posicao})">x</a></div></div>`
        produto++   
        posicao++
    });
    if(document.getElementById('todos')!=null){
            document.getElementById('todos').innerHTML = codHTML
    }

}
function excluirItem(posicao){
    listaProdutos.splice(posicao, 1)
    salvarCarrinho()
    obterCarrinho()
}

function salvarCarrinho(){
    localStorage.setItem('loja', JSON.stringify(listaProdutos))
}

function obterCarrinho(){
    console.log("obtercarrinho ativado")
    if(localStorage.getItem('loja')!= null){
        console.log("loja existe")
        listaProdutos = JSON.parse(localStorage.getItem('loja'))
        exibirProdutos();
    }
    console.log("funcionou")
}
obterCarrinho();