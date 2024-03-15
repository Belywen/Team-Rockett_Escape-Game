//Mouvements du personnage

//Variables pour le personnage
let y = 220
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
                persoDroite1()
            } else {
                persoDroite2()
            }
        } else {
            if (isPersoDroite1) {
                persoGauche1()
            } else {
                persoGauche2()
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

//Fonctions pour faire bouger le personnage
function movePersoRight() {
    movePerso('right')
}

function movePersoLeft() { 
    movePerso('left')
}

//Changements de page 

function movePerso(direction) {
    clearPerso();
    isArrowKeyPressed = true; // Touche pressée

    if (direction === 'right') {
        isPersoDroite = true; // Direction du personnage
        prevX = x;
        x += 20;

        // Vérifie si le personnage est sorti du canvas par la droite
        if (x > canvas.width) {
            if (currentPage === "index.html")
                window.location.href = "page_2.html"
            else if (currentPage === "page_2.html")
                window.location.href = "page_3.html"
            else if (currentPage === "page_3.html")
                window.location.href = "page_4.html"
                else if (currentPage === "page_4.html")
                window.location.href = "index.html"
        }
    } else if (direction === 'left') {
        isPersoDroite = false; // Direction du personnage
        prevX = x;
        x -= 20;

        // Vérifie si le personnage est sorti du canvas par la gauche
        if (x < -50) {
            if (currentPage === "index.html")
                window.location.href = "page_4.html"
            else if (currentPage === "page_4.html")
                window.location.href = "page_3.html"
            else if (currentPage === "page_3.html")
                window.location.href = "page_2.html"
                else if (currentPage === "page_2.html")
                window.location.href = "index.html"
        }
    }

    drawPerso();
}
