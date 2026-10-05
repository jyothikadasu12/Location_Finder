import {
  Marker,
  Popup,
} from "react-leaflet";

function LocationMarker({
  location,
}) {

  if (!location) {
    return null;
  }

  return (
    <Marker
      position={[
        location.lat,
        location.lon,
      ]}
    >

      <Popup>

        <div className="min-w-[200px]">

          <p className="font-semibold text-slate-800">
            📍 Selected Location
          </p>

          <p className="mt-2 text-sm text-slate-600">
            {location.displayName}
          </p>

          <div className="mt-3 text-xs">

            <p>
              <strong>Latitude:</strong>{" "}
              {Number(location.lat).toFixed(6)}
            </p>

            <p>
              <strong>Longitude:</strong>{" "}
              {Number(location.lon).toFixed(6)}
            </p>

          </div>

        </div>

      </Popup>

    </Marker>
  );
}

export default LocationMarker;