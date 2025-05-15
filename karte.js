mapboxgl.accessToken = 'pk.eyJ1IjoidmllcnZpZXJ0ZWwiLCJhIjoiY21hbnN4c3V5MDJkeDJrczl1ZjIxaGIzMyJ9.7GPJr4HzvulQJmMXY72CEA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [10.45, 51.16], // Deutschland-Mitte
  zoom: 5
});

chorDaten.features.forEach((feature) => {
  const coords = feature.geometry.coordinates;
  const props = feature.properties;

  const popupHtml = `
    <div class="chor-popup">
      <img class="chor-popup-img" src="${props.bild}" alt="${props.name}">
      <div class="chor-popup-title">${props.name}</div>
      <div class="chor-popup-desc">${props.beschreibung}</div>
      <hr class="chor-popup-line">
      <div class="chor-popup-leitung">Leitung: ${props.leitung}</div>
      <div class="chor-popup-stats">
        <div><div class="label">Sänger:innen</div><div class="value">${props.saenger}</div></div>
        <div><div class="label">Konzert</div><div class="value">${props.konzert}</div></div>
        <div><div class="label">Aufnahme</div><div class="value">${props.aufnahmestopp ? 'Stopp' : 'Offen'}</div></div>
      </div>
      <a class="chor-popup-btn" href="${props.link}" target="_blank">Zur Website</a>
      <div class="chor-popup-kontakt">${props.kontakt}</div>
    </div>
  `;

  const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHtml);

  const markerEl = document.createElement('div');
  markerEl.className = 'marker';
  markerEl.style.width = '32px';
  markerEl.style.height = '32px';
  markerEl.style.backgroundImage = 'url(https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png)';
  markerEl.style.backgroundSize = 'contain';
  markerEl.style.cursor = 'pointer';

  const marker = new mapboxgl.Marker(markerEl)
    .setLngLat(coords)
    .addTo(map);

  markerEl.addEventListener('click', () => {
    popup.setLngLat(coords).addTo(map);
  });
});
