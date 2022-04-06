import React, { useState, useEffect } from "react";

import moment from "moment";

import { Formik } from "formik";
import * as yup from "yup";

import { Form } from "react-bootstrap";

import { Button } from "components/atoms";

import http from "services/http";
import { GET_COUNTRIES } from "constants/endpoints";

import { Styles } from "./styles";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  birthDay: yup.string().required("Birthday is Required"),
  countryId: yup.string().required("Country is Required"),
});

const RegisterInfoFirstForm = ({ onNext }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    http.get(GET_COUNTRIES).then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <Styles>
      <section className="register-info-form">
        <div className="form">
          <Formik
            validationSchema={schema}
            initialValues={{
              firstName: "",
              lastName: "",
              birthDay: "",
              countryId: "",
            }}
            onSubmit={(values) => {
              const newValues = { ...values };

              newValues.birthDay = moment(values.birthDay).format("DD-MM-YYYY");

              onNext(newValues);
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => {
              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      name="firstName"
                      placeholder="Enter First Name"
                      value={values.firstName}
                      onChange={handleChange}
                      isValid={touched.firstName && !errors.firstName}
                      isInvalid={touched.firstName && errors.firstName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors?.firstName}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="lastName">
                    <Form.Label>last Name</Form.Label>
                    <Form.Control
                      required
                      name="lastName"
                      placeholder="Enter last Name"
                      value={values.lastName}
                      onChange={handleChange}
                      isValid={touched.lastName && !errors.lastName}
                      isInvalid={touched.lastName && errors.lastName}
                    />
                    <Form.Control.Feedback type="invalid">{errors?.lastName}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="birthDay">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      name="birthDay"
                      value={values.birthDay}
                      onChange={handleChange}
                      isValid={touched.birthDay && !errors.birthDay}
                      isInvalid={touched.birthDay && errors.birthDay}
                    />
                    <Form.Control.Feedback type="invalid">{errors?.birthDay}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="countryId">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      name="countryId"
                      placeholder="Enter countryId"
                      value={values.countryId}
                      onChange={handleChange}
                      isValid={touched.countryId && !errors.countryId}
                      isInvalid={touched.countryId && errors.countryId}
                    >
                      <option></option>
                      {countries?.map(({ id, nameEn }) => (
                        <option key={id} value={id}>
                          {nameEn}
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors?.countryId}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="button-container">
                    <Button primary rounded big block type="submit">
                      Next
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
    </Styles>
  );
};

export default RegisterInfoFirstForm;
