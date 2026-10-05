import { useState } from "react";

import Header from "./components/layout/Header";

import LocationSearch from "./features/location/components/LocationSearch";
import LocationInfo from "./features/location/components/LocationInfo";
import MapView from "./features/location/components/MapView";

function App() {
  const [location, setLocation] = useState(null);

  const [hoverCoordinates, setHoverCoordinates] = useState(null);

  return (
    <div className="flex h-screen flex-col bg-slate-100">

      {/* Header */}
      <Header />

      {/* Main Layout */}
      <div
        className="
          flex
          min-h-0
          flex-1
          flex-col
          lg:flex-row
        "
      >

        {/* ================= MAP ================= */}

        <main
          className="
            order-1
            h-[500px]
            min-h-0
            flex-1
            lg:order-1
            lg:h-auto
          "
        >
          <MapView
            location={location}
            setLocation={setLocation}
            setHoverCoordinates={setHoverCoordinates}
          />
        </main>


        {/* ================= SIDEBAR ================= */}

        <aside
          className="
            order-2
            w-full
            overflow-y-auto
            border-l
            border-slate-200
            bg-white
            p-5
            lg:order-2
            lg:w-[400px]
            lg:shrink-0
          "
        >
          <LocationSearch
            setLocation={setLocation}
          />

          <LocationInfo
            location={location}
            hoverCoordinates={hoverCoordinates}
          />
        </aside>

      </div>

    </div>
  );
}

export default App;