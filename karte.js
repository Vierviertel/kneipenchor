mapboxgl.accessToken = 'pk.eyJ1IjoidmllcnZpZXJ0ZWwiLCJhIjoiY21hbnN4c3V5MDJkeDJrczl1ZjIxaGIzMyJ9.7GPJr4HzvulQJmMXY72CEA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [10.45, 51.16],
  zoom: 5
});

// Sicherheitscheck
if (!chorDaten || !Array.isArray(chorDaten.features)) {
  console.error("chorDaten.features fehlt oder ist kein Array.");
} else {
  chorDaten.features.forEach((chor) => {
    const { geometry, properties } = chor;

    // Koordinaten prüfen
    if (!geometry || !geometry.coordinates || geometry.coordinates.length !== 2) {
      console.warn('Ungültige Koordinaten für Chor:', properties?.name, geometry?.coordinates);
      return;
    }

    const popupHTML = `
      <div class="chor-popup">
        <img src="${properties.bild}" alt="${properties.name}" class="chor-popup-img" />
        <h3 class="chor-popup-title">${properties.name}</h3>
        <p class="chor-popup-desc">${properties.beschreibung}</p>
        <hr class="chor-popup-line" />
        <p class="chor-popup-leitung">Leitung: ${properties.leitung}</p>
        <div class="chor-popup-stats">
          <div><div class="label">SängerInnen</div><div class="value">${properties.saenger}</div></div>
          <div><div class="label">Konzert</div><div class="value">${properties.konzert}</div></div>
          <div><div class="label">Aufnahmestopp</div><div class="value">${properties.aufnahmestopp ? "Ja" : "Nein"}</div></div>
        </div>
        <a class="chor-popup-btn" href="${properties.link}" target="_blank">Zur Website</a>
        <div class="chor-popup-kontakt">
          <div>Kontakt:</div>
          <div>${properties.kontakt}</div>
        </div>
      </div>
    `;

    new mapboxgl.Marker()
      .setLngLat(geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 15, anchor: 'auto' }).setHTML(popupHTML))
      .addTo(map);
  });
}
