import Card from "../../../components/ui/Card";


function AddressDisplay({
  location,
}) {

  return (

    <Card className="mt-4">

      <h3 className="mb-3 text-sm font-bold text-slate-700">
        📍 Selected Location
      </h3>


      {location ? (

        <div className="rounded-xl bg-green-50 p-3">

          <p className="text-sm leading-6 text-slate-700">
            {location.displayName}
          </p>

        </div>

      ) : (

        <p className="text-sm text-slate-400">
          Search for a location or click on the map.
        </p>

      )}

    </Card>
  );
}

export default AddressDisplay;