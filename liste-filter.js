function renderChorListe(daten) {
  const container = document.getElementById('chor-liste');
  container.innerHTML = '';
  daten.forEach(chor => {
    const el = document.createElement('div');
    el.className = 'chor-card';
    el.innerHTML = `
      <img src="${chor.bild}" alt="${chor.name}">
      <h3>${chor.name}</h3>
      <p>${chor.beschreibung}</p>
    `;
    container.appendChild(el);
  });
}

function filterChorListe() {
  const selectedStadt = document.getElementById('bundesland-filter').value;
  const selectedGenre = document.getElementById('genre-filter').value;

  const gefiltert = chorDaten.filter(chor => {
    return (selectedStadt === 'alle' || chor.stadt === selectedStadt) &&
           (selectedGenre === 'alle' || chor.genre === selectedGenre);
  });

  renderChorListe(gefiltert);
}

document.getElementById('stadt-filter').addEventListener('change', filterChorListe);
document.getElementById('genre-filter').addEventListener('change', filterChorListe);

renderChorListe(chorDaten); // Initialanzeige
