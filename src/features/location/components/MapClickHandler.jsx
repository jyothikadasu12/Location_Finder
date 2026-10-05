import { useMapEvents } from "react-leaflet";

function MapClickHandler({
  onMapClick,
  onMapHover,
}) {
  useMapEvents({

    // Mouse moves over map
    mousemove(event) {
      const { lat, lng } = event.latlng;

      onMapHover({
        lat: lat,
        lon: lng,
      });
    },


    // User clicks on map
    click(event) {
      const { lat, lng } = event.latlng;

      onMapClick({
        lat: lat,
        lon: lng,
        displayName: "Selected map location",
      });
    },

  });

  return null;
}

export default MapClickHandler;