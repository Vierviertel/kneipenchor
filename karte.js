mapboxgl.accessToken = 'pk.eyJ1IjoidmllcnZpZXJ0ZWwiLCJhIjoiY21hbnN4c3V5MDJkeDJrczl1ZjIxaGIzMyJ9.7GPJr4HzvulQJmMXY72CEA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [10.4515, 51.1657],
  zoom: 5
});

let aktuellesPopup = null;

chorDaten.features.forEach(feature => {
  const el = document.createElement('div');
  el.className = 'chor-marker';
  el.style.width = '24px';
  el.style.height = '24px';
  el.style.backgroundColor = '#ffed00';
  el.style.border = '2px solid black';
  el.style.borderRadius = '50%';
  el.style.cursor = 'pointer';

  const marker = new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);

  const popupHTML = `
    <div class="chor-popup">
      <img class="chor-popup-img" src="${feature.properties.bild}" alt="${feature.properties.name}">
      <div class="chor-popup-title">${feature.properties.name}</div>
      <div class="chor-popup-desc">${feature.properties.beschreibung}</div>
      <hr class="chor-popup-line">
      <div class="chor-popup-leitung">${feature.properties.leitung}</div>
      <div class="chor-popup-stats">
        <div>
          <div class="label">Sänger:innen</div>
          <div class="value">${feature.properties.saenger}</div>
        </div>
        <div>
          <div class="label">Konzert</div>
          <div class="value">${feature.properties.konzert}</div>
        </div>
        <div>
          <div class="label">Aufnahme</div>
          <div class="value">${feature.properties.aufnahmestopp ? 'Stopp' : 'Offen'}</div>
        </div>
      </div>
      <a class="chor-popup-btn" href="${feature.properties.link}" target="_blank">Zur Website</a>
      <div class="chor-popup-kontakt">${feature.properties.kontakt}</div>
    </div>
  `;

  const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(popupHTML);

  marker.getElement().addEventListener('click', () => {
    if (aktuellesPopup) aktuellesPopup.remove();
    popup.addTo(map);
    aktuellesPopup = popup;
  });
});
