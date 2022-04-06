export const getThumbCardWidth = ({
  qMax960,
  qMax1200,
  q1366to1440,
  q1440to1536,
  q1536to1600,
  q1600to1680,
  q1680to1920,
  qMin1920,
  qMax1366,
}) => {
  if (qMax960) {
    return "50%";
  }

  if (qMax1200) {
    return 270;
  }

  if (qMax1366) {
    return 377;
  }

  if (q1366to1440) {
    return 420;
  }

  if (q1440to1536) {
    return 450;
  }

  if (q1536to1600) {
    return 480;
  }

  if (q1600to1680) {
    return 500;
  }

  if (q1680to1920) {
    return 600;
  }

  if (qMin1920) {
    return 600;
  }

  return 0;
};

export const getThumbCardHeight = ({
  qMax320,
  qMax375,
  qMax576,
  qMax1200,
  q1366to1440,
  q1440to1536,
  q1536to1600,
  q1600to1680,
  q1680to1920,
  qMin1920,
  qMax1366,
}) => {
  if (qMax320) {
    return 300;
  }

  if (qMax375) {
    return 350;
  }

  if (qMax576) {
    return 400;
  }

  if (qMax1200) {
    return 425;
  }

  if (qMax1366) {
    return 425;
  }

  if (q1366to1440) {
    return 500;
  }

  if (q1440to1536) {
    return 525;
  }

  if (q1536to1600) {
    return 550;
  }

  if (q1600to1680) {
    return 600;
  }

  if (q1680to1920) {
    return 650;
  }

  if (qMin1920) {
    return 700;
  }

  return 0;
};
