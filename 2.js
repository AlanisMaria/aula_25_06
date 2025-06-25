function Aluno (nome, matricula){
    this.nome = nome
    this.matricula = matricula
}
Aluno.prototype.mostrarDados = function(){
    console.log (`O aluno ${this.nome}, tem a matricula ${this.matricula}`);
};
const dante = new Aluno ("Dante", 123)
dante.mostrarDados();

const eliza = new Aluno ("Eliza", 456)
eliza.mostrarDados();
