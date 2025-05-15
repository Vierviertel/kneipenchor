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

// 5 verschiedene Pins 

// Example GeoJSON with a 'pinType' property
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        message: 'Pin 1',
        pinType: 1,
        iconSize: [40, 40]
      },
      geometry: {
        type: 'Point',
        coordinates: [13.4050, 52.52]
      }
    },
    {
      type: 'Feature',
      properties: {
        message: 'Pin 2',
        pinType: 2,
        iconSize: [40, 40]
      },
      geometry: {
        type: 'Point',
        coordinates: [11.5761, 48.1374]
      }
    },
    // ... add more features for pinType 3, 4, 5
  ]
};



// Pin image URLs for each type
const pinImages = {
  1: 'https://vierviertel.github.io/kneipenchor/bilder/Logo_Kneipenchor_Karlsruhe.png',
  2: 'https://example.com/pin2.png',
  3: 'https://example.com/pin3.png',
  4: 'https://example.com/pin4.png',
  5: 'https://example.com/pin5.png'
};

map.on('load', () => {
  for (const feature of geojson.features) {
    const el = document.createElement('div');
    const width = feature.properties.iconSize[0];
    const height = feature.properties.iconSize[1];
    el.className = 'marker';
    // Select the correct pin image based on pinType
    el.style.backgroundImage = `url(${pinImages[feature.properties.pinType]})`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';


    new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .addTo(map);
  }
});
