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


