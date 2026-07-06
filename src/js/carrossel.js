
let cardAtual = 0;
const cards = document.querySelectorAll(".card-carrossel");

function mostrarCard(indice){
    cards.forEach(function(card){
        card.classList.remove("ativo")
    });
    cards[indice].classList.add("ativo");
}

function proximoCard(){
    cardAtual++;
    
    if(cardAtual>= cards.length){
        cardAtual=0;

    }
    mostrarCard(cardAtual);
}

mostrarCard(cardAtual);

setInterval(proximoCard, 4000)
