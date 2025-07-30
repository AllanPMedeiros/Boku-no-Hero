const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

/*passo 2 adicionar uma escuta no botao para saber o clique */
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();

    atualizaBotaoSelecionado(botao);

    esconderImagemAtiva();

    mostrarImagemAtiva(indice);

    retiraDescricao();

    atualizaDescricao(indice);
  });
});

function atualizaBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function atualizaDescricao(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemAtiva(indice) {
  imagens[indice].classList.add("ativa");
}

function retiraDescricao() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
