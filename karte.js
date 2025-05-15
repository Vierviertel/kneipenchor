mapboxgl.accessToken = 'pk.eyJ1IjoidmllcnZpZXJ0ZWwiLCJhIjoiY21hbnN4c3V5MDJkeDJrczl1ZjIxaGIzMyJ9.7GPJr4HzvulQJmMXY72CEA';

const map = new mapboxgl.Map({
  container: 'map', // Die ID deines HTML-Elements
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [10.4515, 51.1657], // Mittelpunkt Deutschland
  zoom: 5
});

// Marker und Popup beim Klick
chorDaten.features.forEach(chor => {
  const el = document.createElement('div');
  el.className = 'marker';
  el.style.width = '32px';
  el.style.height = '32px';
  el.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
  el.style.backgroundSize = 'contain';
  el.style.cursor = 'pointer';

  const marker = new mapboxgl.Marker(el)
    .setLngLat(chor.geometry.coordinates)
    .addTo(map);

  const { name, beschreibung, leitung, saenger, konzert, aufnahmestopp, bild, kontakt, link } = chor.properties;

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

  marker.getElement().addEventListener('click', () => {
    popup.addTo(map);
    popup.setLngLat(chor.geometry.coordinates);
  });
});
