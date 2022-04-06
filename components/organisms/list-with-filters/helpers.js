import _ from "lodash";

export const getFiltersFactors = (filters) => {
  const withoutPrices = filters.filter((filter) => filter.type !== "prices");

  const result = _.flattenDeep(
    withoutPrices.map((filter) =>
      filter.items
        .filter((item) => item.checked)
        .map((item) => ({
          itemId: item.id,
          filterId: filter.id,
          label: item.label,
          filterType: filter.type,
        }))
    )
  );

  const pricesIndex = filters.findIndex((filter) => filter.type === "prices");

  if (
    filters[pricesIndex]?.from > filters[pricesIndex]?.min ||
    (filters[pricesIndex]?.to && filters[pricesIndex]?.to < filters[pricesIndex]?.max)
  ) {
    result.push({
      filterId: "prices",
      label: `$${filters[pricesIndex].from || filters[pricesIndex].min} - $${
        filters[pricesIndex].to || filters[pricesIndex].max
      }`,
      filterType: "prices",
    });
  }

  return result;
};
