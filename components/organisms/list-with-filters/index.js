import React, { useCallback, useState } from "react";

import Pluralize from "pluralize";

import useMediaQuery from "components/particles/hooks/with-media-query";

import DesktopList from "./desktop-list";
import MobileList from "./mobile-list";

const sortedBy = [
  {
    id: "1",
    label: "Relevance",
  },
  {
    id: "2",
    label: "Publish date",
  },
  {
    id: "3",
    label: "Views number",
  },
  {
    id: "4",
    label: "Like numbers",
  },
];

const ListWithFilters = ({
  filters: defaultFilters,
  List,
  listData,
  setFilteringData,
  filteringData,
  setFilterFactors,
  filterFactors,
  resetFilters,
  isLoading,
  totalCount,
  getNextPageData,
  buttonLoadingIndicator,
}) => {
  const mediaQueries = useMediaQuery();

  const [filters, setFilters] = useState(defaultFilters);

  const handleFilterChange = ({ filterId, filterName, factorName }) => {
    const singleCatName = Pluralize(filterName, 1);
    const filteringName = singleCatName.concat("Ids");

    let newFilteringData = { ...filteringData };
    let newFilterFactors = [...filterFactors];

    if (filteringData[filteringName]?.length > 0) {
      const isFilterExists = filteringData[filteringName].includes(filterId);

      if (isFilterExists) {
        newFilterFactors = newFilterFactors.filter((f) => f.filterId !== filterId);

        for (const key in newFilteringData) {
          if (key === filteringName) {
            newFilteringData[key] = newFilteringData[key].filter((f) => f !== filterId);
          }
        }
      } else {
        newFilteringData = {
          ...newFilteringData,
          [filteringName]: [...newFilteringData[filteringName], filterId],
        };
        newFilterFactors = [...newFilterFactors, { filterId, filterName, factorName }];
      }
    } else {
      newFilteringData = { ...newFilteringData, [filteringName]: [filterId] };
      newFilterFactors = [...newFilterFactors, { filterId, filterName, factorName }];
    }
    newFilteringData.isIntial = false;
    setFilteringData(newFilteringData);
    setFilterFactors(newFilterFactors);
  };

  const handleSortByChange = (id) => {
    setFilteringData((prev) => ({ ...prev, sortBy: id }));
  };

  const handlefreeTextChange = (text) => {
    setFilteringData((prev) => ({ ...prev, freeText: text }));
  };

  const collapseFilterChange = useCallback(
    (id) => {
      const filterIndex = filters.findIndex((filter) => filter.id === id);

      let newFilters = [...filters];

      newFilters[filterIndex] = {
        ...newFilters[filterIndex],
        collapsed: !newFilters?.[filterIndex]?.collapsed,
      };

      setFilters(newFilters);
    },
    [filters]
  );

  return (
    <div suppressHydrationWarning>
      {mediaQueries.qMin961 && List && (
        <DesktopList
          List={List}
          filters={filters}
          sortedBy={sortedBy}
          resetFilters={resetFilters}
          filterFactors={filterFactors}
          onFilterChange={handleFilterChange}
          collapseFilterChange={collapseFilterChange}
          listData={listData}
          filteringData={filteringData}
          setFilteringData={setFilteringData}
          setFilterFactors={setFilterFactors}
          handleSortByChange={handleSortByChange}
          handlefreeTextChange={handlefreeTextChange}
          isLoading={isLoading}
          totalCount={totalCount}
          getNextPageData={getNextPageData}
          buttonLoadingIndicator={buttonLoadingIndicator}
        />
      )}

      {mediaQueries.qMax960 && List && (
        <MobileList
          List={List}
          filters={filters}
          sortedBy={sortedBy}
          resetFilters={resetFilters}
          filterFactors={filterFactors}
          onFilterChange={handleFilterChange}
          collapseFilterChange={collapseFilterChange}
          listData={listData}
          filteringData={filteringData}
          setFilteringData={setFilteringData}
          setFilterFactors={setFilterFactors}
          handleSortByChange={handleSortByChange}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};
export default ListWithFilters;
