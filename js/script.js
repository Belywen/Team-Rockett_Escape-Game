let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")
let gameSection = document.getElementById("canvas-container")
canvas.width = gameSection.clientWidth
canvas.height = gameSection.clientHeight

// Event pour pressions sur clavier
document.addEventListener("keydown", handleKeyPress)
document.addEventListener("keyup", handleKeyRelease)

//Event désignant les actions d'albert lorsque l'on clique sur une flèche
function handleKeyPress(event) {    
    switch (event.key) {
        case "ArrowRight":
            moveAlbertRight()
            break
        case "ArrowLeft":
            moveAlbertLeft()
            break
    }
}

//Event quand la touche est relachée
function handleKeyRelease(event) {
    switch (event.key) {
        case "ArrowRight":
        case "ArrowLeft":
            isArrowKeyPressed = false
            drawAlbert()
            break
    }
}


// Partie du personnage
//Variables pour Albert
let x = 50
let y = 50
let isAlbertDroite = true
let isAlbertDroite1 = true
let isArrowKeyPressed = false
let albertImage = new Image()
albertImage.src = "images/persos/01a_perso.png"

//Permet d'attendre que l'image soit complétement chargée avant de dessiner Albert
albertImage.onload = function () {
    drawAlbert();
}

//Simulation d'objet
function redSquare() {
    ctx.fillStyle = "red"
    ctx.fillRect(50, 50, 50, 50)
}

/*Albert qui marche vers la droite n1*/
function albertDroite1() {
    let sx = 1
    let sy = 3
    let sWidth = 52 
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(albertImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Albert qui marche vers la droite n2*/
function albertDroite2() {
    let sx = 77
    let sy = 1
    let sWidth = 47 
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(albertImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Albert qui marche vers la gauche n1*/
function albertGauche1() {
    let sx = 584 
    let sy = 289
    let sWidth = 56
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(albertImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Albert qui marche vers la gauche n2*/
function albertGauche2() {
    let sx = 513
    let sy = 286
    let sWidth = 43
    let sHeight = 140
    let dx = x     
    let dy = y 

    ctx.drawImage(albertImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Albert face*/
function albertFace() {  
    // Dessine seulement la partie de l'image délimitée par les coordonnées (sx, sy) et les dimensions (sWidth, sHeight)
    let sx = 136.144 // Coordonnée x du coin supérieur gauche de la région à extraire
    let sy = 136.283 // Coordonnée y du coin supérieur gauche de la région à extraire
    let sWidth = 40 // Largeur de la région à extraire
    let sHeight = 147 // Hauteur de la région à extraire
    let dx = x // Coordonnée x où dessiner l'image sur le canevas
    let dy = y // Coordonnée y où dessiner l'image sur le canevas

    ctx.drawImage(albertImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}


let prevX = x
let prevY = y

//Efface Albert à chaque mouvement
function clearAlbert() {
    let clearWidth = 50 // Largeur de la région d'Albert
    ctx.clearRect(prevX - clearWidth, 0, clearWidth + 70, canvas.height)
}

/*Fonctions pour faire bouger Albert*/
function moveAlbertRight() {
    clearAlbert()
    isArrowKeyPressed = true //Touche pressée
    isAlbertDroite = true //Direction d'Albert
    prevX = x
    x += 20 
    drawAlbert()
}

function moveAlbertLeft() { 
    clearAlbert()
    isArrowKeyPressed = true //Touche pressée
    isAlbertDroite = false // Direction d'Albert
    prevX = x
    x -= 20
    drawAlbert()
}

//Fonction qui dessine Albert
function drawAlbert() {
    clearAlbert()
    if (isArrowKeyPressed) {
        if (isAlbertDroite) { 
            if (isAlbertDroite1) {
                albertDroite1();
            } else {
                albertDroite2();
            }
        } else {
            if (isAlbertDroite1) {
                albertGauche1();
            } else {
                albertGauche2();
            }
        }
        isAlbertDroite1 = !isAlbertDroite1;
    } else {
        albertFace();
    }
}

function draw() {
    drawAlbert()
    redSquare()
}

draw()

