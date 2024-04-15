function checkAnswer(cardNumber) {
    var card = document.getElementById("card" + cardNumber);
    card.classList.add("flipped");
}

function flipCard(cardNumber) {
    var card = document.getElementById("card" + cardNumber);
    card.classList.remove("flipped");
}

/* Menu Mobile */
function menuMobil() {
    const btn = document.querySelector('.burger'); // ciblé le bouton 
    const header = document.querySelector('.header'); // ciblé le header
    const links = document.querySelectorAll('.navbar a'); // récup tout les liens de la navbar
    
    btn.addEventListener('click', () => {
            header.classList.toggle('show-nav'); //le toggle permet d'ouvrir et fermer (alterner entre 2 actions)
    });
    links.forEach(link => {  
            link.addEventListener('click', () => {
                    header.classList.remove('show-nav'); //permet d'aller a chaque liste et fermer le menu
            });     
    })
}
menuMobil();  // on appelle la fonction