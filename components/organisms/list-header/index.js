import React, { useState } from "react";

import classNames from "classnames";

import { HiOutlineSearch } from "react-icons/hi";

import { Form } from "react-bootstrap";

import { InlineSVG } from "components/atoms";

import { Styles } from "./styles";

const ListHeader = ({
  sortedBy,
  handleSortByChange,
  handlefreeTextChange,
  recordCount,
  totalCount,
}) => {
  const [viewType, setViewType] = useState("columns");

  return (
    <Styles>
      <header className="list-header full-width-container">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="list-header__column-type-chooser col-3">
              <InlineSVG
                width="2rem"
                height="1.5rem"
                className={classNames("list-header__columns-type", {
                  active: viewType === "columns",
                })}
                src="/images/3-columns.svg"
                onClick={() => setViewType("columns")}
              />

              <div className="list-header__vertical-column"></div>

              <InlineSVG
                width="1.5rem"
                height="1.5rem"
                src="/images/list.svg"
                className={classNames("list-header__columns-type", {
                  active: viewType === "list",
                })}
                onClick={() => setViewType("list")}
              />
            </div>

            <div className="list-header__controls col-9">
              <div className="row justify-content-between align-items-center w-100 p-0 m-0">
                <div className="list-header__results">
                  {recordCount < totalCount ? recordCount : totalCount} Of {totalCount} results
                </div>

                <div className="d-flex align-items-center mr-6">
                  <div className="list-header__sorted-by">SORTED BY</div>

                  <div className="list-header__vertical-column"></div>

                  <Form.Group className="list-header__sorted-by-select">
                    <Form.Control
                      as="select"
                      defaultValue={2}
                      onChange={(e) => handleSortByChange(e.target.value)}
                    >
                      {sortedBy?.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.label}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>

                <div className="list-header__search-container">
                  <input
                    type="text"
                    className="list-header__search-input pl-4"
                    placeholder="Search"
                    onChange={(e) => handlefreeTextChange(e.target.value)}
                  />
                  <div className="search-icon pr-3">
                    <HiOutlineSearch fill="white" size="1.25em" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Styles>
  );
};

export default ListHeader;
