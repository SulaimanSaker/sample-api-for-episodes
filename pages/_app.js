import React, { useEffect } from "react";

import { appWithTranslation } from "next-i18next";

import moment from "moment";

import { ToastContainer } from "react-toastify";

import Providers from "../components/particles/providers";

import { checkRtl } from "utils/localization";

import theme from "../styles/themes/main.scss";

import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";
import "../styles/globals.scss";

moment.defaultFormat = "DD-MMM-yyyy";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    checkRtl();
  }, []);

  return (
    <Providers theme={theme}>
      <ToastContainer />
      <Component {...pageProps} />
    </Providers>
  );
}

export default appWithTranslation(MyApp);
