const groupItems = (items, defaultGroupCount, groupsCounts) => {
  let accumulator = 0;

  const groupedItems = [];

  let divisor = defaultGroupCount;

  items.forEach((item, index) => {
    if (groupsCounts?.[accumulator]) {
      divisor = groupsCounts[accumulator];
    }

    if (!groupedItems[accumulator]) {
      groupedItems[accumulator] = [];
    }

    groupedItems[accumulator].push(item);

    if ((index + 1) % divisor === 0) {
      accumulator++;

      divisor = divisor + defaultGroupCount;
    }
  });

  return groupedItems;
};

export default groupItems;
