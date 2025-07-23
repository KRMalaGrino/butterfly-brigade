import { handleResponse, baseUrl, baseHeader } from "./apiUtils";

function getPlaces() {
  return fetch(`${baseUrl}/places`, {
    headers: baseHeader,
  }).then(handleResponse);
}

function getRoute(from, to) {
  return fetch(`${baseUrl}/route?from=${from}&to=${to}`, {
    headers: baseHeader,
  }).then(handleResponse);
}

function getPlaceById(id) {
  return fetch(`${baseUrl}/places/${id}`, {
    headers: baseHeader,
  }).then(handleResponse);
}

function getStartingPoint() {
  return fetch(`${baseUrl}/place/`, {
    headers: baseHeader,
  }).then(handleResponse);
}

function fetchBestRoute({
  address,
  landmarkType,
  minPopularity,
  maxVisitTime,
}) {
  return fetch(`${API_BASE}/best_route/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address,
      landmark_type: landmarkType,
      min_popularity: minPopularity,
      max_visit_time: maxVisitTime,
    }),
  }).then(handleResponse);
}

export { getPlaces, getRoute, getPlaceById, getStartingPoint, fetchBestRoute };
