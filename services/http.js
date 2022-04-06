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
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiJkMDdhNTBmZC1jNDExLTQ1OTAtYWZlNy05ODBlMWQ4MjU5MDMiLCJVc2VyRW1haWwiOiIwOTAzN0BhYmMuY29tIiwiQWRtaW4iOiJGYWxzZSIsIkNsaWVudElkIjo0MDIxLCJuYmYiOjE2NDg1NTM3NzcsImV4cCI6MTY0OTE1ODU3NywiaWF0IjoxNjQ4NTUzNzc3LCJpc3MiOiJodHRwczovL2RvdWJsZWJlYXQuY29tL3B1YmxpY0FQSS8iLCJhdWQiOiJodHRwczovL2RvdWJsZWJlYXQuY29tL2FkbWluLyJ9.dvc2zmzyBcOGNXVza5y329ZdiegsrxyNI9_XjoT9g-U";

export default instance;
