const chorListeContainer = document.getElementById("chor-liste");

chorDaten.forEach(chor => {
  const card = document.createElement("article");
  card.className = "choir-card";

  card.innerHTML = `
    <img src="${chor.bild}" alt="${chor.name}" class="choir-image" />
    <div class="choir-info">
      <h3 class="choir-name">${chor.name}</h3>
      <p class="choir-description">${chor.beschreibung}</p>
      <div class="conductor-info">
        <span class="label">Chorleitung:</span>
        <span class="conductor-name">${chor.leitung}</span>
      </div>
    </div>
    <div class="choir-details">
      <div class="stats">
        <div class="stat-item">
          <span class="stat-label">Aktive SängerInnen:</span>
          <span class="stat-value">${chor.saenger}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">nächstes Konzert:</span>
          <span class="stat-value">${chor.konzert}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Aufnahmestopp:</span>
          <span class="stat-value">${chor.aufnahmestopp ? "ja" : "nein"}</span>
        </div>
      </div>
      <a href="${chor.link}" class="choir-website" target="_blank">${chor.link}</a>
      <div class="contact-info">
        <p class="contact-text">Kontakt:<br><strong>${chor.kontakt}</strong></p>
      </div>
    </div>
  `;

  chorListeContainer.appendChild(card);
});
