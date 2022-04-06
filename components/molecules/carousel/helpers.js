export const getDefaultSlidesPerView = ({ qMax576, qMax900, qMax1300, qMin1300 }) => {
  if (qMax576) {
    return 1;
  }

  if (qMax900) {
    return 2;
  }

  if (qMax1300) {
    return 3;
  }

  if (qMin1300) {
    return 4;
  }

  return 1;
};
