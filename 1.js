class Produto {
    constructor (nome, preco){
        this.nome = nome
        this.preco = preco
    }
    exibirProduto(){
        console.log (`O produto ${this.nome}, custa ${this.preco}`);
    }
}
const p1 = new Produto ("Monster", "$9,00")
p1.exibirProduto();