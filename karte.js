// Mapbox Access Token setzen
mapboxgl.accessToken = 'pk.eyJ1IjoidmllcnZpZXJ0ZWwiLCJhIjoiY21hbnN4c3V5MDJkeDJrczl1ZjIxaGIzMyJ9.7GPJr4HzvulQJmMXY72CEA';

// Karte initialisieren
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [10.5, 51], // Deutschland
  zoom: 5
});

// Datenquelle und Layer hinzufügen, wenn die Karte geladen ist
map.on('load', () => {
  map.addSource('choere', {
    type: 'geojson',
    data: chorDaten // chorDaten muss aus chor-daten.js kommen
  });

  map.addLayer({
    id: 'choere',
    type: 'circle',
    source: 'choere',
    paint: {
      'circle-radius': 8,
      'circle-color': '#4264fb'
    }
  });
});

// Popup bei Klick auf einen Pin anzeigen
map.on('click', 'choere', (e) => {
  const props = e.features[0].properties;
  const coordinates = e.features[0].geometry.coordinates.slice();

  const html = `
    <div class="chor-popup">
    <div class="chor-popup-facts">
      <img class="chor-popup-img" src="${props.bild}" alt="${props.name}">
       <div class="chor-popup-text">
        <div class="chor-popup-title">${props.name}</div>
        <div class="chor-popup-desc">${props.beschreibung}</div>
       </div>
      </div>
      <hr class="chor-popup-line">
      <div class="chor-popup-leitung">Leitung: ${props.leitung}</div>
      <div class="chor-popup-stats">
        <div>
          <div class="label">Sänger:innen</div>
          <div class="value">${props.saenger}</div>
        </div>
        <div>
          <div class="label">Aufnahmestopp</div>
          <div class="value">${props.aufnahmestopp ? "Ja" : "Nein"}</div>
        </div>
      </div>
      <a class="chor-popup-btn" href="${props.link}" target="_blank">Zur Website</a>
      <div class="chor-popup-kontakt">Kontakt: <a href="mailto:${props.kontakt}">${props.kontakt}</a></div>
    </div>
  `;

  new mapboxgl.Popup({ maxWidth: "360px" })
    .setLngLat(coordinates)
    .setHTML(html)
    .addTo(map);
});

// Mauszeiger ändern, wenn über einen Pin gehovert wird
map.on('mouseenter', 'choere', () => {
  map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseleave', 'choere', () => {
  map.getCanvas().style.cursor = '';
});
map.on('style.load', () => {
  map.setConfigProperty('basemap', 'theme', 'monochrome');
});
