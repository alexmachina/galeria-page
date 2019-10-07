export const post = async (url, payload) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const json = await response.json();
  return json;
};

const withAuthorization = obj => {
  const token = localStorage.getItem("authToken");
  debugger;
  return token
    ? Object.assign({}, obj, { headers: { Authorization: `Bearer ${token}` } })
    : obj;
};

export const get = async url => {
  const request = withAuthorization({ method: "GET" });
  const response = await fetch(url, request);
  const json = await response.json();
  return json;
};

export const baseUrl = "http://test-frontend-galeriapage.herokuapp.com";
