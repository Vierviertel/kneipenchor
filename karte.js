mapboxgl.accessToken = 'pk.eyJ1IjoidmllcnZpZXJ0ZWwiLCJhIjoiY21hbnN4c3V5MDJkeDJrczl1ZjIxaGIzMyJ9.7GPJr4HzvulQJmMXY72CEA';

const map = new mapboxgl.Map({
  container: 'map', // ID deiner Map-Container-DIV
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [10.5, 51.3],
  zoom: 5.5
});

const chorDaten = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [13.4050, 52.5200]
      },
      properties: {
        name: "Kreuzberger Kneipenchor",
        beschreibung: "Ein Feierabendchor für alle Stimmen in Kreuzberg.",
        leitung: "Anna Musterfrau",
        saenger: 34,
        konzert: "12. Juni 2025",
        aufnahmestopp: false,
        bild: "https://via.placeholder.com/360x202.png?text=Kreuzberger+Chor",
        kontakt: "kontakt@kneipenchor-berlin.de",
        link: "https://kneipenchor-berlin.de"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [11.5761, 48.1374]
      },
      properties: {
        name: "Münchner Musiktruppe",
        beschreibung: "Lustiger Haufen mit bayrischem Einschlag.",
        leitung: "Sepp Klangmeister",
        saenger: 22,
        konzert: "5. Juli 2025",
        aufnahmestopp: true,
        bild: "https://via.placeholder.com/360x202.png?text=Münchner+Chor",
        kontakt: "info@muenchnerchor.de",
        link: "https://muenchnerchor.de"
      }
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [8.4037, 49.0069]
      },
      properties: {
        name: "Kneipenchor Karlsruhe",
        beschreibung: "Lebendiges Chorprojekt seit 2012, Lorem Ipsum dolor sit amet.",
        leitung: "Jimmy Röck",
        saenger: 160,
        konzert: "5. Juli 2025",
        aufnahmestopp: false,
        bild: "https://via.placeholder.com/360x202.png?text=Karlsruher+Chor",
        kontakt: "kontakt@karlsruherkneipenchor.de",
        link: "https://karlsruherkneipenchor.de"
      }
    }
  ]
};

let offenesPopup = null;

chorDaten.features.forEach((chor) => {
  const { geometry, properties } = chor;

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

  const marker = new mapboxgl.Marker()
    .setLngLat(geometry.coordinates)
    .addTo(map);

  const popup = new mapboxgl.Popup({
    offset: 15,
    anchor: 'bottom',
    closeButton: true,
    closeOnClick: true
  }).setHTML(popupHTML);

  marker.getElement().addEventListener('click', () => {
    if (offenesPopup) {
      offenesPopup.remove();
    }
    popup.setLngLat(geometry.coordinates).addTo(map);
    offenesPopup = popup;
  });
});

