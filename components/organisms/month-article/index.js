import { Button } from "components/atoms";
import { SectionHeader } from "components/molecules";
import React from "react";

import { Styles } from "./styles";

const MonthArticle = () => {
  return (
    <Styles>
      <section className="month-article container">
        <div className="header">
          <SectionHeader className="pb-6" title="Current Month" subTitle="article of" />
        </div>

        <div className="month-article-content">
          <div className="date font-size-14">Tuesday, March 7, 2019</div>
          <div className="overview font-size-14">over view | baby center</div>
          <div className="title font-size-18">baby basics put your title over here</div>
          <p className="text font-size-16">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
            bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
            odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.
            Nam nec tellus a odio tincidunt aucto. Proin gravida nibh vel velit auctor aliquet.
            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec
            sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
            mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctoProin
            gravida nibh vel velit auctor aliquet. Aenean sollicitudin, los bibendum auctor,
            nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
            nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus
            a odio tincidunt auctoProin gravida nibh vel velit auctor aliquet. Aenean
            sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
            Morbi accumsan ipsum veli
          </p>
          <Button primary rounded>
            Read More
          </Button>
        </div>
      </section>
    </Styles>
  );
};

export default MonthArticle;
