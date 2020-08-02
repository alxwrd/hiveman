import { auth } from "./stores.js";

const base = "https://api.prod.bgchprod.info:443/omnia";

let authDetails;
const unsub = auth.subscribe((value) => {
  authDetails = value;
});

export function request(route, method, body, headers) {
  headers = Object.assign(headers || {}, {
    "Content-Type": "application/vnd.alertme.zoo-6.3+json",
    "Accept": "application/vnd.alertme.zoo-6.3+json",
    "X-Omnia-Client": "Hive Web Dashboard",
  });

  if (Object.keys(authDetails).length) {
    headers = Object.assign(headers, {
      "X-Omnia-Access-Token": authDetails.sessionId,
    });
  }

  return fetch(base + route, {
    method: method,
    headers: headers,
    body: body,
  }).then((response) => {
    if (!response.ok && response.status === 401) {
      auth.set({});
      throw new Error(`Not authorised, check authdetails: ${auth}`);
    }
    return response;
  }).then(response => response.json());
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
    .then((data) => {
      auth.set(data.sessions[0]);
      return data;
    });
}

export function nodes() {
  return request(
    "/nodes",
    "GET",
  ).then(data => {
    return data.nodes.filter((node) => {
      let useableNodes = [
        "node.class.light.json",
        "node.class.colour.tunable.light.json",
        "node.class.smartplug.json",
      ];

      return useableNodes.some((type) => {
        return node.attributes.powerSupply && node.attributes.nodeType.reportedValue.includes(type)
      })
    })
  })
}


export function node(id) {
  return request(
    `/nodes/${id}`,
    "GET",
  ).then(data => data)
}

export function modify(id, targetValue) {
  return request(
    `/nodes/${id}`,
    "PUT",
    JSON.stringify({
      nodes: [
        {
          attributes: targetValue
        },
      ],
    })
  ).then(data => data)
}

export function turnOn(id) {
  return modify(id, {
    state: {
      targetValue: "ON"
    }          
  }).then(data => data.nodes[0])
};


export function turnOff(id) {
  return modify(id, {
    state: {
      targetValue: "OFF"
    }          
  }).then(data => data.nodes[0])
};
