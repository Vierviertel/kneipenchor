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
        beschreibung: "Ein Feierabendchor für alle Stimmen in Kreuzberg. Seit 2011 singt der Berliner Kneipenchor in verrauchten Eckkneipen, auf bunten Festivals und in den Konzerthallen eurer Lieblingsartists.",
        leitung: "Lilli Born",
        saenger: 34,
        genres: "Pop",
        aufnahmestopp: true,
        bild: "bilder/Berliner_Kneipenchor.png",
        kontakt: "anfragen@berliner-kneipenchor.de",
        link: "https://berliner-kneipenchor.de/"
      }
    },


    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [11.5761, 48.1374] // München
      },
      properties: {
        name: "Münchner Kneipenchor",
        stadt: "München",
        bundesland: "Bayern",
        beschreibung: "Lustiger Haufen mit bayrischem Einschlag. Auftritte vom Münchner Kneipenchor fühlen sich an wie ein Popkonzert, frei und irgendwie auch wild.",
        leitung: ["Michel Berger", "Linus Mödl"],
        saenger: 50,
        genres: "Pop",
        aufnahmestopp: true,
        bild: "bilder/MKC-Logo-RGB-gross.png",
        kontakt: "bewerben.mkc@googlemail.com",
        link: "https://www.muenchnerkneipenchor.de/"
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
        beschreibung: "Singen, feiern, Gänsehaut – seit 2012 bringt der Karlsruher Kneipenchor Musik und Menschen zusammen. Was einst mit ein paar sangesfreudigen Leuten in der Bento Bar begann, ist heute eine große, bunte Gemeinschaft von durchaus 200 Sänger*innen.",
        leitung: "Jimmy Röck",
        saenger: 200,
        genres: ["Pop", "Rock"],
        aufnahmestopp: false,
        bild: "bilder/Logo_Kneipenchor_Karlsruhe.png",
        kontakt: "kontakt@karlsruherkneipenchor.de",
        link: "https://karlsruherkneipenchor.de"
      }
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [49.783333, 9.933333] // Würzburg
      },
      properties: {
        name: "Würzburger Kneipenchor",
        stadt: "Würzburg",
        bundesland: "Bayern",
        beschreibung: "8 Jahre Würzburger Kneipenchor! Kinners wie die Zeit vergeht!!! Wir blicken zurück auf 8 Jahre voller Liebe, Wahnsinn, Abenteuer, Freundschaft",
        leitung: "Jonas Weger",
        saenger: 60,
        genres: "Pop",
        aufnahmestopp: false,
        bild: "bilder/Logo_Kneipenchor_Wuerzburg.png",
        kontakt: "wuerzburgerkneipenchor@gmail.com",
        link: "https://www.instagram.com/wuerzburgerkneipenchor/?hl=de"
      }
    },

    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [11.5761, 48.1374] // Mannheim
      },
      properties: {
        name: "Mannheimer Kneipenchor",
        stadt: "Mannheim",
        bundesland: "Baden-Württemberg",
        beschreibung: "Singen in ungezwungener Atmosphäre bei einem Bier mit Freunden und Fremden in Mannheim",
        leitung: "David Julian Kirchner",
        saenger: 50,
        genres: ["Pop", "Rock"],
        aufnahmestopp: true,
        bild: "bilder/mannheimer-kneipenchor.png",
        kontakt: "kneipenchor-Mannheim@web.de",
        link: "https://kneipenchormannheim.wordpress.com/"
      }
    }


  ]
};
