import React from "react";

import Head from "next/head";

import styled from "styled-components";

import AppTemplate from "components/templates/app";

import EpisodesList from "components/organisms/episodes-list";

export const Styles = styled.div``;

const HomePage = () => {
  return (
    <AppTemplate>
      <Head>
        <title>Episodes</title>
      </Head>

      <Styles>
        <main>
          <div className="container">
            <EpisodesList />
          </div>
        </main>
      </Styles>
    </AppTemplate>
  );
};

export default HomePage;
