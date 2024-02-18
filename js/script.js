let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")
let canvasContainerSection = document.getElementById("canvasContainer")
canvas.width = canvasContainerSection.clientWidth
canvas.height = canvasContainerSection.clientHeight

// Event pour pressions sur clavier
document.addEventListener("keydown", handleKeyPress)
document.addEventListener("keyup", handleKeyRelease)

//Event désignant les actions du personnage lorsque l'on clique sur une flèche
function handleKeyPress(event) {    
    switch (event.key) {
        case "ArrowRight":
            movePersoRight()
            break
        case "ArrowLeft":
            movePersoLeft()
            break
    }
}

//Event quand la touche est relachée
function handleKeyRelease(event) {
    switch (event.key) {
        case "ArrowRight":
        case "ArrowLeft":
            isArrowKeyPressed = false
            drawPerso()
            break
    }
}

//Partie du personnage

//Variables pour Perso
let x = 50
let y = 400
let isPersoDroite = true
let isPersoDroite1 = true
let isArrowKeyPressed = false
let persoImage = new Image()
persoImage.src = "images/personnages/01a_perso.png"

//Permet d'attendre que l'image soit complétement chargée avant de dessiner Perso
persoImage.onload = function () {
    drawPerso();
}

/*Perso qui marche vers la droite n1*/
function persoDroite1() {
    let sx = 1
    let sy = 3
    let sWidth = 52 
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Perso qui marche vers la droite n2*/
function persoDroite2() {
    let sx = 77
    let sy = 1
    let sWidth = 47 
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Perso qui marche vers la gauche n1*/
function persoGauche1() {
    let sx = 584 
    let sy = 289
    let sWidth = 56
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Perso qui marche vers la gauche n2*/
function persoGauche2() {
    let sx = 513
    let sy = 286
    let sWidth = 43
    let sHeight = 140
    let dx = x     
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Perso face*/
function persoFace() {  
    // Dessine seulement la partie de l'image délimitée par les coordonnées (sx, sy) et les dimensions (sWidth, sHeight)
    let sx = 136.144 // Coordonnée x du coin supérieur gauche de la région à extraire
    let sy = 136.283 // Coordonnée y du coin supérieur gauche de la région à extraire
    let sWidth = 40 // Largeur de la région à extraire
    let sHeight = 147 // Hauteur de la région à extraire
    let dx = x // Coordonnée x où dessiner l'image sur le canevas
    let dy = y // Coordonnée y où dessiner l'image sur le canevas

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}


let prevX = x
let prevY = y

//Efface Perso à chaque mouvement
function clearPerso() {
    let clearWidth = 50 // Largeur de la région d'Perso
    ctx.clearRect(prevX - clearWidth, 0, clearWidth + 70, canvas.height)
}

/*Fonctions pour faire bouger Perso*/
function movePersoRight() {
    clearPerso()
    isArrowKeyPressed = true //Touche pressée
    isPersoDroite = true //Direction d'Perso
    prevX = x
    x += 20 
    drawPerso()
}

function movePersoLeft() { 
    clearPerso()
    isArrowKeyPressed = true //Touche pressée
    isPersoDroite = false // Direction d'Perso
    prevX = x
    x -= 20
    drawPerso()
}

//Fonction qui dessine Perso
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