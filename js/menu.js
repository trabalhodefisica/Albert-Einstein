if(largura_da_tela <= 850){
    botao_menu.classList.remove("nao-existe");
    botao_menu.classList.add("botao_existe");
    controla_links(botoes_link)
    
}

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

function controla_links(botoes){
    for(x = 0 ; x <= botoes.length ; x++){
        botoes[x].classList.remove("pagina_link")
        botoes[x].classList.add("nao-existe")
    }
}