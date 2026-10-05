import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import LoadingSpinner from "../../../components/ui/LoadingSpinner";
import ErrorMessage from "../../../components/ui/ErrorMessage";

import SearchResults from "./SearchResults";

import useLocationSearch from "../hooks/useLocationSearch";


function LocationSearch({
  setLocation,
}) {

  const {
    search,
    setSearch,
    results,
    loading,
    error,
    handleSearch,
    clearResults,
  } = useLocationSearch();


  const handleSelectLocation = (
    result
  ) => {

    setLocation({
      lat: Number(result.lat),
      lon: Number(result.lon),
      displayName:
        result.display_name,

      timezone: null,
    });

    clearResults();
  };


  return (
    <section>

      <div className="mb-5">

        <h2 className="text-xl font-bold text-slate-800">
          🔎 Search Location
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Search for a city, address or landmark.
        </p>

      </div>


      <div className="flex gap-2">

        <Input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          onKeyDown={(e) => {

            if (e.key === "Enter") {
              handleSearch();
            }

          }}
          placeholder="Search Hyderabad..."
        />


        <Button
          onClick={handleSearch}
          disabled={loading}
        >

          {loading
            ? "..."
            : "Search"}

        </Button>

      </div>


      {loading && (
        <LoadingSpinner />
      )}


      <ErrorMessage
        message={error}
      />


      <SearchResults
        results={results}
        onSelect={
          handleSelectLocation
        }
      />

    </section>
  );
}

export default LocationSearch;