import { useEffect, useState } from "react";

import { getTimezone } from "../services/locationApi";


// Cache timezone results
const timezoneCache = new Map();


function useTimezone(
  coordinates,
  debounceMs = 500
) {

  const [timezone, setTimezone] =
    useState(null);

  const [loading, setLoading] =
    useState(false);


  const lat = coordinates?.lat;
  const lon = coordinates?.lon;


  useEffect(() => {

    // No coordinates
    if (
      lat === undefined ||
      lat === null ||
      lon === undefined ||
      lon === null
    ) {

      setTimezone(null);
      setLoading(false);

      return;
    }


    // Create cache key
    const key =
      `${Number(lat).toFixed(2)},${Number(lon).toFixed(2)}`;


    // Check cache first
    if (timezoneCache.has(key)) {

      setTimezone(
        timezoneCache.get(key)
      );

      setLoading(false);

      return;
    }


    // Wait before calling API
    const fetchTimer = setTimeout(
      async () => {

        try {

          setLoading(true);


          const timezoneData =
            await getTimezone(
              lat,
              lon
            );


          timezoneCache.set(
            key,
            timezoneData
          );


          setTimezone(
            timezoneData
          );

        } catch (error) {

          console.error(
            "Timezone error:",
            error
          );

          setTimezone(null);

        } finally {

          setLoading(false);

        }

      },
      debounceMs
    );


    // Cancel previous request timer
    return () => {
      clearTimeout(fetchTimer);
    };

  }, [
    lat,
    lon,
    debounceMs,
  ]);


  return {
    timezone,
    loading,
  };
}


export default useTimezone;