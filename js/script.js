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


// Récupèration de la dernière page visitée depuis le localStorage et de la page actuelle
const lastVisitedPage = localStorage.getItem('lastPage')
const currentPage = window.location.pathname.split("/").pop() 


if (currentPage === "index.html") {
 if (lastVisitedPage === "/page_4.html") {
    x = 40
 } else {
    x = 850
 }
} else if (currentPage === "page_2.html") {
    if (lastVisitedPage === "/index.html") {
        x = 40
    } else {
        x = 850
    }
} else if (currentPage === "page_3.html") {
    if (lastVisitedPage === "/page_2.html") {
        x = 40
    } else {
        x = 850
    }
} else {
    if (lastVisitedPage === "/page_3.html") {
        x = 40
    } else {
        x = 850
    }
}




