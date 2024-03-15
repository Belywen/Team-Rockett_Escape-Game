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


let x
// Récupère la dernière page visitée depuis le localStorage
const lastVisitedPage = localStorage.getItem('lastPage')

// Détermine la position initiale du personnage en fonction de la dernière page visitée
 //let x = 40  //Valeur par défaut

const currentPage = window.location.pathname.split("/").pop(); // Obtient le nom de la page actuelle


if (currentPage === "index.html") {
    console.log('Last visited page:',lastVisitedPage)
    console.log("Page actuelle:",currentPage)
 if (lastVisitedPage === "page_4.html") {
    x = 40
 } else {
    x = 890
 }
} else if (currentPage === "page_2.html") {
    console.log('Last visited page:',lastVisitedPage)
    console.log("Page actuelle:",currentPage)
    if (lastVisitedPage === "index.html") {
        x = 40
    } else {
        x = 890
    }
} else if (currentPage === "page_3.html") {
    console.log('Last visited page:',lastVisitedPage)
    console.log("Page actuelle:",currentPage)
    if (lastVisitedPage === "page_2.html") {
        x = 40
    } else {
        x = 890
    }
} else {
    console.log('Last visited page:',lastVisitedPage)
    console.log("Page actuelle:",currentPage)
    if (lastVisitedPage === "page_3.html") {
        x = 40
    } else {
        x = 890
    }
}

console.log('X:', x)




