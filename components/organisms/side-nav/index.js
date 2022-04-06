import React, { useState, useEffect } from "react";

import classNames from "classnames";

import { Image, Link, SVG } from "components/atoms";

import { getLanguage, setLanguage } from "utils/localization";

import { langauges } from "constants/types";

import { Styles } from "./styles";

const SideNav = ({ hamburger }) => {
  const [hovered, setHovered] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState(langauges.EN);

  useEffect(() => {
    setSelectedLanguage(getLanguage());
  }, []);

  const selectLanguage = () => {
    let newLanguge;

    if (selectedLanguage === langauges.EN) {
      newLanguge = langauges.AR;
    } else {
      newLanguge = langauges.EN;
    }

    setLanguage(newLanguge);

    window.location.replace("/");
  };

  return (
    <Styles hovered={hovered}>
      <nav className={classNames("side-nav", { show: hamburger })}>
        <ul className={classNames("side-nav__nav", { show: hamburger })}>
          <li className="side-nav__user">
            <Link href="/double-beaters" className="name mr-7">
              Mona A. El-Hinnawi
            </Link>

            <div className="image-container d-flex justify-content-end">
              <Image src="/images/female.svg" alt="" className="image" />
            </div>
          </li>

          <li className="side-nav__item">
            <Link href="/double-beaters" className="side-nav__link">
              Double beaters
            </Link>

            <div className="icon-container d-flex justify-content-end">
              <Image alt="" src="/images/icons/heart.svg" className="icon" />
            </div>
          </li>

          <li className="side-nav__item">
            <Link href="/sales" className="side-nav__link">
              Sales
            </Link>

            <div className="icon-container d-flex justify-content-end">
              <Image alt="" src="/images/icons/sales.svg" className="icon" />
            </div>
          </li>

          <li className="side-nav__item">
            <Link href="/events" className="side-nav__link">
              Events
            </Link>

            <div className="icon-container d-flex justify-content-end">
              <Image alt="" src="/images/icons/events.svg" className="icon" />
            </div>
          </li>

          <li className="side-nav__item">
            <Link href="/recipes" className="side-nav__link">
              Recipes
            </Link>

            <div className="icon-container d-flex justify-content-end">
              <Image alt="" src="/images/icons/recipes.svg" className="icon" />
            </div>
          </li>

          <li className="side-nav__item">
            <Link href="/videos" className="side-nav__link">
              Videos
            </Link>

            <div className="icon-container d-flex justify-content-end">
              <Image alt="" src="/images/icons/videos.svg" className="icon" />
            </div>
          </li>
        </ul>

        <footer className={classNames("side-nav__footer", { show: hamburger })}>
          <div className="actions">
            <div
              className="footer__language-switcher"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <SVG.RoundedRectangle />

              <div
                role="presentation"
                className={classNames("language-one", "language--selected")}
              >
                <Image
                  alt=""
                  height="2rem"
                  src={
                    selectedLanguage === langauges.EN
                      ? "/images/icons/united-states.svg"
                      : "/images/icons/saudi-arabia.svg"
                  }
                />
              </div>

              <div
                role="presentation"
                className={classNames("language-two")}
                onClick={selectLanguage}
              >
                <Image
                  alt=""
                  height="2rem"
                  src={
                    selectedLanguage !== langauges.EN
                      ? "/images/icons/united-states.svg"
                      : "/images/icons/saudi-arabia.svg"
                  }
                />
              </div>
            </div>

            <div className="side-nav__item">
              <Link href="/" className="side-nav__link">
                Log in
              </Link>

              <div className="icon-container d-flex justify-content-end">
                <Image alt="" src="/images/icons/login.svg" className="icon" />
              </div>
            </div>
          </div>
        </footer>
      </nav>
    </Styles>
  );
};

export default SideNav;
