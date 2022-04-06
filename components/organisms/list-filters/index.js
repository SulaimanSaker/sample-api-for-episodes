import React from "react";

import ListFilter from "./list-filter";

import { Styles } from "./styles";

const ListFilters = ({
  filters,
  onFilterChange,
  handlePriceChange,
  collapseFilterChange,
  filteringData,
  setFilteringData,
  setFilterFactors,
}) => {
  return (
    <Styles>
      <div className="list-filters">
        <div xs={3} className="list-filters__categories-filter">
          {Object.keys(filters)?.map(function (key) {
            return (
              <ListFilter
                key={key}
                label={key}
                items={filters[key]}
                onFilterChange={onFilterChange}
                handlePriceChange={handlePriceChange}
                collapseFilterChange={collapseFilterChange}
                filteringData={filteringData}
                setFilteringData={setFilteringData}
                setFilterFactors={setFilterFactors}
              />
            );
          })}
        </div>
      </div>
    </Styles>
  );
};

export default ListFilters;
