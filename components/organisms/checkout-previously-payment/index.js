import React from "react";

import { GoPlus } from "react-icons/go";

import { Checkbox, AnimatedButton, Image } from "components/atoms";

import { Styles } from "./styles";

const CheckoutPreviouslyPayment = () => {
  return (
    <Styles>
      <section className="checkout-payment">
        <header className="checkout-payment__header font-size-18">
          <div className="checkout-payment__title">Previously Saved Payment Methods</div>
        </header>

        <div className="checkout-payment__methods">
          <div className="checkout-payment-method text-primary">
            <div className="left">
              <Checkbox onChange={() => {}} checked={true} label="" />

              <div className="mr-6">
                <Image src="/images/icons/visa-logo.png" alt="visa-logo.png" />
              </div>

              <div className="mr-8">
                <sup>**** **** **** </sup>5020
              </div>

              <div className="mr-2">Expiration 08/24</div>
            </div>

            <div className="right">
              <Image
                src="/images/icons/delete-icon.png"
                alt="delete-icon.png"
                className="delete-icon"
              />
            </div>
          </div>

          <div className="checkout-payment-method">
            <div className="left">
              <Checkbox onChange={() => {}} checked={false} label="" />

              <div className="mr-6">
                <Image src="/images/icons/visa-logo.png" alt="visa-logo.png" />
              </div>

              <div className="mr-8">
                <sup>**** **** **** </sup>5020
              </div>

              <div className="mr-2">Expiration 08/24</div>
            </div>

            <div className="right">
              <Image
                src="/images/icons/delete-icon.png"
                alt="delete-icon.png"
                className="delete-icon"
              />
            </div>
          </div>

          <div className="checkout-payment-method">
            <div className="left">
              <Checkbox onChange={() => {}} checked={false} label="" />

              <div className="mr-6">
                <Image src="/images/icons/visa-logo.png" alt="visa-logo.png" />
              </div>

              <div className="mr-8">
                <sup>**** **** **** </sup>5020
              </div>

              <div className="mr-2">Expiration 08/24</div>
            </div>

            <div className="right">
              <Image
                src="/images/icons/delete-icon.png"
                alt="delete-icon.png"
                className="delete-icon"
              />
            </div>
          </div>

          <div className="checkout-payment-method">
            <div className="left">
              <Checkbox onChange={() => {}} checked={false} label="" />

              <div className="mr-6">
                <Image src="/images/icons/visa-logo.png" alt="visa-logo.png" />
              </div>

              <div className="mr-8">
                <sup>**** **** **** </sup>5020
              </div>

              <div className="mr-2">Expiration 08/24</div>
            </div>

            <div className="right">
              <Image
                src="/images/icons/delete-icon.png"
                alt="delete-icon.png"
                className="delete-icon"
              />
            </div>
          </div>

          <div className="checkout-payment-method">
            <div className="left">
              <Checkbox onChange={() => {}} checked={false} label="" />

              <div className="mr-6">
                <Image src="/images/icons/visa-logo.png" alt="visa-logo.png" />
              </div>

              <div className="mr-8">
                <sup>**** **** **** </sup>5020
              </div>

              <div className="mr-2">Expiration 08/24</div>
            </div>

            <div className="right">
              <Image
                src="/images/icons/delete-icon.png"
                alt="delete-icon.png"
                className="delete-icon"
              />
            </div>
          </div>

          <div className="button-container">
            <AnimatedButton type="submit">
              <span className="mr-2">Add New Card</span>
              <GoPlus size="1.25em" fill="var(--gray-3)" />
            </AnimatedButton>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default CheckoutPreviouslyPayment;
