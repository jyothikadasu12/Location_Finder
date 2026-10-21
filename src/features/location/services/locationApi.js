const NOMINATIM_URL =
  import.meta.env.VITE_NOMINATIM_BASE_URL ||
  "https://nominatim.openstreetmap.org";


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
// TIMEZONE - NO API KEY REQUIRED
// ======================================

export async function getTimezone(lat, lon) {
  if (
    !Number.isFinite(Number(lat)) ||
    !Number.isFinite(Number(lon))
  ) {
    throw new Error(
      "Invalid latitude or longitude"
    );
  }

  const url =
    `https://hourora.app/api/v1/lookup?` +
    `lat=${encodeURIComponent(lat)}` +
    `&lng=${encodeURIComponent(lon)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Failed to find timezone (HTTP ${response.status})`
    );
  }

  const data = await response.json();

  if (!data.zone) {
    throw new Error(
      data.error || "Timezone lookup failed"
    );
  }

  return {
    ...data,
    status: "OK",
    zoneName: data.zone,
    formatted: data.now?.local ?? "",
    gmtOffset: (data.now?.offsetMinutes ?? 0) * 60,
  };
}