//Mouvements du personnage

//Variables pour le personnage
let isPersoDroite = true
let isPersoDroite1 = true
let isArrowKeyPressed = false

let prevX = x
let prevY = y

//Efface le personnage à chaque mouvement
function clearPerso() {
    let clearWidth = 100 // Largeur de la région du personnage
    ctx.clearRect(prevX - clearWidth, 0, clearWidth + 70, canvas.height)
}

//Fonction qui dessine le personnage
function drawPerso() {
    clearPerso()
    if (isArrowKeyPressed) {
        if (isPersoDroite) { 
            if (isPersoDroite1) {
                persoDroite1();
            } else {
                persoDroite2();
            }
        } else {
            if (isPersoDroite1) {
                persoGauche1();
            } else {
                persoGauche2();
            }
        }
        isPersoDroite1 = !isPersoDroite1;
    } else {
        persoFace();
    }
}


function draw() {
    drawPerso()
}

draw()