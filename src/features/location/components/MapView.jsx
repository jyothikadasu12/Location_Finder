import {
  MapContainer,
  TileLayer,
  useMap,
} from "react-leaflet";

import { useEffect } from "react";

import "leaflet/dist/leaflet.css";

import MapClickHandler from "./MapClickHandler";
import LocationMarker from "./LocationMarker";
import MapUpdater from "./MapUpdater";


// ==========================================
// Map Resize Handler
// ==========================================

function MapResizeHandler() {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [map]);

  return null;
}


// ==========================================
// Map View
// ==========================================

function MapView({
  location,
  setLocation,
  setHoverCoordinates,
}) {
  const defaultPosition = [
    17.3850,
    78.4867,
  ];

  return (
    <div
      className="
        relative
        h-full
        min-h-[500px]
        w-full
      "
    >

      {/* Leaflet Map */}

      <MapContainer
        center={defaultPosition}
        zoom={12}
        scrollWheelZoom={true}
        className="h-full w-full"
      >

        {/* OpenStreetMap */}

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />


        {/* Recalculate Leaflet size */}

        <MapResizeHandler />


        {/* Move map when location changes */}

        <MapUpdater
          location={location}
        />


        {/* Mouse movement + click */}

        <MapClickHandler
          onMapClick={setLocation}
          onMapHover={setHoverCoordinates}
        />


        {/* Selected location marker */}

        <LocationMarker
          location={location}
        />

      </MapContainer>


      {/* Map Information Badge */}

      <div
        className="
          absolute
          left-4
          top-4
          z-[1000]
          rounded-xl
          bg-white/95
          px-4
          py-3
          shadow-lg
          backdrop-blur
        "
      >
        <p className="text-sm font-bold text-slate-800">
          🗺️ Interactive Map
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Move your mouse over the map
        </p>
      </div>

    </div>
  );
}

export default MapView;