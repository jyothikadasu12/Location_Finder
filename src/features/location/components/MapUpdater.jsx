import { useEffect } from "react";

import { useMap } from "react-leaflet";

function MapUpdater({
  location,
}) {
  const map = useMap();

  useEffect(() => {

    if (!location) {
      return;
    }

    map.flyTo(
      [
        location.lat,
        location.lon,
      ],
      14,
      {
        duration: 1.5,
      }
    );

  }, [location, map]);

  return null;
}

export default MapUpdater;