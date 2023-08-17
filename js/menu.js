if(largura_da_tela <= 850){
    botao_menu.classList.remove("nao-existe");
    botao_menu.classList.add("botao_existe");
}
if(largura_da_tela > 850){
    botao_menu.classList.remove("botao_existe");
    botao_menu.classList.add("nao-existe");
}

botao_menu.addEventListener("click", ()=>{
    if(botao_menu.textContent == "Abrir Menu"){
        links.style.display = "block"
    }
    if(botao_menu.textContent == "Fechar Menu"){
        links.style.display = "none"
    }
    botao_menu.textContent = controla_botao(botao_menu)
})