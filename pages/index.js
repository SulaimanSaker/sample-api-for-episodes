import React from "react";

import Head from "next/head";

import styled from "styled-components";

import AppTemplate from "components/templates/app";

import {
  Header,
  Hero,
  OurLittleHistory,
  OurFeatures,
  LatestArticles,
  Advertisements,
  Sales,
  PlanYourEvent,
  LatestEvents,
  VideosCarousel,
  Footer,
} from "components/organisms";

export const Styles = styled.div`
  .home__our-little-history {
  }

  .home__our-features {
    margin-bottom: 4rem;
    position: relative;
  }

  .home__latest-articles {
    background-color: var(--gray-0);
  }

  .home__advertisements {
    padding-top: 4.5rem;
    padding-bottom: 5rem;
    display: flex;
    justify-content: center;
    width: 100%;
    .wrapper {
      width: 61.5%;
      @media (max-width: 960px) {
        width: 100%;
      }
    }
  }

  .home__plan-your-event {
    background-color: var(--gray-0);
    margin-top: 4rem;
    padding-top: 4.5rem;
    padding-bottom: 6.5rem;
  }

  .home__latest-events {
  }

  .home__videos-carousel {
    margin-top: 4.5rem;
    padding-bottom: 5rem;
  }
`;

const HomePage = () => {
  return (
    <AppTemplate header={<Header />} hero={<Hero />} footer={<Footer />}>
      <Head>
        <title>Home | Double Beat</title>
      </Head>

      <Styles>
        <main>
          <div className="home__our-little-history">
            <OurLittleHistory />
          </div>

          <div className="home__our-features">
            <OurFeatures />
          </div>

          <div className="home__latest-articles">
            <LatestArticles />
          </div>

          <div className="home__advertisements">
            <div className="wrapper">
              <Advertisements />
            </div>
          </div>

          <div className="home__sales">
            <Sales />
          </div>

          <div className="home__plan-your-event">
            <PlanYourEvent />
          </div>

          <div className="home__latest-events">
            <LatestEvents />
          </div>

          <div className="home__videos-carousel">
            <VideosCarousel />
          </div>
        </main>
      </Styles>
    </AppTemplate>
  );
};

export default HomePage;
