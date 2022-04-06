import React, { useState } from "react";

import { SectionHeader, TabsCarousel, Carousel } from "components/molecules";

import Lines from "./lines";

import { Styles } from "./styles";

const PlanYourEvent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Styles>
      <div className="plan-your-event">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="plan-your-event__header">
              <Lines />

              <SectionHeader
                viewAllButton
                className="mb-6 pb-1"
                title="Plan Your Event"
                subTitle="Great begins with small"
              />

              <div className="plan-your-event__tabs">
                <TabsCarousel
                  activeTab={activeTab}
                  onClick={(id) => setActiveTab(id)}
                  tabs={[
                    { id: 0, text: "Baby Shower" },
                    { id: 1, text: "First Communion" },
                    { id: 2, text: "Babyboo" },
                    { id: 3, text: "BAby Event" },
                    { id: 4, text: "lorem6" },
                    { id: 5, text: "lorem7" },
                    { id: 6, text: "lorem8" },
                    { id: 7, text: "lorem9" },
                    { id: 8, text: "lorem10" },
                    { id: 9, text: "lorem11" },
                    { id: 10, text: "lorem12" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="images-container">
          <div className="images__carousel">
            <Carousel
              navigation
              fullWidth
              slidesPerView={1}
              items={[
                { src: "/images/temp/events1.jpg" },
                { src: "/images/temp/events4.jpg" },
              ]}
            >
              {({ src }) => <img src={src} className="image" alt="" />}
            </Carousel>
          </div>

          <img className="shadow2" src="/images/plan-your-event/shadow2.svg" alt="" />
          <img className="shadow1" src="/images/plan-your-event/shadow1.svg" alt="" />
        </div>

        <svg width="0" height="0">
          <defs>
            <clipPath id="clip1">
              <path d="M0,153.61C0,277.11,222.55,412,345.32,412S600,277.11,600,153.61,548.2-53.52,366.91,40.12C257.69,96.53,0,30.11,0,153.61Z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Styles>
  );
};

export default PlanYourEvent;
