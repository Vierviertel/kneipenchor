document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("choir-list");
  const bundeslandFilter = document.getElementById("bundesland-filter");
  const genreFilter = document.getElementById("genre-filter");

  if (!container) {
    console.error("Fehler: Kein Element mit ID 'choir-list' gefunden.");
    return;
  }

  function renderList(features) {
    container.innerHTML = "";
    features.forEach((feature) => {
      const props = feature.properties;
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
  }

  function applyFilters() {
    const bundesland = bundeslandFilter.value;
    const genre = genreFilter.value;

    const filtered = chorDaten.features.filter((feature) => {
      const props = feature.properties;
      const matchBundesland = bundesland === "alle" || props.bundesland === bundesland;
      const matchGenre = genre === "alle" || props.genres === genre;
      return matchBundesland && matchGenre;
    });

    renderList(filtered);
  }

  bundeslandFilter.addEventListener("change", applyFilters);
  genreFilter.addEventListener("change", applyFilters);

  // Initial render
  renderList(chorDaten.features);
});

const aufnahmestoppFilter = document.getElementById("aufnahmestopp-filter");

function applyFilters() {
  const bundesland = bundeslandFilter.value;
  const genre = genreFilter.value;
  const ohneAufnahmestopp = aufnahmestoppFilter.checked;

  const filtered = chorDaten.features.filter((feature) => {
    const props = feature.properties;
    const matchBundesland = bundesland === "alle" || props.bundesland === bundesland;
    const matchGenre = genre === "alle" || (Array.isArray(props.genres) ? props.genres.includes(genre) : props.genres === genre);
    const matchAufnahmestopp = !ohneAufnahmestopp || props.aufnahmestopp === false;
    return matchBundesland && matchGenre && matchAufnahmestopp;
  });

  renderList(filtered);
}

aufnahmestoppFilter.addEventListener("change", applyFilters);
