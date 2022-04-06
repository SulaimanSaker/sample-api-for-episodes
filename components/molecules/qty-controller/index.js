import React from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Styles } from "./styles";

const QTYController = ({ qty, setQty }) => {
  return (
    <Styles>
      <div className="qty-controller">
        <div className="wrapper">
          <div className="icon">
            <AiOutlineMinus
              size="0.9em"
              fill="var(--primary)"
              onClick={() => setQty((qty) => qty - 1)}
            />
          </div>

          <div className="value">{qty}</div>

          <div className="icon">
            <AiOutlinePlus
              size="0.9em"
              fill="var(--primary)"
              onClick={() => setQty((qty) => qty + 1)}
            />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default QTYController;
