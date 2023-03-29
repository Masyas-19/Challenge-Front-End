function criaIngresso() {
    const ingeressoDescricao = document.querySelector('.card__dados');
    const ingressoItens = JSON.parse(localStorage.getItem('cadastro'));



    ingeressoDescricao.innerHTML =  `
    <h2 class="card__nome">${ingressoItens.nome}</h2>
    <p class="card__tipo">${ingressoItens.ingresso}</p>
    <p class="card__setor">Setor Pista</p>
    <p class="card__data">Data: 11/03</p>
    <p class="card__local">Local: São Paulo-SP</p>
    `
}

criaIngresso();