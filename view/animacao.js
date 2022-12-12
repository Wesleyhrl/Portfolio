//Animação de digitar
function digitarElemento(elemento) {
    const txt = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    txt.forEach((e, i) => {
        setTimeout(() => {
            elemento.innerHTML += e;
        }, 130 * i);
    });
}
digitarElemento(document.getElementById("nome"));

// Aminação das data-anime através do scroll da pagina.

const itens = document.querySelectorAll("[data-anime]");
const animeScroll = () =>{
    const topoJanela = window.pageYOffset + window.innerHeight * 0.82;
    itens.forEach((e)=>{
        if(topoJanela > e.offsetTop){
            e.classList.add("animate");
        }else{
            e.classList.remove("animate");
        }
    });
};
animeScroll();
// Efeito ativar link do menu
const links = document.querySelectorAll(".nav-link");
let sections = document.querySelectorAll("section");
const menuScrool = ()=>{
    const topJanela = window.pageYOffset + window.innerHeight* 0.60;
    sections.forEach((e)=>{
        if (topJanela > e.offsetTop) {
            links.forEach((e)=>{
                e.classList.remove("active");
            })
            if (e.id == "inicio") {
                links[0].classList.add("active");
            }if (e.id == "sobre") {
                links[1].classList.add("active");
            }if (e.id == "habilidades") {
                links[2].classList.add("active");
            }if (e.id == "projetos") {
                links[3].classList.add("active");
            }if (e.id == "contato") {
                links[4].classList.add("active");
            }
        } 
    });

};
menuScrool();
window.addEventListener("scroll",()=>{
    animeScroll();
    menuScrool();
});