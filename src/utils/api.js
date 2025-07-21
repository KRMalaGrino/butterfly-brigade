import { handleResponse, baseUrl, baseHeader } from "./apiUtils";

function getPlaces() {
  return fetch(`${baseUrl}/places`, {
    headers: baseHeader,
  }).then(handleResponse);
}

function submitData(data) {
  return fetch(`${baseUrl}/submit`, {
    method: "POST",
    headers: baseHeader,
    body: JSON.stringify(data),
  }).then(handleResponse);
}

export { getPlaces, submitData };
