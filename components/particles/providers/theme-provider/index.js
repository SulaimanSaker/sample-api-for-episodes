import React from "react";

const CustomThemeProvider = ({ theme, children }) => {
  return (
    <>
      <style jsx global>
        {theme}
      </style>
      {children}
    </>
  );
};

export default CustomThemeProvider;
