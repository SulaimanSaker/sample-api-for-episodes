import React, { useEffect, useState } from "react";

import axios from "axios";

import Episode from "components/molecules/episode";

import { Styles } from "./styles";

const url = "https://api.sampleapis.com/futurama/episodes";

const EpisodesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <Styles>
      <div className="episode__cards">
        {data.map(({ title, writers, desc, originalAirDate }, index) => (
          <div key={index} className="episode__card">
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
