import React, { useEffect, useState } from "react";

import axios from "axios";

import Episode from "components/molecules/episode";

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
            <Episode
              title={title}
              writers={writers}
              desc={desc}
              originalAirDate={originalAirDate}
            />
          </div>
        ))}
      </div>
    </Styles>
  );
};

export default EpisodesList;
