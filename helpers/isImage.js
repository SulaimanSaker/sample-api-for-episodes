const getExtension = (filename) => {
  const parts = filename.split(".");
  return parts[parts.length - 1];
};

const isImage = (filename) => {
  const ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case "jpg":
    case "jpeg":
    case "gif":
    case "bmp":
    case "png":
      return true;
  }
  return false;
};

export default isImage;
