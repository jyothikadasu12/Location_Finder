import { useState } from "react";

import {
  searchLocation,
} from "../services/locationApi";


function useLocationSearch() {

  const [
    search,
    setSearch
  ] = useState("");


  const [
    results,
    setResults
  ] = useState([]);


  const [
    loading,
    setLoading
  ] = useState(false);


  const [
    error,
    setError
  ] = useState("");


  const handleSearch = async () => {

    if (!search.trim()) {
      return;
    }


    try {

      setLoading(true);
      setError("");


      const data =
        await searchLocation(search);


      setResults(data);

    }

    catch (error) {

      console.error(error);

      setError(
        "Unable to find location."
      );

    }

    finally {

      setLoading(false);

    }

  };


  const clearResults = () => {
    setResults([]);
  };


  return {
    search,
    setSearch,
    results,
    loading,
    error,
    handleSearch,
    clearResults,
  };
}

export default useLocationSearch;