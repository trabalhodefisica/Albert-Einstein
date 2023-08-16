const pagina = document.querySelector("#conteudo");
const menu = pagina.querySelector("#menu");
const botao_menu = menu.querySelector("#botao_menu")
const altura_da_tela = window.screen.height;
const largura_da_tela = window.screen.width;
botao_menu.addEventListener("click",()=>{
        botao_menu.textContent = controla_botao(botao_menu)
})

function controla_botao(botao){
   let texto_do_botao = botao_menu.textContent
   let texto = "Abrir Menu"
   if(texto_do_botao == "Abrir Menu"){
        texto = "Fechar Menu"
   }
   else{
        texto = "Abrir Menu"
   }
   return texto;
}