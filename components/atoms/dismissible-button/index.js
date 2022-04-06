import React from "react";

import { MdClose } from "react-icons/md";

import { Styles } from "./styles";

const DismissibleButton = ({ text, onClick }) => {
  return (
    <Styles>
      <div className="dismissible-buttom">
        <div className="text">{text}</div>
        <div className="close-icon pr-2">
          <MdClose fill="black" size="1em" onClick={onClick} />
        </div>
      </div>
    </Styles>
  );
};

export default DismissibleButton;
