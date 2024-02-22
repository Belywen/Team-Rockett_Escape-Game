/*Changements de page 
    à partir de la page 1 : gauche -> page 4 et droite -> page 2 */

/*Fonctions pour faire bouger le personnage*/
function movePersoRight() {
    clearPerso()
    isArrowKeyPressed = true //Touche pressée
    isPersoDroite = true //Direction du personnage
    prevX = x
    x += 20 
    // Vérifie si le personnage est sorti du canvas par la droite
    if (x > canvas.width) {
        // Met à jour l'URL avec l'information sur la dernière page visitée
        window.location.href = "page_2.html"; 
    }
    drawPerso();
}

function movePersoLeft() { 
    clearPerso()
    isArrowKeyPressed = true //Touche pressée
    isPersoDroite = false // Direction du personnage
    prevX = x
    x -= 20
    // Vérifie si le personnage est sorti du canvas par la gauche
    if (x < -50) {
        // Met à jour l'URL avec l'information sur la dernière page visitée
        window.location.href = "page_4.html"; 
    }
    drawPerso();
}

// Récupère la page précédente depuis le localStorage
const previousPage = localStorage.getItem('lastPage');

// Vérifie la page précédente et charge le bon script de mouvement
if (previousPage === 'page_4.html') {
    // Charge le script de mouvement approprié pour la page 1
    const script = document.createElement('script_move_p1');
    script.src = 'js/script_move_right.js';
    document.head.appendChild(script);
} else if (previousPage === 'page_2.html') {
    // Charge le script de mouvement approprié pour la page 2
    const script = document.createElement('script_move_p1');
    script.src = 'js/script_move_left.js';
    document.head.appendChild(script);
} 
else {
    // Si la page précédente n'est pas définie, redirige vers la page d'accueil
    window.location.href = 'index.html';
}
