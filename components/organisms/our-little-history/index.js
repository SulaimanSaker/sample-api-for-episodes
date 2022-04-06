import React from "react";

import { AnimatedButton } from "components/atoms";
import { SectionHeader } from "components/molecules";

import Lines from "./lines";

import { Styles } from "./styles";

const OurLittleHistory = () => {
  return (
    <Styles>
      <section id="our-little-history" className="our-little-history">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="our-little-history__content-container">
              <div className="our-little-history__content">
                <Lines />

                <SectionHeader
                  className="pb-5"
                  title="Our Little History"
                  subTitle="Great begins with small"
                />

                <p className="mb-5">
                  Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis
                  sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                  velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae
                  erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna
                  eu felis dapibus condimentum sit amet a augue.
                </p>

                <div className="p-0">
                  <AnimatedButton>Read More</AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default OurLittleHistory;
