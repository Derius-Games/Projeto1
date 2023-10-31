const botoes = document.querySelectorAll(".botao");

const fundos = document.querySelectorAll(".fundo");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarBotao();

        botao.classList.add("selecionado");

        desselecionarFundo();

        fundos[indice].classList.add("selecionado");

    })
})

function desselecionarFundo() {
    const fundoSelecionado = document.querySelector(".fundo.selecionado");
    fundoSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}