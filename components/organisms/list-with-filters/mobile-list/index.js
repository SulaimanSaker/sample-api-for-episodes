import React, { useState } from "react";

import { RiArrowRightSLine } from "react-icons/ri";

import { Button, Radio, DismissibleButton, LoadingIndicator } from "components/atoms";
import { Popup } from "components/molecules";
import { ListFilters } from "components/organisms";

import { Styles } from "./styles";

const MobileList = ({
  List,
  filters,
  filterFactors,
  sortedBy,
  onFilterChange,
  handleSortByChange,
  handlePriceChange,
  collapseFilterChange,
  listData,
  filteringData,
  setFilteringData,
  setFilterFactors,
  isLoading,
}) => {
  const [popupShowed, togglePopup] = useState(false);
  const [sortedById, setSortedById] = useState(filteringData?.sortBy);

  const handleTogglePopup = () => {
    togglePopup((state) => !state);
  };

  const popupFooter = (
    <div className="show-button">
      <Button primary block onClick={handleTogglePopup}>
        <div className="content">
          <div>Show</div>
          <div className="arrow-right">
            <RiArrowRightSLine fill="white" size="1.5em" />
          </div>
        </div>
      </Button>
    </div>
  );

  return (
    <Styles>
      <div className="mobile-list">
        <div className="mobile-list__filter-button">
          <Button primary onClick={handleTogglePopup}>
            Filter {filterFactors?.length > 0 && filterFactors?.length}
          </Button>
        </div>

        <div className="mobile-list__items">
          <div className="full-width-container">
            {isLoading ? <LoadingIndicator /> : <List data={listData} />}
          </div>
        </div>

        <Popup showed={popupShowed} footer={popupFooter} onTaggle={handleTogglePopup}>
          <div className="filter-popup">
            <div className="filter-popup__sort-by">
              <header className="header">
                <h2 className="title">
                  <span>Sorted By</span>
                </h2>
              </header>

              <ul className="checkboxs">
                {filteringData &&
                  sortedBy?.map(({ id, label }) => (
                    <li key={id} className="checkbox">
                      <Radio
                        id={Number(id)}
                        checked={sortedById === Number(id)}
                        label={label}
                        onChange={handleSortByChange}
                        setChecked={setSortedById}
                      />
                    </li>
                  ))}
              </ul>
            </div>

            <div className="filter-popup__filters">
              <header className="header">
                <h2 className="title">
                  <span>Filters</span>
                </h2>
              </header>

              {filterFactors?.length !== 0 && (
                <div className="checked-filters">
                  {filterFactors &&
                    filterFactors.map((filter, index) => (
                      <div key={index} className="mr-4 mb-4">
                        <DismissibleButton
                          text={filter.name}
                          onClick={() =>
                            onFilterChange({
                              filterId: filter.id,
                              filterName: filter.filterName,
                              FactorName: filter.name,
                            })
                          }
                        />
                      </div>
                    ))}
                </div>
              )}

              <div className="filters">
                <ListFilters
                  filters={filters}
                  filtersCollapsed
                  onFilterChange={onFilterChange}
                  handlePriceChange={handlePriceChange}
                  collapseFilterChange={collapseFilterChange}
                  filteringData={filteringData}
                  setFilteringData={setFilteringData}
                  setFilterFactors={setFilterFactors}
                />
              </div>
            </div>
          </div>
        </Popup>
      </div>
    </Styles>
  );
};

export default MobileList;
