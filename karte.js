mapboxgl.accessToken = 'pk.eyJ1IjoidmllcnZpZXJ0ZWwiLCJhIjoiY21hbnN4c3V5MDJkeDJrczl1ZjIxaGIzMyJ9.7GPJr4HzvulQJmMXY72CEA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [10.4515, 51.1657],
  zoom: 5
});

chorDaten.features.forEach(feature => {
  const { coordinates } = feature.geometry;
  const {
    name, beschreibung, leitung, saenger,
    konzert, aufnahmestopp, bild, kontakt, link
  } = feature.properties;

  const el = document.createElement('div');
  el.className = 'marker';
  el.style.width = '32px';
  el.style.height = '32px';
  el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
  el.style.backgroundSize = 'contain';
  el.style.cursor = 'pointer';

  const marker = new mapboxgl.Marker(el)
    .setLngLat(coordinates)
    .addTo(map);

  const popupHtml = `
    <div class="chor-popup">
      <img class="chor-popup-img" src="${bild}" alt="${name}">
      <div class="chor-popup-title">${name}</div>
      <div class="chor-popup-desc">${beschreibung}</div>
      <hr class="chor-popup-line">
      <div class="chor-popup-leitung">Leitung: ${leitung}</div>
      <div class="chor-popup-stats">
        <div><div class="label">Sänger:innen</div><div class="value">${saenger}</div></div>
        <div><div class="label">Konzert</div><div class="value">${konzert}</div></div>
        <div><div class="label">Aufnahme</div><div class="value">${aufnahmestopp ? 'Stopp' : 'Offen'}</div></div>
      </div>
      <a class="chor-popup-btn" href="${link}" target="_blank">Zur Website</a>
      <div class="chor-popup-kontakt">${kontakt}</div>
    </div>
  `;

  const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml);

  // Nur anzeigen, wenn geklickt wird
  el.addEventListener('click', () => {
    popup.setLngLat(coordinates).addTo(map);
  });
});
