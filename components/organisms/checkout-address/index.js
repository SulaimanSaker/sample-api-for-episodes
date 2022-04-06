import React, { useState } from "react";

import AddressForm from "./address-form";
import AddressConclusion from "./address-conclusion";

import { addressEnum, addressOperationEnum } from "./enums";

import { Styles } from "./styles";

const defaultAddress = {
  firstName: "",
  lastName: "",
  addressFirstPart: "",
  addressSecondPart: "",
  city: "",
  state: "",
  phoneNumber: "",
  country: "",
};

const CheckoutAddress = () => {
  const [deliveryAddress, setDeliveryAddress] = useState({
    operation: addressOperationEnum.createForm,
    values: { ...defaultAddress, sameAsBillingAddress: true },
  });

  const [billingAddress, setBillingAddress] = useState({
    operation: addressOperationEnum.none,
    values: { ...defaultAddress },
  });

  const submitAddressForm = (type, values) => {
    if (type === addressEnum.delivery) {
      setDeliveryAddress({
        operation: addressOperationEnum.conclusion,
        values,
      });

      if (values.sameAsBillingAddress) {
        setBillingAddress({
          operation: addressOperationEnum.conclusion,
          values,
        });
      }
    }

    if (type === addressEnum.billing) {
      setBillingAddress({
        operation: addressOperationEnum.conclusion,
        values,
      });
    }
  };

  const handleDelete = (type) => {
    if (type === addressEnum.delivery) {
      setDeliveryAddress({
        operation: addressOperationEnum.createForm,
        values: { ...defaultAddress },
      });
    }

    if (type === addressEnum.billing) {
      setBillingAddress({
        operation: addressOperationEnum.createForm,
        values: { ...defaultAddress },
      });
    }
  };

  const handleUpdate = (type) => {
    if (type === addressEnum.delivery) {
      setDeliveryAddress((state) => ({
        ...state,
        operation: "update-form",
      }));
    }

    if (type === addressEnum.billing) {
      setBillingAddress((state) => ({
        ...state,
        operation: "update-form",
      }));
    }
  };

  const sameAsBillingAddressChange = (sameAsBillingAddress) => {
    if (sameAsBillingAddress) {
      setBillingAddress((state) => ({
        ...state,
        operation: addressOperationEnum.none,
      }));
    } else {
      setBillingAddress((state) => ({
        ...state,
        operation: addressOperationEnum.createForm,
      }));
    }
  };

  return (
    <Styles>
      <section className="checkout-address">
        {(deliveryAddress.operation === addressOperationEnum.createForm ||
          deliveryAddress.operation === addressOperationEnum.updateForm) && (
          <div className="checkout-address__address-form">
            <AddressForm
              type={addressEnum.delivery}
              initialValues={deliveryAddress.values}
              onSubmit={submitAddressForm}
              operation={deliveryAddress.operation}
              sameAsBillingAddressChange={sameAsBillingAddressChange}
            />
          </div>
        )}

        {deliveryAddress.operation === addressOperationEnum.conclusion && (
          <div className="checkout-address__address-conclusion">
            <AddressConclusion
              type={addressEnum.delivery}
              values={deliveryAddress.values}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          </div>
        )}

        {(billingAddress.operation === addressOperationEnum.createForm ||
          billingAddress.operation === addressOperationEnum.updateForm) && (
          <div className="checkout-address__address-form">
            <AddressForm
              type={addressEnum.billing}
              operation={billingAddress.operation}
              initialValues={billingAddress.values}
              onSubmit={submitAddressForm}
            />
          </div>
        )}

        {billingAddress.operation === addressOperationEnum.conclusion && (
          <div className="checkout-address__address-conclusion">
            <AddressConclusion
              type={addressEnum.billing}
              values={billingAddress.values}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          </div>
        )}
      </section>
    </Styles>
  );
};

export default CheckoutAddress;
