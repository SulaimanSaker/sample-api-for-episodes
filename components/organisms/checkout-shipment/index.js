import useMediaQuery from "components/particles/hooks/with-media-query";
import React from "react";

import MobileShipmentTable from "./mobile-shipment-table";

import Shipmenttable from "./shipment-table";

import { Styles } from "./styles";

const CheckoutShipment = () => {
  const mediaQueries = useMediaQuery();
  return (
    <Styles>
      <section className="checkout-shipment">
        <header className="checkout-shipment__header font-size-18">
          <div className="checkout-shipment__title">Please Choose Your Shipment</div>
        </header>

        <div className="checkout-shipment__table">
          {mediaQueries.qMin768 && <Shipmenttable />}
          {mediaQueries.qMax768 && <MobileShipmentTable />}
        </div>
      </section>
    </Styles>
  );
};

export default CheckoutShipment;
