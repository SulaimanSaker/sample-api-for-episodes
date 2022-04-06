import React, { useCallback } from "react";

import { Formik } from "formik";

import { Form, Row, Col } from "react-bootstrap";

import { GoPlus } from "react-icons/go";

import { Checkbox, AnimatedButton } from "components/atoms";

import { schema } from "./schema";
import { addressEnum, addressOperationEnum } from "../enums";

import { Styles } from "./styles";

const AddressForm = ({
  initialValues,
  type,
  operation,
  onSubmit: doSubmit,
  sameAsBillingAddressChange,
}) => {
  const onSubmit = useCallback(
    (values) => {
      doSubmit(type, values);
    },
    [type, doSubmit]
  );

  const getTitle = useCallback(() => {
    if (type === addressEnum.delivery) {
      return "Add your Delivery Address";
    }

    if (type === addressEnum.billing) {
      return "Add your Billing Address";
    }
  }, [type]);

  const getButtonText = () => {
    if (operation === addressOperationEnum.createForm) {
      return "Save";
    }

    if (operation === addressOperationEnum.updateForm) {
      return "Update";
    }
  };

  return (
    <Styles>
      <div className="address-form">
        <header className="address-form__header">
          <div className="address-form__title font-size-18">{getTitle()}</div>
        </header>

        <div className="address-form__note font-size-18">Required Fields *</div>

        <Formik validationSchema={schema} onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit, handleChange, values, touched, errors, setFieldValue }) => {
            return (
              <Form noValidate onSubmit={handleSubmit}>
                <div className="fields-container">
                  <Row>
                    <Col className="col-12 col-sm-12 col-md-6  form__input">
                      <Form.Group controlId="firstName">
                        <Form.Label>First Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="Enter first name"
                          value={values.firstName}
                          onChange={handleChange}
                          isValid={touched.firstName && !errors.firstName}
                          isInvalid={touched.firstName && errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.firstName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col className="col-12 col-sm-12 col-md-6 form__input">
                      <Form.Group controlId="lastName">
                        <Form.Label>Last Name *</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="lastName"
                          placeholder="Enter last name"
                          value={values.lastName}
                          onChange={handleChange}
                          isValid={touched.lastName && !errors.lastName}
                          isInvalid={touched.lastName && errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.lastName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="country" className="form__input">
                    <Form.Label>Destination/Region *</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      className="custom-select"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                      isValid={touched.country && !errors.country}
                      isInvalid={touched.country && errors.country}
                    >
                      <option></option>
                      <option>Lebanon (LBP)</option>
                      <option>Albania</option>
                      <option>Algeria</option>
                      <option>Andorra</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors?.country}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    controlId="addressFirstPart"
                    className="address-first-part form__input"
                  >
                    <Form.Label>Address *</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="addressFirstPart"
                      placeholder="Enter address"
                      value={values.addressFirstPart}
                      onChange={handleChange}
                      isValid={touched.addressFirstPart && !errors.addressFirstPart}
                      isInvalid={touched.addressFirstPart && errors.addressFirstPart}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors?.addressFirstPart}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="address-second-part" className="form__input">
                    <Form.Control
                      required
                      type="text"
                      name="addressSecondPart"
                      placeholder="Enter address"
                      value={values.addressSecondPart}
                      onChange={handleChange}
                      isValid={touched.addressSecondPart && !errors.addressSecondPart}
                      isInvalid={touched.addressSecondPart && errors.addressSecondPart}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors?.addressSecondPart}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Row>
                    <Col className="col-12 col-sm-12 col-md-6 form__input">
                      <Form.Group controlId="city">
                        <Form.Label>City *</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          placeholder="Enter city"
                          value={values.city}
                          onChange={handleChange}
                          isValid={touched.city && !errors.city}
                          isInvalid={touched.city && errors.city}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.city}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col className="col-12 col-sm-12 col-md-6 form__input">
                      <Form.Group controlId="state">
                        <Form.Label>State *</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="state"
                          placeholder="Enter state"
                          value={values.state}
                          onChange={handleChange}
                          isValid={touched.state && !errors.state}
                          isInvalid={touched.state && errors.state}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.state}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="col-12 col-sm-12 col-md-6 form__input">
                      <Form.Group controlId="phoneNumber">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                          required
                          name="phoneNumber"
                          placeholder="Enter phone number"
                          value={values.phoneNumber}
                          onChange={handleChange}
                          isValid={touched.phoneNumber && !errors.phoneNumber}
                          isInvalid={touched.phoneNumber && errors.phoneNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.phoneNumber}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  {type === addressEnum.delivery && (
                    <Form.Group controlId="sameAsBillingAddress" className="form__input">
                      <Checkbox
                        onChange={(checked) => {
                          setFieldValue("sameAsBillingAddress", checked);
                          sameAsBillingAddressChange(checked);
                        }}
                        checked={values.sameAsBillingAddress}
                        label="Use as Billing Address"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors?.sameAsBillingAddress}
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </div>

                <div className="submit-button-container">
                  <AnimatedButton type="submit">
                    <span className="mr-2">{getButtonText()}</span>
                    <GoPlus size="1.25em" fill="var(--gray-3)" />
                  </AnimatedButton>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Styles>
  );
};

export default AddressForm;
