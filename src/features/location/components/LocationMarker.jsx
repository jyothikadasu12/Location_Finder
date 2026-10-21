import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet marker images in Vite
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,

  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker({ location }) {
  if (!location) {
    return null;
  }

  const lat = Number(location.lat);
  const lon = Number(location.lon ?? location.lng);

  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return null;
  }

  return (
    <Marker
      position={[lat, lon]}
      icon={DefaultIcon}
    >
      <Popup>
        <div>
          <strong>Selected Location</strong>
          <p>
            Latitude: {lat.toFixed(5)}
          </p>
          <p>
            Longitude: {lon.toFixed(5)}
          </p>
        </div>
      </Popup>
    </Marker>
  );
}

export default LocationMarker;