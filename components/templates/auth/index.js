import React, { useEffect, useState } from "react";

import dynamic from "next/dynamic";

import { Image } from "components/atoms";

import { Styles } from "./styles";
import useMediaQuery from "components/particles/hooks/with-media-query";

const ArcLines = dynamic(() => import("./arc-lines"), {
  ssr: false,
});

const AuthTemplate = ({ header, text1, text2, text3, sidebar, showlines, children }) => {
  const [arcWidth, setActWidth] = useState();
  const mediaQueries = useMediaQuery();
  useEffect(() => {
    setActWidth((document.getElementById("register-second-column").offsetWidth * 7) / 10);
  }, []);

  return (
    <Styles sidebar={sidebar}>
      <div className="auth-template__header">{header}</div>

      {children && (
        <main className="auth-template__content">
          <div className="lock-icon">
            <Image src="/images/register/2.png" alt="" />
          </div>

          <div className="d-flex ">
            <div className="first-column">
              <div className="background"></div>

              <div className="text font-size-30">
                <div>
                  <b>
                    <i>Plan, Track or Conceive.</i>
                  </b>
                </div>
                <div>Discover the world’s most</div>
                <div>top specialists with a click.</div>
              </div>

              {!sidebar && (
                <div className="image">
                  <Image src="/images/register/1.png" alt="" />
                </div>
              )}

              {sidebar && <div className="menubar">{sidebar}</div>}
            </div>

            <div id="register-second-column" className="second-column full-width-container">
              <header>
                <div className="title font-size-40">{text1}</div>
                <div className="advice font-size-35">{text2}</div>
                <div className="advice font-size-35">{text3}</div>
              </header>

              {!mediaQueries.qMax900 && showlines && (
                <div className="arc-lines-container">
                  <ArcLines scrolled width={arcWidth} />
                </div>
              )}

              {children}

              {!sidebar && (
                <footer className="font-size-18">
                  Already a member? <span className="text-primary">Sign in here</span>
                </footer>
              )}
            </div>
          </div>
        </main>
      )}
    </Styles>
  );
};

export default AuthTemplate;
