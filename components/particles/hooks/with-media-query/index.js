import { useMediaQuery as useReactMediaQuery } from "react-responsive";

const useMediaQuery = () => {
  const qMin320 = useReactMediaQuery({
    query: "(min-width: 320px)",
  });

  const qMin321 = useReactMediaQuery({
    query: "(min-width: 321px)",
  });

  const qMax320 = useReactMediaQuery({
    query: "(max-width: 320px)",
  });

  const qMin360 = useReactMediaQuery({
    query: "(min-width: 360px)",
  });

  const qMin361 = useReactMediaQuery({
    query: "(min-width: 361px)",
  });

  const qMax360 = useReactMediaQuery({
    query: "(max-width: 360px)",
  });

  const qMin375 = useReactMediaQuery({
    query: "(min-width: 375px)",
  });

  const qMin376 = useReactMediaQuery({
    query: "(min-width: 376px)",
  });

  const qMax375 = useReactMediaQuery({
    query: "(max-width: 375px)",
  });

  const qMin414 = useReactMediaQuery({
    query: "(min-width: 414px)",
  });

  const qMin415 = useReactMediaQuery({
    query: "(min-width: 415px)",
  });

  const qMax414 = useReactMediaQuery({
    query: "(max-width: 414px)",
  });

  const qMin576 = useReactMediaQuery({
    query: "(min-width: 576px)",
  });

  const qMin577 = useReactMediaQuery({
    query: "(min-width: 577px)",
  });

  const qMax576 = useReactMediaQuery({
    query: "(max-width: 576px)",
  });

  const qMin768 = useReactMediaQuery({
    query: "(min-width: 768px)",
  });

  const qMin769 = useReactMediaQuery({
    query: "(min-width: 769px)",
  });

  const qMax768 = useReactMediaQuery({
    query: "(max-width: 768px)",
  });

  const qMax812 = useReactMediaQuery({
    query: "(max-width: 812px)",
  });

  const qMin812 = useReactMediaQuery({
    query: "(min-width: 812px)",
  });

  const qMin813 = useReactMediaQuery({
    query: "(min-width: 813px)",
  });
  const qMax900 = useReactMediaQuery({
    query: "(max-width: 900px)",
  });

  const qMin960 = useReactMediaQuery({
    query: "(min-width: 960px)",
  });

  const qMin961 = useReactMediaQuery({
    query: "(min-width: 961px)",
  });

  const qMax960 = useReactMediaQuery({
    query: "(max-width: 960px)",
  });

  const qMax1000 = useReactMediaQuery({
    query: "(max-width: 1000px)",
  });

  const qMax1100 = useReactMediaQuery({
    query: "(max-width: 1100px)",
  });

  const qMin1200 = useReactMediaQuery({
    query: "(min-width: 1200px)",
  });

  const qMin1201 = useReactMediaQuery({
    query: "(min-width: 1201px)",
  });

  const qMax1200 = useReactMediaQuery({
    query: "(max-width: 1200px)",
  });

  const qMax1250 = useReactMediaQuery({
    query: "(max-width: 1250px)",
  });
  const qMax1300 = useReactMediaQuery({
    query: "(max-width: 1300px)",
  });
  const qMin1300 = useReactMediaQuery({
    query: "(min-width: 1300px)",
  });
  const qMin1366 = useReactMediaQuery({
    query: "(min-width: 1366px)",
  });

  const qMin1367 = useReactMediaQuery({
    query: "(min-width: 1367px)",
  });

  const qMax1366 = useReactMediaQuery({
    query: "(max-width: 1366px)",
  });
  const qMin1400 = useReactMediaQuery({
    query: "(min-width: 1400px)",
  });
  const qMax1400 = useReactMediaQuery({
    query: "(max-width: 1400px)",
  });

  const qMin1440 = useReactMediaQuery({
    query: "(min-width: 1440px)",
  });

  const qMin1441 = useReactMediaQuery({
    query: "(min-width: 1441px)",
  });

  const qMax1440 = useReactMediaQuery({
    query: "(max-width: 1440px)",
  });

  const qMin1536 = useReactMediaQuery({
    query: "(min-width: 1536px)",
  });

  const qMin1537 = useReactMediaQuery({
    query: "(min-width: 1537px)",
  });

  const qMax1536 = useReactMediaQuery({
    query: "(max-width: 1536px)",
  });

  const qMin1600 = useReactMediaQuery({
    query: "(min-width: 1600px)",
  });

  const qMin1601 = useReactMediaQuery({
    query: "(min-width: 1601px)",
  });

  const qMax1600 = useReactMediaQuery({
    query: "(max-width: 1600px)",
  });

  const qMin1680 = useReactMediaQuery({
    query: "(min-width: 1680px)",
  });

  const qMin1681 = useReactMediaQuery({
    query: "(min-width: 1681px)",
  });

  const qMax1680 = useReactMediaQuery({
    query: "(max-width: 1680px)",
  });

  const qMin1920 = useReactMediaQuery({
    query: "(min-width: 1920px)",
  });

  const qMin1921 = useReactMediaQuery({
    query: "(min-width: 1921px)",
  });

  const qMax1920 = useReactMediaQuery({
    query: "(max-width: 1920px)",
  });

  const q1366to1440 = useReactMediaQuery({
    query: "(min-width: 1366px) and (max-width: 1439px)",
  });

  const q1440to1536 = useReactMediaQuery({
    query: "(min-width: 1440px) and (max-width: 1535px)",
  });

  const q1536to1600 = useReactMediaQuery({
    query: "(min-width: 1536px) and (max-width: 1599px)",
  });

  const q1600to1680 = useReactMediaQuery({
    query: "(min-width: 1600px) and (max-width: 1679px)",
  });

  const q1680to1920 = useReactMediaQuery({
    query: "(min-width: 1680px) and (max-width: 1919px)",
  });

  const q960to1100 = useReactMediaQuery({
    query: "(min-width: 900px) and (max-width: 1100px)",
  });

  return {
    qMin320,
    qMin321,
    qMax320,
    qMin360,
    qMin361,
    qMax360,
    qMin375,
    qMin376,
    qMax375,
    qMin414,
    qMin415,
    qMax414,
    qMin576,
    qMin577,
    qMax576,
    qMin768,
    qMin769,
    qMax768,
    qMin812,
    qMin813,
    qMax812,
    qMax900,
    qMin960,
    qMin961,
    qMax960,
    qMax1000,
    qMax1100,
    qMin1200,
    qMin1201,
    qMax1200,
    qMax1250,
    qMin1366,
    qMax1300,
    qMin1300,
    qMin1367,
    qMax1366,
    qMin1440,
    qMin1400,
    qMax1400,
    qMin1441,
    qMax1440,
    qMin1536,
    qMin1537,
    qMax1536,
    qMin1600,
    qMin1601,
    qMax1600,
    qMin1680,
    qMin1681,
    qMax1680,
    qMin1920,
    qMin1921,
    qMax1920,
    q1366to1440,
    q1440to1536,
    q1536to1600,
    q1600to1680,
    q1680to1920,
    q960to1100,
  };
};

export default useMediaQuery;
