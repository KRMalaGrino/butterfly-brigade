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

export { getPlaces, getRoute, getPlaceById, getStartingPoint };
