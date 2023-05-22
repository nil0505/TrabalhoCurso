/*
    O que precisamos fazer? - quando clicarmos no botÃ£o de troca de tema temos que alterar a cor do tema da pÃ¡gina para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botÃ£o de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botÃ£o de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
        - passo 3 - dar um jeito de identificar o clique do usuÃ¡rio no botÃ£o de troca de tema
        - passo 4 - adicionar a classe modo-escuro no body
        - passo 5 - trocar a imagem do botÃ£o de alterar tema pra lua
    
    - objetivo 2 - quando clicar no botÃ£o de troca de tema, caso o body jÃ¡ tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verificar se o body jÃ¡ tem a classe do modo escuro
        - passo 7 - remover a classe do modo-escuro do body
        - passo 8 - trocar a imagem do botÃ£o de alterar tema pra sol
*/

// objetivo 1 - quando clicar no botÃ£o de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua

// passo 1 - pegar no JS o elemento HTML correspondente ao botÃ£o de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//passo 3 - dar um jeito de identificar o clique do usuÃ¡rio no botÃ£o de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    // passo 6 - verificar se o body jÃ¡ tem a classe do modo escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {

        //passo 7 - remover a classe do modo-escuro do body
        body.classList.remove("modo-escuro");

        //passo 8 - trocar a imagem do botÃ£o de alterar tema pra sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {
        
        // passo 4 - adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");

        // passo 5 - trocar a imagem do botÃ£o de alterar tema pra lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }
});

