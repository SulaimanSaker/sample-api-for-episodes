import React, { useState } from "react";

import pluralize from "pluralize";

import { Checkbox, CallapseArrow } from "components/atoms";

import { Styles } from "./styles";

const ListFilter = ({ label, items, onFilterChange, filteringData }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Styles collapsed={collapsed}>
      <div className="list-filter">
        <div className="list-filter__header">
          <div className="list-filter__title">{label}</div>

          <div className="list-filter__arrow">
            <CallapseArrow collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
          </div>
        </div>

        <div className="list-filter-content">
          <ul className="list-filter__checkboxs">
            {items?.length > 0 &&
              items.map(({ id, name }) => (
                <li key={id} className="list-filter__checkbox">
                  <Checkbox
                    onChange={() =>
                      onFilterChange({
                        filterId: id,
                        filterName: label,
                        factorName: name,
                      })
                    }
                    checked={
                      filteringData &&
                      filteringData[pluralize(label, 1).concat("Ids")]?.includes(id)
                    }
                    label={name}
                  />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Styles>
  );
};

export default ListFilter;
