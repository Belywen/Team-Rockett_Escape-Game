/*Changements de page 
    à partir de la page 1 : gauche -> page 2 et droite -> page 4 */



/*Fonctions pour faire bouger le personnage*/
function movePersoRight() {
    clearPerso()
    isArrowKeyPressed = true //Touche pressée
    isPersoDroite = true //Direction d'Perso
    prevX = x
    x += 20 
    // Vérifie si le personnage est sorti du canvas par la droite
    if (x > canvas.width) {
        window.location.href = "page_4.html"
    } else {
    drawPerso()
}}

function movePersoLeft() { 
    clearPerso()
    isArrowKeyPressed = true //Touche pressée
    isPersoDroite = false // Direction du personnage
    prevX = x
    x -= 20
    // Vérifie si le personnage est sorti du canvas par la gauche
    if (x < -50) {
        window.location.href = "page_2.html"
    } else {
    drawPerso()
}}
