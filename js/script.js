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
const lastVisitedPage = localStorage.getItem('lastPage');
console.log('Last visited page:', lastVisitedPage);

// Détermine la position initiale du personnage en fonction de la dernière page visitée
let initialX = 40; // Valeur par défaut

const currentPage = window.location.pathname.split("/").pop(); // Obtient le nom de la page actuelle
console.log('Current page:', currentPage);

if (lastVisitedPage === '/index.html') {
    // Si la dernière page visitée était index.html, le personnage doit être dessiné à gauche
    initialX = 890;
    console.log('Setting initial X to 890');
} else if (lastVisitedPage === '/page_4.html') {
    // Si la dernière page visitée était page_4.html, et qu'on vient de l'index, le personnage doit être dessiné à gauche
    if (currentPage === 'index.html') {
        initialX = 890;
        console.log('Setting initial X to 890');
    } else {
        // Sinon, le personnage doit être dessiné à droite
        initialX = 40;
        console.log('Setting initial X to 40');
    }
}

// Initialise la position du personnage
let x = initialX;
console.log('Initial X:', x);



/* Récupère la dernière page visitée depuis le localStorage
const lastVisitedPage = localStorage.getItem('lastPage');
console.log('Last visited page:', lastVisitedPage);

// Détermine la position initiale du personnage en fonction de la dernière page visitée
let initialX = 40; // Valeur par défaut

if (lastVisitedPage === 'index.html') {
    // Si la dernière page visitée était page_2.html, le personnage doit être dessiné à gauche
    initialX = 890;
    console.log('Setting initial X to 890')
} else if (lastVisitedPage === 'page_4.html') {
    / Si la dernière page visitée était page_4.html, le personnage doit être dessiné à droite
    initialX = 890;
    console.log('Setting initial X to 40');
}

// Initialise la position du personnage
let x = initialX*/

/* Récupère la dernière page visitée depuis le localStorage
const currentPage = window.location.pathname.split("/").pop(); // Obtient le nom de la page actuelle
const lastVisitedPage = localStorage.getItem('lastPage');
console.log('Last visited page:', lastVisitedPage);

 Détermine la position initiale du personnage en fonction de la dernière page visitée et de la page actuelle
let initialX = 40

if (currentPage === 'index.html') {
    if (lastVisitedPage === 'page_2.html') {
        initialX = 890;
        console.log('Setting initial X to 890');
    }
} else if (currentPage === 'page_2.html') {
    if (lastVisitedPage === 'page_3.html') {
        initialX = 890;
        console.log('Setting initial X to 890');
    }
} else if (currentPage === 'page_3.html') {
    if (lastVisitedPage === 'page_4.html') {
        initialX = 890;
        console.log('Setting initial X to 890');
    } else if (lastVisitedPage === 'index.html') {
        initialX = 890;
        console.log('Setting initial X to 890');
    }
}

/ Initialise la position du personnage
let x = initialX;*/
