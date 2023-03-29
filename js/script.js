// import ehUmCPF from "./valida-cpf.js";
// import ehMaiorDeIdade from "./valida-idade.js";

// const camposDoFormulario = document.querySelectorAll('[required]')
// const formulario = document.querySelector('[data-formulario]');

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const listaRespostas = {
//         "nome": e.target.elements["nome"].value,
//         "email": e.target.elements["email"].value,
//         "cpf": e.target.elements["cpf"].value,
//         "aniversario": e.target.elements["aniversario"].value,
//     }
//     localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

//     window.location.href = "./ingressos-2.html";
// })


// camposDoFormulario.forEach((campo) => {
//     campo.addEventListener("blur", () => verificaCampo(campo));
//     campo.addEventListener("invalid", evento => evento.preventDefault());
// })

// const tiposDeErro = [
//     'valueMissing',
//     'typeMismatch',
//     'patternMismatch',
//     'tooShort',
//     'customError'
// ]

// const mensagens = {
//     nome: {
//         valueMissing: "O campo de nome não pode estar vazio.",
//         patternMismatch: "Por favor, preencha um nome válido.",
//         tooShort: "Por favor, preencha um nome válido."
//     },
//     email: {
//         valueMissing: "O campo de e-mail não pode estar vazio.",
//         typeMismatch: "Por favor, preencha um email válido.",
//         tooShort: "Por favor, preencha um e-mail válido."
//     },
//     cpf: {
//         valueMissing: 'O campo de CPF não pode estar vazio.',
//         patternMismatch: "Por favor, preencha um CPF válido.",
//         customError: "O CPF digitado não existe.",
//         tooShort: "O campo de CPF não tem caractéres suficientes."
//     },
//     aniversario: {
//         valueMissing: 'O campo de data de nascimento não pode estar vazio.',
//         customError: 'Você deve ser maior que 18 anos para se cadastrar.'
//     }
// }

// function verificaCampo(campo) {
//     let mensagem = "";
//     campo.setCustomValidity('');
//     if (campo.name == "cpf" && campo.value.length >= 11) {
//         ehUmCPF(campo);
//     }
//     if (campo.name == "aniversario" && campo.value != "") {
//         ehMaiorDeIdade(campo);
//     }
//     tiposDeErro.forEach(erro => {
//         if (campo.validity[erro]) {
//             mensagem = mensagens[campo.name][erro];
//             console.log(mensagem);
//         }
//     })
//     const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
//     const validadorDeInput = campo.checkValidity();

//     if (!validadorDeInput) {
//         mensagemErro.textContent = mensagem;
//     } else {
//         mensagemErro.textContent = "";
//     }
// }
import ehUmCPF from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');
    
    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehUmCPF(campo);
    }

    if (campo.name == "aniversario" && campo.value != "") {
        ehMaiorDeIdade(campo);
    }

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    })

    const msgErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity();

    if (!validadorInput) {
        msgErro.textContent = mensagem;

    } else {
        msgErro.textContent = '';
    }

}
 

const formCampo = document.querySelectorAll("[required]");
const formulario = document.querySelector('[data-formulario]');

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Caracteres abaixo do permitido. Lembre-se é necessário nome e sobrenome."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email com endereço e url válidos.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caracteres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ter pelo menos 13 anos para participar do evento com pais ou responsáveis. Entrada aberta para todos com 16 anos ou mais.'
    }
}

formCampo.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const listaRespostas = {
        'nome': e.target.elements["nome"].value,
        'email': e.target.elements["email"].value,
        'cpf': e.target.elements["cpf"].value,
        'ingresso': e.target.elements["ingresso"].value,
        "aniversario": e.target.elements["aniversario"].value,
        'id': Date.now()
    }

    

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
    window.location.href = "./ingressos-2.html";
})

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const listaRespostas = {
//         "nome": e.target.elements["nome"].value,
//         "email": e.target.elements["email"].value,
//         "cpf": e.target.elements["cpf"].value,
//         "aniversario": e.target.elements["aniversario"].value,
//     }
//     localStorage.setItem("cadastro", JSON.stringify(listaRespostas));

//     window.location.href = "./ingressos-2.html";
// })
