import React from "react";

import { Button, InlineSVG, Image } from "components/atoms";

import { Styles } from "./styles";

const Expert = () => {
  return (
    <Styles>
      <section className="expert">
        <div className="expert__horizontal-line">
          <svg viewBox="0 0 1242 1">
            <rect width="1242" height="1" />
          </svg>
        </div>

        <div className="expert__card">
          <div className="expert__content">
            <div className="expert__left-column ">
              <div className="expert__title font-size-30">
                <div>Know More About this topic</div>
                <div className="text-primary font-weight-bold">From Our Experts</div>
              </div>

              <div className="expert__name font-size-22">
                <div>Mona A. El-Hinnawi</div>
                <Image src="/images/expert/true-circle.png" alt="" className="true-circle" />
              </div>

              <div className="expert__job font-size-18">Blogger - UX/UI Designer</div>

              <p className="expert__des">
                You will thank me for this design. So excited for the launching. Hope we
                deliver before the end of 2021
              </p>

              <Button primary rounded big>
                Book A Session
              </Button>
            </div>

            <div className="expert__right-column ">
              
              <InlineSVG
                src="/images/expert/expert-image-background.svg"
                alt=""
                className="expert__image-background"
              />
              <Image src="/images/temp/expert.jpg" alt="" className="expert__image" />
            </div>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default Expert;
