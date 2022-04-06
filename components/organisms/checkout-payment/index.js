import React from "react";

import PaymentCards from "./payment-cards";
import PaymentForm from "./payment-form";

import { Styles } from "./styles";

const CheckoutPayment = () => {
  return (
    <Styles>
      <section className="checkout-payment">
        <header className="checkout-payment__header font-size-18">
          <div className="checkout-payment__title">Please Choose Your Payment</div>
        </header>

        <div className="checkout-payment__payment-cards">
          <PaymentCards />
        </div>

        <div className="checkout-payment__payment-form">
          <PaymentForm />
        </div>
      </section>
    </Styles>
  );
};

export default CheckoutPayment;
