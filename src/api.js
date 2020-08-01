import { token } from "./stores.js";

const base = "https://api.prod.bgchprod.info:443/omnia";

let tokenval;
const unsub = token.subscribe((value) => {
  tokenval = value;
});

export function request(route, method, body, headers) {
  headers = Object.assign(headers || {}, {
    "Content-Type": "application/vnd.alertme.zoo-6.1+json",
    "Accept": "application/vnd.alertme.zoo-6.1+json",
    "X-Omnia-Client": "Hive Web Dashboard",
  });

  if (tokenval) {
    headers = Object.assign(headers, {
      "X-Omnia-Access-Token": tokenval,
    });
  }

  return fetch(base + route, {
    method: method,
    headers: headers,
    body: body,
  })
  .then((response) => {
    if(!response.ok && response.status === 401) {
        throw new Error(`Not authorised, check token: ${tokenval}`)
    }
    return response;
  });
}

export function login(username, password) {
  return request(
    "/auth/sessions",
    "POST",
    JSON.stringify({
      sessions: [
        {
          username: username,
          password: password,
          caller: "WEB",
        },
      ],
    })
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((data) => {
      token.set(data.sessions[0].sessionId);
      return data;
    });
}
