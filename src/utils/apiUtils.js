// const APIkey = "";

const baseUrl = process.env.NODE_ENV === "http://localhost:8000";
// "http://127.0.0.1:8000"

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

export { handleResponse, baseUrl, baseHeader };
