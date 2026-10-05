import CoordinateCard from "./CoordinateCard";
import AddressDisplay from "./AddressDisplay";

import useTimezone from "../hooks/useTimezone";


function LocationInfo({
  location,
  hoverCoordinates,
}) {

  const {
    timezone,
    loading,
  } = useTimezone(
    hoverCoordinates
  );


  return (
    <section className="mt-8">

      <div className="mb-4">

        <h2 className="text-lg font-bold text-slate-800">
          📍 Location Information
        </h2>

        <p className="mt-1 text-xs text-slate-500">
          Move your pointer over the map
        </p>

      </div>


      <CoordinateCard
        title="Pointer Coordinates"
        coordinates={
          hoverCoordinates
        }
        timezone={timezone}
        timezoneLoading={loading}
      />


      <AddressDisplay
        location={location}
      />


      {location && (
        <CoordinateCard
          title="Selected Location"
          coordinates={location}
      />
      )}

    </section>
  );
}

export default LocationInfo;