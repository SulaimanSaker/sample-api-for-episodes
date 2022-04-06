import React, { useContext } from "react";

export const AppContext = React.createContext();
AppContext.displayName = "AppContext";

export function useAppContext() {
  return useContext(AppContext);
}
