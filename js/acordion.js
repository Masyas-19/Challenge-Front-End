const perguntas = document.getElementsByClassName("perguntas__pergunta");
const respostas = document.getElementsByClassName("perguntas__resposta");

console.log(perguntas);
console.log(respostas);

for (let i = 0; i < perguntas.length; i++) {
    perguntas[i].addEventListener("click", function () {
        for (let i = 0; i < respostas.length; i++) {
            respostas[i].style.display = "none";
        }
        if (respostas[i].style.display === "block") {
            respostas[i].style.display = "none";
        } else {
            respostas[i].style.display = "block";
        }
    })
}