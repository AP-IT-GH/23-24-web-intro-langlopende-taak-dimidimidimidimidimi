let map = L.map('map').setView([52.5200675543843, 13.40481846661213], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 35,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([52.5200675543843, 13.40481846661213]).addTo(map)
    .bindPopup('Berlijn, de hoofdstad van Duitsland.')
    .openPopup();