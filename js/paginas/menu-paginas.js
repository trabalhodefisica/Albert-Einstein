for (let index = 0; index < paginas.length; index++) {
    const element = paginas[index];
    const pagina_verificador = `Albert Einstein/ ${element}`
    const verifica_pagina = pagina_verificador == pagina_atual
    let novolink = document.createElement("p")
    novolink.classList.add("pagina_link")
    novolink.classList.add("pagina_link_botoes")
    novolink.id = "links"
    if(paginas[index] == "Início"){
        novolink.innerHTML = `<a href="../index.html"
        class="link_da_pagina">${element}</a>`
    }else{
        novolink.innerHTML = `<a href="../paginas/${element}.html"
        class="link_da_pagina">${element}</a>`
    }
    
    if(!verifica_pagina){
        links.appendChild(novolink)
        
    }else{
        document.title = pagina_verificador
    }
    
}