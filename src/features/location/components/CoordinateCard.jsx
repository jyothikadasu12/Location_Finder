import Card from "../../../components/ui/Card";


function CoordinateCard({
  title,
  coordinates,
  timezone,
  timezoneLoading,
}) {

  return (
    <Card className="mt-4">

      <div className="mb-4">

        <h3 className="text-sm font-bold text-slate-700">
          {title}
        </h3>

      </div>


      {coordinates ? (

        <div className="space-y-3">

          {/* Latitude */}

          <div
            className="
              rounded-xl
              border
              border-blue-100
              bg-blue-50
              p-3
            "
          >

            <p className="text-xs font-medium text-blue-500">
              Latitude
            </p>

            <p className="mt-1 text-sm font-bold text-slate-800">
              {Number(coordinates.lat).toFixed(6)}
            </p>

          </div>


          {/* Longitude */}

          <div
            className="
              rounded-xl
              border
              border-indigo-100
              bg-indigo-50
              p-3
            "
          >

            <p className="text-xs font-medium text-indigo-500">
              Longitude
            </p>

            <p className="mt-1 text-sm font-bold text-slate-800">
              {Number(coordinates.lon).toFixed(6)}
            </p>

          </div>


          {/* Timezone */}

          <div
            className="
              rounded-xl
              border
              border-purple-100
              bg-purple-50
              p-3
            "
          >

            <p className="text-xs font-medium text-purple-500">
              Timezone
            </p>

            <p className="mt-1 text-sm font-bold text-slate-800">

              {timezoneLoading
                ? "Finding timezone..."
                : timezone?.zoneName ||
                  timezone ||
                  "Timezone unavailable"}

            </p>

          </div>

        </div>

      ) : (

        <div
          className="
            rounded-xl
            border
            border-dashed
            border-slate-300
            bg-slate-50
            p-6
            text-center
          "
        >

          <div className="text-2xl">
            🖱️
          </div>

          <p className="mt-2 text-sm font-medium text-slate-600">
            Move your pointer over the map
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Latitude, longitude and timezone
            will appear here
          </p>

        </div>

      )}

    </Card>
  );
}

export default CoordinateCard;