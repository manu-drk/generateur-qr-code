// Fonction pour générer la carte de visite
function generateCard() {
    // Récupération des valeurs du formulaire
    const entreprise = document.getElementById('entreprise').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const fonction = document.getElementById('fonction').value;
    const telephone = document.getElementById('telephone').value;
    const email = document.getElementById('email').value;
    const siteInput = document.getElementById('site');
    const site = siteInput.value;
    const textColor = document.getElementById('textColor').value;

    const background = document.getElementById('background').value;

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
            <div class="card-details">
                <div class="card-society">
                    ${!hideEntreprise ? `<p>${entreprise}</p>` : ''}
                </div>
                <div class="card-identity">
                    ${!hideNom ? `<p>${nom}</p>` : ''}
                    ${!hidePrenom ? `<p>${prenom}</p>` : ''}
                </div>
                <div class="card-contact">
                    ${!hideFonction ? `<p>${fonction}</p>` : ''}
                    ${!hideTelephone ? `<p><a href="tel:${telephone}">${telephone}</a></p>` : ''}
                    ${!hideEmail ? `<p><a href="mailto:${email}">${email}</a></p>` : ''}
                    ${!hideSite && site ? `<p><a href="${site}" target="_blank">${site}</a></p>` : ''}
                </div>
            </div>
        </div>
    `;

    // Affichage de la carte de visite dans le conteneur dédié
    document.querySelector('.modal-content .card-container').innerHTML = carteHTML;
};

    reader.readAsDataURL(logoFile);
}



// Gestion de l'affichage de la première partie et du bouton "Étape suivante"
function showPartie1() {
    const partie1 = document.getElementById('partie1');
    const partie2 = document.getElementById('partie2');
    const submitButton = document.getElementById('submitButton');
    const nextButton = document.getElementById('nextButton');

    // Masquer la deuxième partie et afficher la première partie
    partie2.style.display = 'none';
    partie1.style.display = 'block';

    // Masquer le bouton "Valider" et afficher le bouton "Étape suivante"
    submitButton.style.display = 'none';
    nextButton.style.display = 'block';
}

function showPartie2() {
    const partie1 = document.getElementById('partie1');
    const partie2 = document.getElementById('partie2');
    const submitButton = document.getElementById('submitButton');
    const previousButton = document.getElementById('previousButton');

    // Masquer la première partie et afficher la deuxième partie
    partie1.style.display = 'none';
    partie2.style.display = 'block';

    // Afficher le bouton "Valider" et cacher le bouton "Précédent"
    submitButton.style.display = 'block';
    previousButton.style.display = 'block';
}

// Appel des fonctions au chargement du document
document.addEventListener('DOMContentLoaded', function () {
    // Ajout de l'événement sur le bouton "Étape suivante"
    document.getElementById('nextButton').addEventListener('click', function () {
        showPartie2(); // Afficher la deuxième partie du formulaire
    });

    // Ajout de l'événement sur le bouton "Précédent"
    document.getElementById('previousButton').addEventListener('click', function () {
        showPartie1(); // Afficher la première partie du formulaire
    });

    // Ajout de l'événement sur le formulaire pour valider la deuxième partie
    document.getElementById('carteForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Empêcher la soumission du formulaire par défaut
        generateCardAndOpenModal(); // Générer la carte de visite et ouvrir la modal
    });

});

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
        generateCardAndOpenModal(); // Générer la carte de visite et ouvrir la modal
        return false; // Empêcher la soumission du formulaire
    }

    // Appel des fonctions au chargement du document
    document.addEventListener('DOMContentLoaded', function () {
        // Ajout de l'événement sur le formulaire pour valider la deuxième partie
        document.getElementById('carteForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Empêcher la soumission du formulaire par défaut
            validateForm(); // Valider le formulaire
        });
    });
