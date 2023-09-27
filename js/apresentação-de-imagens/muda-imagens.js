let indice = 1;
let url = "";
volta.addEventListener("click",(event)=>{
    indice = alteraImagem_Indice("volta",indice);
    url = alteraImagem_Url(listaImagens_index,indice,document.title);
    imagem.src = url;
    
})
avança.addEventListener("click",(event)=>{
    indice = alteraImagem_Indice("avança",indice);
    url = alteraImagem_Url(listaImagens_index,indice,document.title);
    imagem.src = url;
    
})

function alteraImagem_Indice(acao,indice){
    if(acao == "avança"){
        indice++;
    }
    if(acao == "volta"){
        indice--;
    }
    if(indice == 0){
        indice = 1
    }
    return indice
    
}
function alteraImagem_Url(lista,indice,pagina){
    indice = indice - 1
    const url = `../imagens/${pagina}/${lista[indice]}`
    return url;
}
