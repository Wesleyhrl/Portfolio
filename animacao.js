function digitarElemento(elemento) {
    const txt = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    txt.forEach((e, i) => {
        setTimeout(() => {
            elemento.innerHTML += e;
        }, 90 * i);
    });
    setInterval(() => {
        elemento.innerHTML = "";
        txt.forEach((e, i) => {
            setTimeout(() => {
                elemento.innerHTML += e;
            }, 90 * i);
        });
        
    }, 4000);
}

digitarElemento(document.getElementById("nome"));
