// Fonction pour générer la carte de visite
function generateCard() {
    // Récupération des valeurs du formulaire
    const entreprise = document.getElementById('entreprise').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const fonction = document.getElementById('fonction').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const site = document.getElementById('site').value;
    const textColor = document.getElementById('textColor').value;
    const backgroundChoice = document.querySelector('input[name="backgroundChoice"]:checked').value;
    const background = backgroundChoice === 'solid' ? document.getElementById('solidBackground').value : `linear-gradient(${document.getElementById('gradientDirection').value}, ${document.getElementById('startColor').value}, ${document.getElementById('endColor').value})`;

    // Vérification des cases à cocher pour déterminer les éléments à afficher
    const hideEntreprise = document.getElementById('hideEntreprise').checked;
    const hideNom = document.getElementById('hideNom').checked;
    const hidePrenom = document.getElementById('hidePrenom').checked;
    const hideFonction = document.getElementById('hideFonction').checked;
    const hideTelephone = document.getElementById('hideTelephone').checked;
    const hideEmail = document.getElementById('hideEmail').checked;
    const hideSite = document.getElementById('hideSite').checked;

    // Affichage de l'image
    const logoInput = document.getElementById('logo');
    const logoFile = logoInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const image = document.createElement('img');
        image.src = e.target.result;
        image.classList.add('modal-image'); // Ajouter la classe modal-image pour le style

        // Génération du code HTML de la carte de visite après la lecture de l'image
        const carteHTML = `
            <div class="card" style="background: ${background}; color: ${textColor};">
                <div class="image-container">
                    ${image.outerHTML}
                </div>
                <div class="card-content">
                    ${!hideEntreprise ? `<p>${entreprise}</p>` : ''}
                    ${!hideNom ? `<p>${nom}</p>` : ''}
                    ${!hidePrenom ? `<p>${prenom}</p>` : ''}
                    ${!hideFonction ? `<p>${fonction}</p>` : ''}
                    ${!hideTelephone ? `<p><a href="tel:${telephone}">${telephone}</a></p>` : ''}
                    ${!hideEmail ? `<p><a href="mailto:${email}">${email}</a></p>` : ''}
                    ${!hideSite ? `<p><a href="${site}" target="_blank">${site}</a></p>` : ''}
                </div>
            </div>
        `;

        // Affichage de la carte de visite dans le conteneur dédié
        document.querySelector('.modal-content .card-container').innerHTML = carteHTML;
    };

    reader.readAsDataURL(logoFile);
}

// Fonction pour générer la carte de visite et ouvrir la modal
function generateCardAndOpenModal() {
    generateCard(); // Génère la carte de visite
    openModal(); // Ouvre la modal après avoir généré la carte
}

// Fonction pour ouvrir la modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Fonction pour fermer la modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Gestion de l'affichage des options de dégradé
function toggleGradientOptions() {
    const solidBackground = document.getElementById('solidBackground');
    const gradientOptions = document.getElementById('gradientOptions');

    gradientOptions.style.display = solidBackground.checked ? 'none' : 'block';
}

// Gestion de la validation du formulaire
function validateForm() {
    const entreprise = document.getElementById('entreprise').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');

    if (entreprise === '' || nom === '' || prenom === '' || email === '') {
        errorMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
        return false; // Empêcher la soumission du formulaire
    }
    return true; // Autoriser la soumission du formulaire si tous les champs sont remplis
}

// Gestion de l'affichage des erreurs au survol du bouton Valider
function handleHover() {
    const submitButton = document.getElementById('submitButton');
    const entreprise = document.getElementById('entreprise');
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const errorMessage = document.getElementById('errorMessage');

    submitButton.addEventListener('mouseenter', function() {
        if (entreprise.value === '' || nom.value === '' || prenom.value === '' || email.value === '') {
            errorMessage.textContent = "Veuillez remplir tous les champs obligatoires.";
        } else {
            errorMessage.textContent = ""; // Réinitialiser le message d'erreur s'il est vide
        }
    });
}

// Appel des fonctions au chargement du document
document.addEventListener('DOMContentLoaded', function() {
    handleHover();
});
