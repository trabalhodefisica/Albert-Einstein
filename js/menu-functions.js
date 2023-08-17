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
