function verificarUrlEmail() {
    let url = new URL(window.location.href);
    
    let email = url.searchParams.get("email");
    let cod = url.searchParams.get("cod");
    let modalTitulo = document.getElementById("modal-titulo");
    let modalTexto = document.getElementById("modal-texto");
    if(email == "ok"){
        console.log("passo");
        modalTitulo.innerHTML = "Sucesso";
        modalTexto.innerHTML = "Email enviado com sucesso em breve entraremos em contato."
        $('#modal-email').modal('show');
    }else if(email == "erro"){
        if(cod == "1"){
            modalTitulo.innerHTML = "Erro";
            modalTexto.innerHTML = "Erro na validação dos campos para enviar o email. Preencha os campos corretamente...";
            $('#modal-email').modal('show');
        }if(cod == "2"){
            modalTitulo.innerHTML = "Erro";
            modalTexto.innerHTML = "Erro no servidor ao tentar enviar o email. Tente novamente mais tarde...";
            $('#modal-email').modal('show');
        }
        
    }
    
    
}
function limparUrl(){
    let url = new URL(window.location.href);
    url.searchParams.delete("email");
    url.searchParams.delete("cod");
    window.location.href = url;
}
$(window).on('load', function(){
    verificarUrlEmail();
});



