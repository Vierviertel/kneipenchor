const chorDaten = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [13.4050, 52.5200] // Längengrad, Breitengrad (Berlin)
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
        coordinates: [11.5761, 48.1374] // München
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
        coordinates: [8.4037, 49.0069] // Karlsruhe
      },
      properties: {
        name: "Kneipenchor Karlsruhe",
        beschreibung: "Lebendiges Chroprojekt seit 2012, Lorem Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        leitung: "Jimmy Röck",
        saenger: 160,
        konzert: "5. Juli 2025",
        aufnahmestopp: false,
        bild: "https://via.placeholder.com/360x202.png?text=Münchner+Chor",
        kontakt: "kontakt@karlsruherkneipenchor.de",
        link: "https://karlsruherkneipenchor.de"
      }
    }


  ]
};
