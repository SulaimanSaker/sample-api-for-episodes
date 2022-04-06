import React from "react";

import { Checkbox, Image } from "components/atoms";

import { Styles } from "./styles";

const PaymentCards = () => {
  return (
    <Styles>
      <div className="payment-cards">
        <div className="payment-cards__card">
          <Checkbox onChange={() => {}} checked={true} label="" />
          <div>
            <Image src="/images/icons/visa-logo.png" alt="visa-logo.png" />
          </div>
        </div>

        <div className="payment-cards__card">
          <Checkbox onChange={() => {}} checked={false} label="" />

          <div>
            <Image src="/images/icons/mc-logo.png" alt="mc-logo.png" />
          </div>
        </div>

        <div className="payment-cards__card">
          <Checkbox onChange={() => {}} checked={false} label="" />

          <div>
            <Image src="/images/icons/ae-logo.png" alt="ae-logo.png" />
          </div>
        </div>

        <div className="payment-cards__card">
          <Checkbox onChange={() => {}} checked={false} label="" />

          <div>
            <Image src="/images/icons/pp-logo.png" alt="pp-logo.png" />
          </div>
        </div>

        <div className="payment-cards__card">
          <Checkbox onChange={() => {}} checked={false} label="" />

          <div>
            <Image src="/images/icons/cod-icon.png" alt="cod-icon.png" />
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default PaymentCards;
