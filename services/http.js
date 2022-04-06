import axios from "axios";

import { baseUrl } from "config";

import toastError from "components/particles/toast/toastError";

import { toCamelCase, toPascalCase } from "helpers/caseConverter";

import ApiKey from "constants/apiKey";

const instance = axios.create({
  baseURL: baseUrl,
});

instance.interceptors.request.use((request) => {
  if (!request.params) {
    request.params = {};
  }

  request.params = toPascalCase(request.params);

  return request;
});

instance.interceptors.response.use(
  (response) => {
    response.data = toCamelCase(response.data);

    return response;
  },
  (error) => {
    if (error?.response?.data?.errorMessage) {
      toastError(error.response.data.errorMessage);
    }

    if (error?.response?.data?.message) {
      toastError(error.response.data.message);
    }

    // return Promise.reject(error);
  }
);

instance.defaults.headers["Content-Type"] = "application/json";
instance.defaults.headers.common.Accept = "*/*";
instance.defaults.headers.APIKEY = ApiKey;
instance.defaults.headers.Authorization =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIyMmY4YmVlMC1jMGQxLTQ2MjgtOGYwZi00MmFlODU4YzJkMTUiLCJVc2VyRW1haWwiOiJvdjRAY2xvdWQuY29tIiwiQWRtaW4iOiJGYWxzZSIsIkNsaWVudElkIjozNjA4LCJuYmYiOjE2NDQwODg4OTAsImV4cCI6MTY0NDY5MzY5MCwiaWF0IjoxNjQ0MDg4ODkwLCJpc3MiOiJodHRwczovL2RvdWJsZWJlYXQuY29tL3B1YmxpY0FQSS8iLCJhdWQiOiJodHRwczovL2RvdWJsZWJlYXQuY29tL2FkbWluLyJ9.fxNbDsbpHnvXpXXK58PU8ow_smF8dCTuNsErEkoYv1I";

export default instance;
