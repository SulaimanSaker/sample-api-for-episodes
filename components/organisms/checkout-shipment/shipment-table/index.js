import React from "react";

import { Checkbox, Image } from "components/atoms";

import { Table } from "react-bootstrap";

import { Styles } from "./styles";

const Shipmenttable = () => {
  return (
    <Styles>
      <div className="shipment-table">
        <Table>
          <thead>
            <tr>
              <th>Estimated Delivery</th>
              <th>Cost</th>
              <th>Tracking</th>
              <th>Carrier</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-primary">
              <td>
                <div className="d-flex align-items-center">
                  <Checkbox onChange={() => {}} checked={true} label="" /> <div>5-10 days</div>
                </div>
              </td>
              <td>
                <sup>$</sup>200.50
              </td>
              <td>5-10 days</td>
              <td>
                <Image src="/images/icons/dhl-logo.png" alt="dhl-logo.png" className="mr-4" /> DHL
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <Checkbox onChange={() => {}} checked={false} label="" /> <div>5-10 days</div>
                </div>{" "}
              </td>
              <td>$200.50</td>
              <td>5-10 days</td>
              <td>
                <Image src="/images/icons/fedex-icon.png" alt="fedex-icon.png" className="mr-4" />{" "}
                Fedex
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Styles>
  );
};

export default Shipmenttable;
