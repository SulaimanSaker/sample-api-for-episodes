import React, { useState } from "react";

import classNames from "classnames";

import { Image, Button } from "components/atoms";

import { Styles } from "./styles";

const RegisterChildrenType = ({ onNext, multiChildren }) => {
  const [children, setChildren] = useState([{ key: 0, gender: "" }]);

  const selectChild = (key, gender) => {
    const newChildren = [...children];

    const index = newChildren.findIndex((item) => item.key === key);
    newChildren[index] = { ...newChildren[index], gender };

    setChildren(newChildren);
  };

  const addChild = () => {
    const newChildren = [...children];

    newChildren.push({ key: children.length, gender: "" });

    setChildren(newChildren);
  };

  return (
    <Styles multiChildren={multiChildren}>
      <section className="register-child-type">
        {children.map(({ key, gender }, index) => (
          <React.Fragment key={key}>
            <div className="grid">
              <div className="item">
                <button
                  className={classNames({ selected: gender === "girl" })}
                  onClick={() => selectChild(key, "girl")}
                >
                  <Image src="/images/register/child-1.png" alt="" />

                  <div className="text font-size-20">Girl</div>
                </button>
              </div>

              <div className="item">
                <button
                  className={classNames({ selected: gender === "boy" })}
                  onClick={() => selectChild(key, "boy")}
                >
                  <Image src="/images/register/child-2.png" alt="" />
                  <div className="text font-size-20">Boy</div>
                </button>
              </div>

              <div className="item child-3">
                <button
                  className={classNames({ selected: gender === "dont-know" })}
                  onClick={() => selectChild(key, "dont-know")}
                >
                  <Image src="/images/register/child-3.png" alt="" />
                  <div className="text font-size-20">Don&rsquo;t know yet</div>
                </button>
              </div>
            </div>

            {children.length - 1 !== index && <div className="border"></div>}
          </React.Fragment>
        ))}

        {multiChildren && (
          <div className="d-flex justify-content-center">
            <Button primary onClick={() => addChild()}>
              Add Another Kid
            </Button>
          </div>
        )}

        <div className="button-container">
          <Button primary rounded big block onClick={() => onNext(children)}>
            Next
          </Button>
        </div>
      </section>
    </Styles>
  );
};

export default RegisterChildrenType;
