import React from 'react';
import L from 'leaflet';

class Map extends React.Component {
  componentDidMount() {
    // create map
    let map = L.map("map").setView([44.453857, 20.607235], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
    }).addTo(map);
    
    let njivicaIcon = L.icon({
        iconUrl: "images/logo-sm.png",
        shadowUrl: "images/logo-sm-shadow.png",
        iconSize: [60, 40], // size of the icon
        shadowSize: [60, 40], // size of the shadow
        iconAnchor: [30, 20], // point of the icon which will correspond to marker's location
        popupAnchor: [5, -15] // point from which the popup should open relative to the iconAnchor
    });
    
    L.marker([44.453857, 20.607235], { icon: njivicaIcon }).bindPopup("Njivica okupana kosmajskim suncem.").addTo(map);
  }

  render() {
    return <div id="map"></div>
  }
}

export default Map;