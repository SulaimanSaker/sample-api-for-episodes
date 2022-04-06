import React, { useState } from "react";

import { ListHeader, ListFilterBar, ListFilters } from "components/organisms";

import { Styles } from "./styles";
import { LoadingIndicator } from "components/atoms";

const DesktopList = ({
  List,
  filters,
  sortedBy,
  resetFilters,
  filterFactors,
  onFilterChange,
  handleSortByChange,
  collapseFilterChange,
  listData,
  filteringData,
  setFilteringData,
  setFilterFactors,
  handlefreeTextChange,
  isLoading,
  totalCount,
  getNextPageData,
  buttonLoadingIndicator,
}) => {
  const [filtersCollapsed, setFiltersCollapsed] = useState(true);

  return (
    <Styles filtersCollapsed={filtersCollapsed}>
      <section className="desktop-list">
        <ListHeader
          sortedBy={sortedBy}
          handleSortByChange={handleSortByChange}
          handlefreeTextChange={handlefreeTextChange}
          recordCount={listData?.length}
          totalCount={totalCount}
        />

        <ListFilterBar
          resetFilters={resetFilters}
          filterFactors={filterFactors}
          onFilterChange={onFilterChange}
          filtersCollapsed={filtersCollapsed}
          setFiltersCollapsed={setFiltersCollapsed}
        />

        <div className="full-width-container">
          <div className="container">
            <div className="row mb-4">
              <div className="col desktop-list__filters">
                <ListFilters
                  filters={filters}
                  filtersCollapsed={filtersCollapsed}
                  onFilterChange={onFilterChange}
                  collapseFilterChange={collapseFilterChange}
                  filteringData={filteringData}
                  setFilteringData={setFilteringData}
                  setFilterFactors={setFilterFactors}
                />
              </div>

              <div className="col desktop-list__items-list">
                {isLoading ? (
                  <LoadingIndicator />
                ) : (
                  <List
                    filtersCollapsed={filtersCollapsed}
                    data={listData}
                    getNextPageData={getNextPageData}
                    buttonLoadingIndicator={buttonLoadingIndicator}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default DesktopList;
