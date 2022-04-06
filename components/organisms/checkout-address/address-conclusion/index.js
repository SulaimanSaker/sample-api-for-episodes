import React, { useCallback } from "react";

import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

import { addressEnum } from "../enums";

import { Styles } from "./styles";

const AddressConclusion = ({ values, type, onDelete, onUpdate }) => {
  const getTitle = useCallback(() => {
    if (type === addressEnum.delivery) {
      return "Delivery Address";
    }

    if (type === addressEnum.billing) {
      return "Billing Address";
    }
  }, [type]);

  return (
    <Styles>
      <div className="address-conclustion">
        <header className="address-conclustion__header">
          <div className="address-conclustion__title">{getTitle()}</div>
        </header>

        <div className="address-conclustion__values">
          <div>{values.firstName + " " + values.lastName}</div>
          <div>{values.addressFirstPart}</div>
          <div>{values.addressSecondPart}</div>
          <div>{values.city}</div>
          <div>{values.state}</div>
          <div>{values.country}</div>
          <div>{values.phoneNumber}</div>

          <div className="buttons-container">
            <div className="delete-button-container">
              <RiDeleteBinLine fill="var(--gray-15)" size="1.15em" onClick={() => onDelete(type)} />
            </div>

            <div className="edit-button-container">
              <AiOutlineEdit fill="var(--gray-15)" size="1.15em" onClick={() => onUpdate(type)} />
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default AddressConclusion;
