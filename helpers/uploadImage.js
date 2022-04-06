import isImage from "helpers/isImage";

import toastError from "components/particles/toast/toastError";

import http from "services/http";
import { UPLOAD_FILES } from "constants/endpoints";

const uploadImage = (e, callback, onSuccess, onFailure) => {
  const {
    files: [file],
  } = e.target;

  if (isImage(file.name)) {
    callback(file);

    const formData = new FormData();
    formData.append("file", file);

    http
      .post(UPLOAD_FILES, formData)
      .then(({ data }) => {
        onSuccess(data);
      })
      .catch((error) => {
        onFailure(error);
      });
  } else {
    toastError("Please Upload a valid image file");
  }
};

export default uploadImage;
