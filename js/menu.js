if(largura_da_tela <= 850){
    botao_menu.classList.remove("nao-existe");
    botao_menu.classList.add("botao_existe");
    controla_links_mobile(botoes_link)
    
}
if(largura_da_tela > 850){
    botao_menu.classList.remove("botao_existe");
    botao_menu.classList.add("nao-existe");
}


botao_menu.addEventListener("click",()=>{
    botao_menu.textContent = controla_botao(botao_menu)
})


function controla_links(botoes,botao){
    if(botao.textContent == "Abrir Menu"){

    }
    else{

    }
}

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

function controla_links_mobile(botoes){
    for(x = 0 ; x <= botoes.length ; x++){
        botoes[x].classList.remove("pagina_link")
        botoes[x].classList.add("nao-existe")
    }
}