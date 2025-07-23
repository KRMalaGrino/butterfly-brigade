// const APIkey = "";

const baseUrl = "http://localhost:8000";

const baseHeader = { "Content-Type": "application/json" };

function handleResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((data) => {
    const error = {
      status: res.status,
      message: data.message || "Something went wrong",
    };
    return Promise.reject(error);
  });
}

function postJson(path, body) {
  return fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: baseHeader,
    body: JSON.stringify(body),
  }).then(handleResponse);
}

export { handleResponse, baseUrl, baseHeader, postJson };
