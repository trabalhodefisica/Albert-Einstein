const pagina = document.querySelector("#conteudo");
const menu = pagina.querySelector("#menu");
const botao_menu = menu.querySelector("#botao_menu")
const altura_da_tela = window.screen.height;
const largura_da_tela = window.screen.width;
if(largura_da_tela <= 850){
    console.log(menu);
    console.log(largura_da_tela);
    botao_menu.classList.remove("botao_nao-existe");
    botao_menu.classList.add("botao_existe");
}