
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

setInterval(proximoCard, 4000);



// Carrossel Mais Vendidas


var swiper = new Swiper(document.querySelector(".swiper"), {
    effect:"coverflow",
    grabCursor:true,
    centeredSlides:true,
    coverflowEffect:{
        rotate:0,
        stretch:0,
        depth:100,
        modifier:4,
        slideShadows:true
    },
    loop:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    keyboard:{
        enabled:true
    },
    mousewheel:{
        thresholdDelta:70
    },
    breakpoints:{
        560:{
            slidesPerView:2.5
        },
        768:{
            slidesPerView:3
        },
        1024:{
            slidesPerView: 3
        }
    }
});
