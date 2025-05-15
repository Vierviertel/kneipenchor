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
  const feature = e.features[0];
  const coordinates = feature.geometry.coordinates.slice();
  const props = feature.properties;
  const html = `
    <strong>${props.name}</strong><br/>
    ${props.beschreibung}<br/>
    Leitung: ${props.leitung}<br/>
    Sänger: ${props.saenger}<br/>
    Konzert: ${props.konzert}<br/>
    <img src="${props.bild}" width="180"/><br/>
    Kontakt: <a href="mailto:${props.kontakt}">${props.kontakt}</a><br/>
    <a href="${props.link}" target="_blank">Website</a>
  `;

  new mapboxgl.Popup()
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
