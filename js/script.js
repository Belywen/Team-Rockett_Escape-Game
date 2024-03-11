let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")
let canvasContainerSection = document.getElementById("canvasContainer")
canvas.width = canvasContainerSection.clientWidth
canvas.height = canvasContainerSection.clientHeight


// Event pour pressions sur clavier
document.addEventListener("keydown", handleKeyPress)
document.addEventListener("keyup", handleKeyRelease)

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

// Récupère la dernière page visitée depuis le localStorage
const lastVisitedPage = localStorage.getItem('lastVisitedPage');
console.log('Last visited page:', lastVisitedPage);

// Détermine la position initiale du personnage en fonction de la dernière page visitée
let initialX = 40; // Valeur par défaut

if (lastVisitedPage === 'page_2.html') {
    // Si la dernière page visitée était page_2.html, le personnage doit être dessiné à gauche
    initialX = 890;
    console.log('Setting initial X to 890')
}

// Initialise la position du personnage
let x = initialX;







/*Fonction qui se rappelle depuis quelle page vient le personnage
S'il vient de la page de droite alors x = 40 sinon x = 890 */

