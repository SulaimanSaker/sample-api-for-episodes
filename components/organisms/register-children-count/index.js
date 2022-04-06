import React, { useState } from "react";

import classNames from "classnames";

import { Image, Button } from "components/atoms";

import { Styles } from "./styles";

const RegisterChildrenCount = ({ onNext }) => {
  const [childrenCount, setChildrenCount] = useState(-1);

  return (
    <Styles>
      <section className="register-child-count">
        <div className="grid">
          <div className="item">
            <button
              className={classNames({ selected: childrenCount === 1 })}
              onClick={() => setChildrenCount(1)}
            >
              <Image src="/images/register/child-1.png" alt="" />

              <div className="text font-size-20">One pregnancy</div>
            </button>
          </div>

          <div className="item">
            <button
              className={classNames({ selected: childrenCount === 2 })}
              onClick={() => setChildrenCount(2)}
            >
              <Image src="/images/register/child-2.png" alt="" />
              <div className="text font-size-20">Multiple pregnancy</div>
            </button>
          </div>

          <div className="item child-3">
            <button
              className={classNames({ selected: childrenCount === 0 })}
              onClick={() => setChildrenCount(0)}
            >
              <Image src="/images/register/child-3.png" alt="" />
              <div className="text font-size-20">Don&rsquo;t know yet</div>
            </button>
          </div>
        </div>

        <div className="button-container">
          <Button primary rounded big block onClick={() => onNext({ childrenCount })}>
            Next
          </Button>
        </div>
      </section>
    </Styles>
  );
};

export default RegisterChildrenCount;
