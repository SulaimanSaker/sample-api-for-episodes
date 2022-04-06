import React, { useEffect, useState } from "react";

import classNames from "classnames";

import { AnimatedButton, DismissibleButton, CallapseArrow } from "components/atoms";

import { Styles } from "./styles";

const ListFilterBar = ({
  filterFactors,
  onFilterChange,
  resetFilters,
  filtersCollapsed,
  setFiltersCollapsed,
}) => {
  const [menuShowed, setMenuShowed] = useState(false);

  useEffect(() => {
    if (filterFactors?.length < 4 && menuShowed) {
      setMenuShowed(false);
    }
  }, [filterFactors, menuShowed]);

  return (
    <Styles>
      <div className="list-filter-bar full-width-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-3 d-flex justify-content-between align-items-center pr-7">
              <div className="list-filter-bar__title">filter</div>

              <div className="d-flex justify-content-end align-items-center">
                {filterFactors?.length > 0 && filterFactors?.length < 4 && (
                  <div className="list-filter-bar__reset mr-4">
                    <AnimatedButton small onClick={resetFilters}>
                      Reset Filters
                    </AnimatedButton>
                  </div>
                )}

                <CallapseArrow
                  collapsed={filtersCollapsed}
                  onClick={() => setFiltersCollapsed((collapsed) => !collapsed)}
                />
              </div>
            </div>

            <div className="col col-9 d-flex align-items-center">
              {filterFactors?.length < 4 &&
                filterFactors?.map((filter, index) => (
                  <div key={index} className="mr-4">
                    <DismissibleButton
                      text={filter.factorName}
                      onClick={() =>
                        onFilterChange({
                          filterId: filter.filterId,
                          filterName: filter.filterName,
                          factorName: filter.factorName,
                        })
                      }
                    />
                  </div>
                ))}

              {filterFactors?.length >= 4 && (
                <div
                  className={classNames("list-filter-bar__checked-filters-popup", {
                    menu: menuShowed,
                  })}
                >
                  <header className="header">
                    <div className="menu-icon mr-4">
                      <svg
                        width="23"
                        height="15"
                        viewBox="0 0 23 15"
                        onClick={() => setMenuShowed(!menuShowed)}
                      >
                        <rect x="0.1" width="22.9" height="3" />
                        <rect x="8.6" y="12" width="6" height="3" />
                        <rect x="4.1" y="6" width="15" height="3" />
                      </svg>
                    </div>

                    <div className="filters-count mr-4">{filterFactors?.length} Filters</div>

                    <div className="reset-filters mr-4">
                      <AnimatedButton small onClick={resetFilters}>
                        Reset Filters
                      </AnimatedButton>
                    </div>
                  </header>

                  <div className="checked-filters mt-2 mb-6">
                    {filterFactors?.map((filter, index) => (
                      <div key={index} className="mr-4 mb-4">
                        <DismissibleButton
                          text={filter.factorName}
                          onClick={() =>
                            onFilterChange({
                              filterId: filter.filterId,
                              filterName: filter.filterName,
                              factorName: filter.factorName,
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default ListFilterBar;
