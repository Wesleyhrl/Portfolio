function mudarHabilidade(id){
    // Mudar a cor do elemento
    let elementoAtivo = document.querySelector("img.icone-color");
    elementoAtivo.classList.remove("icone-color");
    let elemento = document.getElementById(id);
    elemento.classList.add("icone-color");
    // Mudar a titulo e barra de progresso do elemento
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = "";
    let barra = document.getElementById("barra");
    barra.innerHTML = "";
    if(id == "html"){
        titulo.innerHTML = "HTML (Linguagem de Marcação de HiperTexto)";
        barra.innerHTML = "95%";
        barra.style.width = "95%";
    }else if(id == "css"){
        titulo.innerHTML = "CSS (Folhas de Estilo em Cascatas)";
        barra.innerHTML = "70%";
        barra.style.width = "70%";
    }else if(id == "js"){
        titulo.innerHTML = "JavaScript (Linguagem de programação interpretada estruturada)";
        barra.innerHTML = "65%";
        barra.style.width = "65%";
    }else if(id == "bootstrap"){
        titulo.innerHTML = "Bootstrap (Framework front-end que fornece estruturas de CSS)";
        barra.innerHTML = "68%";
        barra.style.width = "68%";
    }else if(id == "php"){
        titulo.innerHTML = "Php (Pré-Processador de Hipertexto)";
        barra.innerHTML = "50%";
        barra.style.width = "50%";
    }else if(id == "java"){
        titulo.innerHTML = "Java (Linguagem multiplataforma, orientada a objetos)";
        barra.innerHTML = "70%";
        barra.style.width = "70%";
    }else if(id == "mysql"){
        titulo.innerHTML = "MySQL (MySQL é um SGBD que utiliza linguagem SQL)";
        barra.innerHTML = "48%";
        barra.style.width = "48%";
    }else if(id == "git"){
        titulo.innerHTML = "Git (Sistema de controle de versões distribuído)";
        barra.innerHTML = "82%";
        barra.style.width = "82%";
    }
    titulo.animate(([
        { transform: 'translateX(-100px)',opacity: "0" },
        {opacity: "0.2"},
        { transform: 'translateX(0px)', opacity: "1"}
    ]),600)
}
