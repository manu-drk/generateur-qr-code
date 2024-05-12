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
