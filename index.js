var setaDireita = window.document.getElementById("seta-direita");
var Leonardo = window.document.getElementById("leonardo");
var Samantha = window.document.getElementById("samantha");
var Bruna = window.document.getElementById("bruna");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function RolarParaDireita(){
    Leonardo.style = "display: none;"
    Bruna.style = "display: flex;"
    setaDireita.style = "display: none;"
    setaEsquerda.style = "display: flex; margin-top:500%;" 
}

function RolarParaEsquerda(){
    Leonardo.style = "display: flex;"
    Bruna.style = "display: none;"
    setaDireita.style = "display: flex;"
    setaEsquerda.style = "display: none; margin-top:500%;" 
}