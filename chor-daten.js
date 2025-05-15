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
        stadt: "Berlin",
        bundesland: "Berlin",
        beschreibung: "Ein Feierabendchor für alle Stimmen in Kreuzberg.",
        leitung: "Anna Musterfrau",
        saenger: 34,
        genres: "Pop",
        aufnahmestopp: false,
        bild: "bilder/Berliner_Kneipenchor.png",
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
        stadt: "Würzburg",
        bundesland: "Bayern",
        beschreibung: "Lustiger Haufen mit bayrischem Einschlag.",
        leitung: "Sepp Klangmeister",
        saenger: 22,
        genres: "Pop",
        aufnahmestopp: true,
        bild: "bilder/Logo_Kneipenchor_Wuerzburg.png",
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
        stadt: "Karlsruhe",
        bundesland: "Baden-Württemberg",
        beschreibung: "Lebendiges Chroprojekt seit 2012, Lorem Ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        leitung: "Jimmy Röck",
        saenger: 160,
        genres: ["Pop", "Rock"],
        aufnahmestopp: true,
        bild: "bilder/Logo_Kneipenchor_Karlsruhe.png",
        kontakt: "kontakt@karlsruherkneipenchor.de",
        link: "https://karlsruherkneipenchor.de"
      }
    }


  ]
};
