/*Changements de page 
    à partir de la page 4 : gauche -> page 3 et droite -> index */

/*Fonctions pour faire bouger le personnage*/
function movePersoRight() {
    clearPerso()
    isArrowKeyPressed = true //Touche pressée
    isPersoDroite = true //Direction d'Perso
    prevX = x
    x += 20 
    // Vérifie si le personnage est sorti du canvas par la droite
    if (x > canvas.width) {
        // Met à jour l'URL avec l'information sur la dernière page visitée
        window.location.href = "index.html"
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
        window.location.href = "page_3.html"
    }
    drawPerso();
}

