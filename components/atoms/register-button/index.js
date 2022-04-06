import React from "react";

import { Styles } from "./styles";

const RegisterButton = ({ className, onClick, icon, children }) => {
  return (
    <Styles>
      <button className={className} onClick={onClick}>
        <div className="d-flex justify-content-center align-items-center">
          <div>{icon}</div>

          <div>{children}</div>
        </div>
      </button>
    </Styles>
  );
};

export default RegisterButton;
