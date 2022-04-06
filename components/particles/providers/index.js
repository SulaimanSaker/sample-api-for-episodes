import React from "react";

import ContextProvider from "./context-provider";
import ThemeProvider from "./theme-provider";

const Providers = ({ theme, children }) => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ContextProvider>
  );
};

export default Providers;
