import React, { useState } from "react";

import { AppContext } from "../../contexts/app-context";

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ name: "" });

  return (
    <AppContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;
