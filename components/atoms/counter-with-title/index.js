import React, { useState } from "react";
import { Styles } from "./styles";

function CounterWithTitle({ initialValue, label }) {
  const [count, setCounter] = useState(initialValue);
  return (
    <Styles>
      <div className="counter">
        <button type="button" onClick={() => setCounter(count - 1)}>
          -
        </button>
        <div className="count font-size-18">
          {count} {label ? label : ""}
        </div>
        <button type="button" onClick={() => setCounter(count + 1)}>
          +
        </button>
      </div>
    </Styles>
  );
}

export default CounterWithTitle;
