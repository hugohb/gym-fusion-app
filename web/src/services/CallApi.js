import Axios from "axios";

const httpClient = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default httpClient;

export function getAccessToken() {
  return sessionStorage.getItem("token");
}

httpClient.interceptors.request.use((config) => {
  const r = config;
  r.headers.Authorization = `Bearer ${getAccessToken()}`;
  return r;
});

const responseSuccessHandler = (response) => response;

const responseErrorHandler = (error) => {
  if (error.response && error.response.status === 401) {
    sessionStorage.removeItem("token");
    document.location.href = "/";
  }
  return Promise.reject(error);
};

httpClient.interceptors.response.use(
  (response) => responseSuccessHandler(response),
  (error) => responseErrorHandler(error)
);

export function APIGet(endpoint, body, onSuccess, onError) {
  httpClient
    .get(endpoint, body)
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onError(error);
    });
}

export function APIPost(endpoint, body, onSuccess, onError) {
  httpClient
    .post(endpoint, body)
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      onError(error);
    });
}
