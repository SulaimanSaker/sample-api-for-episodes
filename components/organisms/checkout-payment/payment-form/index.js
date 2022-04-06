import React from "react";

import { Formik } from "formik";

import { Form, Row, Col } from "react-bootstrap";

import { GoPlus } from "react-icons/go";

import { Checkbox, AnimatedButton } from "components/atoms";

import { schema } from "./schema";

import { Styles } from "./styles";

const initialValues = { holderName: "" };

const PaymentForm = () => {
  return (
    <Styles>
      <div className="address-form">
        <header className="address-form__header font-size-18">
          <div className="address-form__title">Card Details</div>
        </header>

        <Formik validationSchema={schema} initialValues={initialValues}>
          {({ handleSubmit, handleChange, values, touched, errors }) => {
            return (
              <Form noValidate onSubmit={handleSubmit}>
                <div className="fields-container">
                  <Row>
                    <Col className="col-12 col-sm-6 form__input">
                      <Form.Group controlId="holderName">
                        <Form.Label>Card Holder Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="holderName"
                          placeholder="Enter first name"
                          value={values?.holderName}
                          onChange={handleChange}
                          isValid={touched?.holderName && !errors?.holderName}
                          isInvalid={touched?.holderName && errors?.holderName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.holderName}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col className="col-12 col-sm-6 form__input">
                      <Form.Group controlId="expirationDate">
                        <Form.Label>Expiration Date *</Form.Label>
                        <Form.Control
                          required
                          type="date"
                          name="expirationDate"
                          placeholder="Enter last name"
                          value={values?.expirationDate}
                          onChange={handleChange}
                          isValid={touched?.expirationDate && !errors?.expirationDate}
                          isInvalid={touched?.expirationDate && errors?.expirationDate}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.expirationDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col className="col-12 col-sm-6 form__input">
                      <Form.Group controlId="cvv">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          type="text"
                          name="cvv"
                          className="cvv"
                          placeholder=""
                          value={values?.cvv}
                          onChange={handleChange}
                          isValid={touched?.cvv && !errors?.cvv}
                          isInvalid={touched?.cvv && errors?.cvv}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.cvv}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col className="col-12 col-sm-12 form__input">
                      <Form.Group controlId="saveForFuture">
                        <Checkbox
                          onChange={() => {}}
                          checked={values?.saveForFuture}
                          label="Save Payment Details for Future Use"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.saveForFuture}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <div className="submit-button-container">
                  <AnimatedButton type="submit">
                    <span className="mr-2">Add New Card</span>
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

export default PaymentForm;
