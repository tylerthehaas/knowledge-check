function formatBody(reqOpts) {
  return {
    ...reqOpts,
    headers: { ...(reqOpts.headers || {}), "Content-Type": "application/json" },
    body: JSON.stringify(reqOpts.body),
  };
}
function get(url, reqOpts = {}) {
  return fetch(url, reqOpts);
}

function put(url, reqOpts = {}) {
  return fetch(url, formatBody({ ...reqOpts, method: "PUT" }));
}

function post(url, reqOpts = {}) {
  return fetch(url, formatBody({ ...reqOpts, method: "POST" }));
}

const request = {
  get,
  put,
  post,
};

export default request;
