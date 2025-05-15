mapboxgl.accessToken = 'pk.eyJ1IjoidmllcnZpZXJ0ZWwiLCJhIjoiY21hbnN4c3V5MDJkeDJrczl1ZjIxaGIzMyJ9.7GPJr4HzvulQJmMXY72CEA';

const map = new mapboxgl.Map({
  container: 'map', // ID deiner Map-Container-DIV
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [10.5, 51.3],
  zoom: 5.5
});



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

