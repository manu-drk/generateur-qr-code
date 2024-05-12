const carteHTML = `
<div class="card" style="background: ${background}; color: ${textColor};">
    <div class="image-container">
        ${image.outerHTML}
    </div>
    <div class="card-identity">                    
        ${!hideNom ? `<p>${nom}</p>` : ''}
        ${!hidePrenom ? `<p>${prenom}</p>` : ''}
        
    </div>
    <div class="card-content">
        ${!hideEntreprise ? `<p>${entreprise}</p>` : ''}
        ${!hideNom ? `<p>${nom}</p>` : ''}
        ${!hidePrenom ? `<p>${prenom}</p>` : ''}
        ${!hideFonction ? `<p>${fonction}</p>` : ''}
        ${!hideTelephone ? `<p><a href="tel:${telephone}">${telephone}</a></p>` : ''}
        ${!hideEmail ? `<p><a href="mailto:${email}">${email}</a></p>` : ''}
        ${!hideSite && site ? `<p><a href="${site}" target="_blank">${site}</a></p>` : ''}
    </div>
</div>
`;



// .card {
//     width: 400px;
//     height: 250px;
//     padding: 10px;
//     border: 1px solid #00000021;
//     border-radius: 10px;
//     margin: 20px;
//     display: inline-block;
// }
// .card-society {
//     display:flex;
//     text-transform: uppercase;
//     flex-direction: row;
//     justify-content: center;
//     align-content: flex-start;
//     flex-wrap: wrap;
    
//         flex: 1; /* Pour permettre à la société de s'étendre sur le reste de la largeur */
//         /* Autres styles */
    
// }
// .card-identity {
//     display: flex;
//     flex-direction: row;
//     gap: 15px;
// }
// .card-content {
//     display: flex;
//     flex-direction: column;
//     align-items: flex-start;
// }
// .card-contact {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
// }
// #carteForm {
//     background-color: rgba(222, 215, 215, 0.618);
//     width: 800px;
//     padding: 15px;
//     border-radius: 15px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
//     max-height: 80vh; /* Définir une hauteur maximale */
//     overflow-y: auto; 
// }
// .image-container {
//     display: flex;
//     width: 150px;
//     margin-bottom: 10px;
// }
// .modal-image {
//     display: flex;
//     height: 110px;
//     width: 110px;
// }

// /* Style de la modal */
// .modal {
//     display: none;
//     position: fixed;
//     z-index: 1;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     overflow: auto;
//     background-color: rgba(0, 0, 0, 0.6);
// }

// /* Contenu de la modal */
// .modal-content {
//     background-color: #fefefe;
//     margin: 15% auto;
//     padding: 20px;
//     border: 1px solid #888;
//     width: 55%;
//     height: 50%;
//     display: flex;
//     align-items: center;
//     border-radius: 15px;
//     justify-content: center;
//     position: relative; /* Ajout pour positionner la croix */
// }

// /* Croix pour fermer la modal */
// .close {
//     color: #aaa;
//     position: absolute;
//     top: 10px;
//     right: 10px;
//     font-size: 28px;
//     font-weight: bold;
// }

// .close:hover,
// .close:focus {
//     color: black;
//     text-decoration: none;
//     cursor: pointer;
// }

// /* Conteneur de la carte */
// .modal-content .card-container {
//     display: flex;
//     flex-direction: column; /* Ajout pour aligner le titre et la carte verticalement */
//     align-items: center; /* Ajout pour aligner le titre et la carte horizontalement */
//     text-align: center; /* Ajout pour centrer le texte dans la carte */
// }

// /* Style du titre de la modal */
// #modalTitle {
//     margin-bottom: 20px; /* Ajout pour séparer le titre du contenu de la carte */
// } 

