
window.addEventListener("scroll" ,function(){
    // pega o elemento header e salva em um let
    let header = document.querySelector("#header");

    // Adiciona a classe 'rolagem' se o scroll for maior que 50px
    header.classList.toggle("rolagem", window.scrollY > 50)
})