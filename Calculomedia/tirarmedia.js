const nomeAluno = document.getElementById("nomeDoAluno");
const inputNota1 = document.getElementById("nota1");
const inputNota2 = document.getElementById("nota2");
const btnMedia = document.getElementById("btnMedia");
const resultadoMedia = document.getElementById("resultadoMedia");
const resultado = document.getElementById("resultado");

btnMedia.addEventListener("click", function calcularMedia(){
    let nomeDoAluno = nomeAluno.value;
    let nota1 = Number(inputNota1.value);
    let nota2 = Number(inputNota2.value);
    let mediaFinal = ((nota1 + nota2)/2).toFixed(1);

    if(mediaFinal >= 7){
        resultadoMedia.textContent = `A média das notas é : ${mediaFinal}`;
        resultado.textContent = `Parabens ${nomeDoAluno}, voce foi aprovado !`;
    }else{
        resultadoMedia.textContent = `A média das notas é : ${mediaFinal}`;
        resultado.textContent = `${nomeDoAluno}, você foi Reprovado!`;
    }


})