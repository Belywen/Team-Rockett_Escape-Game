let enigmeAffichee = false;

function allumerOrdinateur() {
    const imageOrdinateur = document.getElementById('imageOrdinateur');

    if (!enigmeAffichee) {
        imageOrdinateur.src = 'images/pc_password.png';
        document.getElementById('imageOrdinateur').style.display = 'block';
    }
}

function verifierMotDePasse(event) {
    if (event.key === 'Enter') {
        const motDePasse = 'BANANA';
        const saisie = document.getElementById('motDePasseInput').value.toUpperCase();
        if (saisie === motDePasse) {
            ouvrirDossiers();
        } else {
            alert('Mot de passe incorrect réessayez... fait chier !');
            document.getElementById('motDePasseInput').value = '';
        }
    }
}

function ouvrirDossiers() {
    const imageOrdinateur = document.getElementById('imageOrdinateur');
    imageOrdinateur.src = 'images/pc_dossier.png';
    imageOrdinateur.addEventListener('click', afficherEnigme);
}

function afficherEnigme() {
    const imageOrdinateur = document.getElementById('imageOrdinateur');
    
    if (!enigmeAffichee) {
        imageOrdinateur.src = 'images/pc_livre.png';
        enigmeAffichee = true;
        setTimeout(function() {
            imageOrdinateur.src = 'images/pc_enigme.png';
            enigmeAffichee = false;
        }, 3000); // 2 secondes
    }
}
