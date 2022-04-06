import Cookies from "js-cookie";

export const getLanguage = () => {
  return Cookies.get("NEXT_LOCALE");
};

export const setLanguage = (newLanguge) => {
  return Cookies.set("NEXT_LOCALE", newLanguge);
};

export const isRtl = () => {
  return getLanguage() === "ar";
};

export const checkRtl = () => {
  const app = document.getElementById("__next");
  if (getLanguage() === "ar") {
    app.classList.remove("ltr");
    app.classList.add("rtl");
    document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
  } else {
    app.classList.remove("rtl");
    app.classList.add("ltr");
    document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
  }
};
