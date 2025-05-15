// Annahme: chorDaten ist global verfügbar aus chor-daten.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("choir-list");

  if (!container) {
    console.error("Fehler: Kein Element mit ID 'choir-list' gefunden.");
    return;
  }

  // Zugriff auf das Chor-Array
  chorDaten.features.forEach((feature) => {
    const props = feature.properties;

    // Chor-HTML erzeugen
    const card = document.createElement("article");
    card.className = "choir-card";
    card.innerHTML = `
      <img src="${props.bild}" alt="${props.name}" class="choir-image" />
      <div class="choir-info">
        <h3 class="choir-name">${props.name}</h3>
        <p class="choir-description">${props.beschreibung}</p>
        <div class="conductor-info">
          <span class="label">Chorleitung:</span>
          <span class="conductor-name">${props.leitung}</span>
        </div>
      </div>
      <div class="choir-details">
        <div class="stats">
          <div class="stat-item">
            <span class="stat-label">Aktive SängerInnen:</span>
            <span class="stat-value">${props.saenger}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">nächstes Konzert:</span>
            <span class="stat-value">${props.konzert ?? "n/a"}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Aufnahmestopp:</span>
            <span class="stat-value">${props.aufnahmestopp ? "ja" : "nein"}</span>
          </div>
        </div>
        <a href="${props.link}" class="choir-website" target="_blank">${props.link}</a>
        <div class="contact-info">
          <p class="contact-text">
            Kontakt:<br>
            <strong>${props.kontakt}</strong>
          </p>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
});
