/* // Event pour clic pic vert
canvas.addEventListener("click", handleCanvasClick)

Fonction anti pic vert
let clickCounter = 0;
let clickLimit = 10; // Limite de clics
let timeLimit = 10000; // Limite de temps en millisecondes (10 secondes)
let blockDuration = 30000; // Durée du blocage en millisecondes (30 secondes)
let lastClickTime = 0;
let gameBlocked = false;


function handleCanvasClick() {
    if (!gameBlocked) {
        clickCounter++;

        // Obtenez le temps actuel en millisecondes
        let currentTime = new Date().getTime();

        // Calculez le temps écoulé depuis le dernier clic
        let elapsedTime = currentTime - lastClickTime;

        // Mettez à jour le dernier temps de clic
        lastClickTime = currentTime;

        if (clickCounter >= clickLimit && elapsedTime <= timeLimit) {
            // Bloquez le jeu
            console.log("Limite de clics atteinte. Le jeu est bloqué pour " + blockDuration / 1000 + " secondes.");
            gameBlocked = true;

            // Débloquez le jeu après la durée de blocage spécifiée
            setTimeout(() => {
                console.log("Le jeu est débloqué.");
                gameBlocked = false;
                clickCounter = 0; // Réinitialisez le compteur de clics
            }, blockDuration);
        } else {
            console.log("Clic numéro : " + clickCounter);
            // Ajoutez ici le code pour le comportement normal du jeu
        }
    }
}*/