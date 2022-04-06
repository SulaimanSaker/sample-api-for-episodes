import React from "react";

import { useRouter } from "next/router";

import { SectionHeader, LatestArticleItem } from "components/molecules";

import { Styles } from "./styles";

const LatestArticles = () => {
  const router = useRouter();

  return (
    <Styles>
      <section className="latest-articles">
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="latest-articles__header">
              <SectionHeader
                defaultLines
                viewAllButton
                className="mb-6 pb-1"
                title="Latest Articles"
                subTitle="Great begins with small"
                onViewAllClick={() => router.push("/articles")}
              />
            </div>
          </div>

          <div className="grid">
            <div className="box-one">
              <LatestArticleItem
                height="100%"
                width="100%"
                src="/images/temp/article1.jpg"
                alt=""
                isNew={true}
                property1="Over View | Baby Center"
                property2="Baby Basics put your title over here"
                property3="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin"
              />
            </div>

            <div className="box-tow">
              <LatestArticleItem
                height="100%"
                width="100%"
                src="/images/temp/article2.jpg"
                alt=""
                property1="Over View | Baby Center"
                property2="Baby Basics put your title over here"
                property3="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin"
              />
            </div>

            <div className="box-three">
              <LatestArticleItem
                height="100%"
                width="100%"
                src="/images/temp/article3.jpg"
                alt=""
                property1="Over View | Baby Center"
                property2="Baby Basics put your title over here"
                property3="Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin"
              />
            </div>

            <div className="box-four">
              <LatestArticleItem
                height="100%"
                width="100%"
                src="/images/temp/article4.jpg"
                alt=""
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

export default LatestArticles;
