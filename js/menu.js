if(largura_da_tela <= 850){
    botao_menu.classList.remove("nao-existe");
    botao_menu.classList.add("botao_existe");
    controla_links_mobile(botoes_link,"desaparecer")
    
}
if(largura_da_tela > 850){
    botao_menu.classList.remove("botao_existe");
    botao_menu.classList.add("nao-existe");
}




botao_menu.addEventListener("click",()=>{
    botao_menu.textContent = controla_botao(botao_menu)
    // controla_links(botoes_link,botao_menu)
})


function controla_links(botoes,botao){
    if(botao.textContent == "Abrir Menu"){
        controla_links_mobile(botoes,"desaparecer")
    }
    else{
        controla_links_mobile(botoes,"aparecer")
    }
    console.log(botao.textContent)
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

function controla_links_mobile(botoes,acao){
    if(acao == "desaparecer"){
        for(x = 0 ; x <= botoes.length ; x++){
            botoes[x].classList.remove("pagina_link")
            botoes[x].classList.add("nao-existe")
        }
    }
    if(acao == "aparecer"){
        for(x = 0 ; x <= botoes.length ; x++){
            botoes[x].classList.remove("nao-existe")
            botoes[x].classList.add("pagina_link")
        }
    }
}