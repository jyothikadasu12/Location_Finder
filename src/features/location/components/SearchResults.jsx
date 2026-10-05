function SearchResults({
  results,
  onSelect,
}) {

  if (results.length === 0) {
    return null;
  }


  return (
    <div className="mt-5">

      <h3 className="mb-3 text-sm font-bold text-slate-700">
        Search Results
      </h3>


      <div className="space-y-2">

        {results.map((result) => (

          <button
            key={result.place_id}
            onClick={() =>
              onSelect(result)
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              p-3
              text-left
              transition
              duration-200
              hover:border-blue-400
              hover:bg-blue-50
              hover:shadow-sm
            "
          >

            <p className="text-sm font-medium text-slate-700">
              📍 {result.display_name}
            </p>


            <p className="mt-2 text-xs text-slate-400">

              {Number(result.lat).toFixed(5)}

              {" , "}

              {Number(result.lon).toFixed(5)}

            </p>

          </button>

        ))}

      </div>

    </div>
  );
}

export default SearchResults;