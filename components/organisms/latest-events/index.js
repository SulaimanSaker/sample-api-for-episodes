import React from "react";

import { SectionHeader, LatestArticleItem } from "components/molecules";

import { Styles } from "./styles";

const LatestEvents = () => {
  return (
    <Styles>
      <section className="latest-events">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="latest-events__header">
              <SectionHeader
                defaultLines
                viewAllButton
                className="mb-6 pb-1"
                title="Latest Events"
                subTitle="Great begins with small"
              />
            </div>
          </div>

          <div className="grid">
            <div className="box-one">
              <LatestArticleItem
                height="100%"
                width="100%"
                src="/images/temp/events1.jpg"
                alt=""
                isNew={true}
                date="Tuesday, March 7, 2019"
                property1="Over View | Baby Center"
                property2="Baby Basics put your title over here"
                property3="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin"
              />
            </div>

            <div className="box-tow">
              <LatestArticleItem
                height="100%"
                width="100%"
                src="/images/temp/events3.jpg"
                alt=""
                date="Tuesday, March 7, 2019"
                property1="Over View | Baby Center"
                property2="Baby Basics put your title over here"
                property3="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin"
              />
            </div>

            <div className="box-three">
              <LatestArticleItem
                height="100%"
                width="100%"
                src="/images/temp/events4.jpg"
                alt=""
                date="Tuesday, March 7, 2019"
                property1="Over View | Baby Center"
                property2="Baby Basics put your title over here"
                property3="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin"
              />
            </div>

            <div className="box-four">
              <LatestArticleItem
                height="100%"
                width="100%"
                src="/images/temp/events2.jpg"
                alt=""
                date="Tuesday, March 7, 2019"
                property1="Over View | Baby Center"
                property2="Cutest Baby Contest"
                property3="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin"
              />
            </div>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default LatestEvents;
