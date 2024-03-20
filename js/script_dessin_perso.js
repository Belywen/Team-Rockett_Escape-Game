//Dessin du personnage

let persoImage = new Image()
persoImage.src = "images/personnages/01a_perso.png"

//Permet d'attendre que l'image soit complétement chargée avant de dessiner le personnage
persoImage.onload = function () {
    drawPerso();
}

//Personnage qui marche vers la droite n1
function persoDroite1() {
    let sx = 513
    let sy = 112
    let sWidth = 344 
    let sHeight = 567 
    let dx = x 
    let dy = y 

    // Dimensions souhaitées pour le personnage
    let targetWidth = 200 // Largeur souhaitée
    let targetHeight = (targetWidth / sWidth) * sHeight;

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, targetWidth, targetHeight)
}

//Personnage qui marche vers la droite n2
function persoDroite2() {
    let sx = 865
    let sy = 70
    let sWidth = 232 
    let sHeight = 623 
    let dx = x 
    let dy = y 

    // Dimensions souhaitées pour le personnage
    let targetWidth = 120 // Largeur souhaitée
    let targetHeight = (targetWidth / sWidth) * sHeight;

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, targetWidth, targetHeight)
}

//Personnage qui marche vers la droite n3
function persoDroite3() {
    let sx = 1038
    let sy = 66 
    let sWidth = 249 
    let sHeight = 636 
    let dx = x 
    let dy = y 

    // Dimensions souhaitées pour le personnage
    let targetWidth = 200 // Largeur souhaitée
    let targetHeight = (targetWidth / sWidth) * sHeight;

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, targetWidth, targetHeight)
}

//Personnage qui marche vers la droite n4
function persoDroite4() {
    let sx = 1396
    let sy = 94
    let sWidth = 407 
    let sHeight = 587 
    let dx = x 
    let dy = y 

    // Dimensions souhaitées pour le personnage
    let targetWidth = 200 // Largeur souhaitée
    let targetHeight = (targetWidth / sWidth) * sHeight;

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, targetWidth, targetHeight)
}

//Personnage qui marche vers la gauche n1
function persoGauche1() {
    let sx = 1450 
    let sy = 790
    let sWidth = 433
    let sHeight = 558 
    let dx = x 
    let dy = y 

    // Dimensions souhaitées pour le personnage
    let targetWidth = 200 // Largeur souhaitée
    let targetHeight = (targetWidth / sWidth) * sHeight;

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, targetWidth, targetHeight)
}

//Personnage qui marche vers la gauche n2
function persoGauche2() {
    let sx = 1209
    let sy = 751
    let sWidth = 232
    let sHeight = 607
    let dx = x     
    let dy = y 

    // Dimensions souhaitées pour le personnage
    let targetWidth = 120 // Largeur souhaitée
    let targetHeight = (targetWidth / sWidth) * sHeight;

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, targetWidth, targetHeight)
}

//Personnage qui marche vers la gauche n3
function persoGauche3() {
    let sx = 928
    let sy = 760
    let sWidth = 250
    let sHeight = 620
    let dx = x     
    let dy = y 

    // Dimensions souhaitées pour le personnage
    let targetWidth = 200 // Largeur souhaitée
    let targetHeight = (targetWidth / sWidth) * sHeight;

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, targetWidth, targetHeight)
}

//Personnage qui marche vers la gauche n4
function persoGauche4() {
    let sx = 513
    let sy = 286
    let sWidth = 43
    let sHeight = 140
    let dx = x     
    let dy = y 

    // Dimensions souhaitées pour le personnage
    let targetWidth = 200 // Largeur souhaitée
    let targetHeight = (targetWidth / sWidth) * sHeight;

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, targetWidth, targetHeight)
}

//Personnage face
function persoFace() {  
    // Dessine seulement la partie de l'image délimitée par les coordonnées (sx, sy) et les dimensions (sWidth, sHeight)
    let sx = 12 // Coordonnée x du coin supérieur gauche de la région à extraire
    let sy = 364 // Coordonnée y du coin supérieur gauche de la région à extraire
    let sWidth = 482 // Largeur de la région à extraire
    let sHeight = 1065 // Hauteur de la région à extraire

    // Dimensions souhaitées pour le personnage
    let targetWidth = 150 // Largeur souhaitée
    let targetHeight = (targetWidth / sWidth) * sHeight; // Calculer la hauteur proportionnellement à la largeur

    let dx = x // Coordonnée x où dessiner l'image sur le canevas
    let dy = y // Coordonnée y où dessiner l'image sur e canevas

    ctx.drawImage(persoImage, sx, sy, sWidth, sHeight, dx, dy, targetWidth, targetHeight)
}