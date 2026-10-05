const NOMINATIM_URL =
  import.meta.env.VITE_NOMINATIM_BASE_URL ||
  "https://nominatim.openstreetmap.org";

const TIMEZONE_API_KEY =
  import.meta.env.VITE_TIMEZONE_API_KEY;


// ======================================
// SEARCH LOCATION
// ======================================

export async function searchLocation(query) {

  const url =
    `${NOMINATIM_URL}/search?` +
    `q=${encodeURIComponent(query)}` +
    `&format=jsonv2` +
    `&addressdetails=1` +
    `&limit=5`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Failed to search location"
    );
  }

  const data = await response.json();

  return data;
}


// ======================================
// REVERSE GEOCODING
// ======================================

export async function getAddressFromCoordinates(
  lat,
  lon
) {

  const url =
    `${NOMINATIM_URL}/reverse?` +
    `lat=${lat}` +
    `&lon=${lon}` +
    `&format=jsonv2` +
    `&addressdetails=1`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Failed to find address"
    );
  }

  const data = await response.json();

  return data;
}


// ======================================
// TIMEZONE
// ======================================

export async function getTimezone(
  lat,
  lon
) {

  if (!TIMEZONE_API_KEY) {
    throw new Error(
      "Timezone API key is missing"
    );
  }

  const url =
    `https://api.timezonedb.com/v2.1/get-time-zone` +
    `?key=${TIMEZONE_API_KEY}` +
    `&format=json` +
    `&by=position` +
    `&lat=${lat}` +
    `&lng=${lon}`;


  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      "Failed to find timezone"
    );
  }


  const data =
    await response.json();


  if (data.status !== "OK") {
    throw new Error(
      data.message ||
      "Timezone lookup failed"
    );
  }


  return data;
}