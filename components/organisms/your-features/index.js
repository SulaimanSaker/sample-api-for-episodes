import React, { useEffect, useState } from "react";

import { SectionHeader, FeatureItem, Carousel } from "components/molecules";

import { items } from "./items";

import { Styles } from "./styles";
import dynamic from "next/dynamic";

const ArcLines = dynamic(() => import("../../templates/auth/arc-lines"), {
  ssr: false,
});

const YourFeatures = () => {
  const [scrolled, setScrolled] = useState(false);
  const [arcWidth, setActWidth] = useState();

  useEffect(() => {
    setActWidth((document.getElementById("our-features__carousel").offsetWidth * 8) / 10);
  }, []);

  useEffect(() => {
    let contentElement = document.getElementById("our-features");

    const handlScroll = () => {
      if (contentElement.offsetTop + 150 < window.pageYOffset + window.innerHeight) {
        if (!scrolled) {
          setScrolled(true);
        }
      }
    };

    window.addEventListener("scroll", handlScroll);

    return () => window.removeEventListener("scroll", handlScroll);
  }, [scrolled]);

  return (
    <Styles>
      <section id="our-features" className="our-features">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="our-features__header">
              <SectionHeader
                className="pb-6"
                title="Your Features"
                subTitle="Important things for you"
              />
            </div>
          </div>
        </div>

        <div id="our-features__carousel" className="our-features__carousel">
          <Carousel
            items={items}
            slidesPerView={3}
            navigation
            itemWidth="77.5%"
            buttonsHeight="11rem"
            absoluteContent={<ArcLines scrolled width={arcWidth} />}
          >
            {({ src, title, text }, index) => (
              <FeatureItem index={index} pngSrc={src} title={title} text={text} />
            )}
          </Carousel>
        </div>
      </section>
    </Styles>
  );
};

export default YourFeatures;
