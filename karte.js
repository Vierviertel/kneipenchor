// Mapbox Access Token setzen
mapboxgl.accessToken = 'pk.eyJ1IjoidmllcnZpZXJ0ZWwiLCJhIjoiY21hbnN4c3V5MDJkeDJrczl1ZjIxaGIzMyJ9.7GPJr4HzvulQJmMXY72CEA';

// Initialize the map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v11',
  center: [10.5, 51], // Germany
  zoom: 5
});

// Example GeoJSON with a 'pinType' property
const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Chor Berlin',
        beschreibung: 'Ein Chor aus Berlin.',
        bild: 'https://example.com/chor-berlin.jpg',
        leitung: 'Frau Schmidt',
        saenger: 30,
        aufnahmestopp: false,
        link: 'https://chor-berlin.de',
        kontakt: 'info@chor-berlin.de',
        pinType: 1,
        iconSize: [40, 52]
      },
      geometry: {
        type: 'Point',
        coordinates: [13.4050, 52.52]
      }
    },
    // ... weitere Features für andere Pins ...
  ]
};

// Pin image URLs for each type
const pinImages = {
  1: 'pins/pin_01.png',
  2: 'pins/pin_02.png',
  3: 'pins/pin_03.png',
  4: 'pins/pin_04.png',
  5: 'pins/pin_05.png'
};

map.on('load', () => {
  for (const feature of geojson.features) {
    const el = document.createElement('div');
    const width = feature.properties.iconSize[0];
    const height = feature.properties.iconSize[1];
    el.className = 'marker';
    el.style.backgroundImage = `url(${pinImages[feature.properties.pinType]})`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;
    el.style.backgroundSize = '100%';
    el.style.border = 'none';
    el.style.borderRadius = '0';
    el.style.cursor = 'pointer';
    el.style.padding = 0;

    // Create popup HTML
    const props = feature.properties;
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

    const popup = new mapboxgl.Popup({ maxWidth: "360px" }).setHTML(html);

    new mapboxgl.Marker(el)
      .setLngLat(feature.geometry.coordinates)
      .setPopup(popup)
      .addTo(map);
  }
});

// Optional: Change cursor on marker hover (handled by default for HTML markers)
