//Dessin du personnage

let persoImage = new Image()
persoImage.src = "images/personnages/01a_perso.png"

//Permet d'attendre que l'image soit complétement chargée avant de dessiner le personnage
persoImage.onload = function () {
    drawPerso();
}

/*Personnage qui marche vers la droite n1*/
function persoDroite1() {
    let sx = 1
    let sy = 3
    let sWidth = 52 
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Personnage qui marche vers la droite n2*/
function persoDroite2() {
    let sx = 77
    let sy = 1
    let sWidth = 47 
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Personnage qui marche vers la gauche n1*/
function persoGauche1() {
    let sx = 584 
    let sy = 289
    let sWidth = 56
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Personnage qui marche vers la gauche n2*/
function persoGauche2() {
    let sx = 513
    let sy = 286
    let sWidth = 43
    let sHeight = 140
    let dx = x     
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

/*Personnage face*/
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

//Mouvements du personnage

//Variables pour le personnage
let x = 40
let y = 400
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

