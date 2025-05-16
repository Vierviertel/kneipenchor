// Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1IjoidmllcnZpZXJ0ZWwiLCJhIjoiY21hbnN4c3V5MDJkeDJrczl1ZjIxaGIzMyJ9.7GPJr4HzvulQJmMXY72CEA';

// Karte initialisieren
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v11',
  center: [10.5, 51], // Deutschland-Zentrum
  zoom: 5
});

// Pin-Bilder pro Typ
const pinImages = {
  1: 'pins/pin_01.png',
  2: 'pins/pin_02.png',
  3: 'pins/pin_03.png',
  4: 'pins/pin_04.png',
  5: 'pins/pin_05.png'
};

// Wenn Karte geladen ist
map.on('load', () => {
  chorDaten.features.forEach((feature) => {
    const props = feature.properties;
    const coords = feature.geometry.coordinates;
    const pinType = props.pinType || 1;
    const iconSize = props.iconSize || [40, 52];
    const randomPinType = Math.floor(Math.random() * 5) + 1; // 1 bis 5
    feature.properties.pinType = randomPinType;

    // Marker-Element erstellen
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = `url(${pinImages[feature.properties.pinType]})`;
    el.style.width = `${iconSize[0]}px`;
    el.style.height = `${iconSize[1]}px`;
    el.style.backgroundSize = '100%';
    el.style.cursor = 'pointer';

    // Popup-HTML
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
      .setLngLat(coords)
      .setPopup(popup)
      .addTo(map);
  });
});
