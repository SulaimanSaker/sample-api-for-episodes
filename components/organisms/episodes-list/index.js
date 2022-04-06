import React, { useEffect, useState } from "react";

import axios from "axios";

import ArticleItem from "components/molecules/article-item";

import { Styles } from "./styles";

const EpisodesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://api.sampleapis.com/futurama/episodes").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Styles>
      <div className="articles__cards">
        {data.map(({ title, writers, desc, originalAirDate }, index) => (
          <div key={index} className="articles__card">
            <ArticleItem
              property1={title}
              property2={writers}
              property3={desc}
              originalAirDate={originalAirDate}
              src="https://youtu.be/ScMzIvxBSi4"
            />
          </div>
        ))}
      </div>
    </Styles>
  );
};

export default EpisodesList;
