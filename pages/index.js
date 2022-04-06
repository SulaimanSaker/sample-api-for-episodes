import React, { useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Head from "next/head";

import styled from "styled-components";

import AppTemplate from "components/templates/app";

import { Header, Footer, ListWithFilters, ArticlesList } from "components/organisms";

import http from "services/http";
import { GET_ALL_ARTICLES, GET_ALL_FILTERS, GET_ALL_WEB_ARTICLES } from "constants/endpoints";

export const Styles = styled.div``;

const defaultFilteringData = {
  isIntial: true,
  language: "en",
  freeText: "",
  pregnancyId: 1,
  pageNumber: 1,
  recordCount: 10,
  sortBy: 2,
  ageCategoryIds: [],
  categoryIds: [],
};

const ArticlesPage = ({
  articles: defaultArticles,
  totalCount: defaultTotalCount,
  filters,
}) => {
  const [articles, setArticles] = useState(defaultArticles);
  const [filterFactors, setFilterFactors] = useState([]);

  const [filteringData, setFilteringData] = useState({ ...defaultFilteringData });

  const [totalCount, setTotalCount] = useState(defaultTotalCount);

  const [buttonLoadingIndicator, setButtonLoadingIndicator] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!filteringData.isIntial) {
      setIsLoading(true);
      let config = {
        method: "post",
        url: GET_ALL_WEB_ARTICLES,
        data: filteringData,
      };

      http(config).then((res) => {
        setArticles(res.data.content.data);
        setTotalCount(res.data.content.totalCount);
        setIsLoading(false);
      });
    }
  }, [filteringData]);

  const resetFilters = async () => {
    setFilteringData({ ...defaultFilteringData });
    setFilterFactors([]);
  };

  const getNextPageData = () => {
    setButtonLoadingIndicator(true);
    let newFilteringData = {
      ...filteringData,
      pageNumber: filteringData.pageNumber + 1,
      isIntial: false,
    };

    let config = {
      method: "post",
      url: GET_ALL_WEB_ARTICLES,
      data: newFilteringData,
    };

    http(config).then((res) => {
      setArticles((prev) => [...prev, ...res.data.content.data]);
      setButtonLoadingIndicator(false);
    });
  };

  return (
    <AppTemplate header={<Header />} footer={<Footer />}>
      <Head>
        <title>Episodes</title>
      </Head>

      <Styles>
        <main>
          <ListWithFilters
            filters={filters}
            List={ArticlesList}
            listData={articles}
            setFilteringData={setFilteringData}
            filteringData={filteringData}
            setFilterFactors={setFilterFactors}
            filterFactors={filterFactors}
            resetFilters={resetFilters}
            isLoading={isLoading}
            totalCount={totalCount}
            getNextPageData={getNextPageData}
            buttonLoadingIndicator={buttonLoadingIndicator}
          />
        </main>
      </Styles>
    </AppTemplate>
  );
};

export async function getServerSideProps({ locale }) {
  let config = {
    method: "post",
    url: GET_ALL_ARTICLES,
    data: defaultFilteringData,
  };

  const articlesRes = await http(config);

  config = {
    method: "get",
    url: GET_ALL_FILTERS,
    params: {
      language: locale,
    },
  };

  const filtersRes = await http(config);

  return {
    props: {
      articles: articlesRes.data.content.data,
      totalCount: articlesRes.data.content.totalCount,
      filters: filtersRes.data.content,

      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default ArticlesPage;
