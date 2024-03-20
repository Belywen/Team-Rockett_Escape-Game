//Dessin du personnage

let persoImage = new Image()
persoImage.src = "images/personnages/01a_perso.png"

//Permet d'attendre que l'image soit complétement chargée avant de dessiner le personnage
persoImage.onload = function () {
    drawPerso();
}

//Personnage qui marche vers la droite n1
function persoDroite1() {
    let sx = 476
    let sy = 38
    let sWidth = 117 
    let sHeight = 331 
    let dx = x 
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

//Personnage qui marche vers la droite n2
function persoDroite2() {
    let sx = 77
    let sy = 1
    let sWidth = 47 
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

//Personnage qui marche vers la gauche n1
function persoGauche1() {
    let sx = 584 
    let sy = 289
    let sWidth = 56
    let sHeight = 140 
    let dx = x 
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

//Personnage qui marche vers la gauche n2
function persoGauche2() {
    let sx = 513
    let sy = 286
    let sWidth = 43
    let sHeight = 140
    let dx = x     
    let dy = y 

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight)
}

//Personnage face
function persoFace() {  
    // Dessine seulement la partie de l'image délimitée par les coordonnées (sx, sy) et les dimensions (sWidth, sHeight)
    let sx = 36 // Coordonnée x du coin supérieur gauche de la région à extraire
    let sy = 181 // Coordonnée y du coin supérieur gauche de la région à extraire
    let sWidth = 257 // Largeur de la région à extraire
    let sHeight = 563 // Hauteur de la région à extraire

    // Dimensions souhaitées pour le personnage
    let targetWidth = 150 // Largeur souhaitée
    let targetHeight = (targetWidth / sWidth) * sHeight; // Calculer la hauteur proportionnellement à la largeur

    let dx = x // Coordonnée x où dessiner l'image sur le canevas
    let dy = y // Coordonnée y où dessiner l'image sur le canevas

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, targetWidth, targetHeight)
}