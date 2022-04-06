import React from "react";

import { Formik } from "formik";
import * as yup from "yup";

import { Form } from "react-bootstrap";

import PhoneInput from "react-phone-input-2";

import { Button } from "components/atoms";

import { Styles } from "./styles";

import "react-phone-input-2/lib/bootstrap.css";

const schema = yup.object().shape({
  email: yup.string().required("E-mail is Required").email("Invalid email"),
  phone: yup.number().required("Phone Number is Required"),
  password: yup
    .string()
    .required("Password is Required")
    .min(8, "Password is too short")
    .max(60, "Password is too long")
    .matches(/.*[A-Z].*/, "Password must contains at least one uppercase letter")
    .matches(/.*[a-z].*/, "Password must contains at least one uppercase letter")
    .matches(/(.*[0-9].*)/, "Password must contains at least one digit")
    .matches(/.*[!@#$&*]/, "Password must contains at least one special character letter"),

  confirmPassword: yup
    .string()
    .required("Password confirmation is Required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const RegisterInfoSecondForm = ({ onNext }) => {
  return (
    <Styles>
      <section className="register-info-second-form">
        <div className="form">
          <Formik
            validationSchema={schema}
            onSubmit={(values) => {
              const newValues = { ...values };

              delete newValues.confirmPassword;

              onNext(newValues);
            }}
            initialValues={{
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            }}
          >
            {({ handleSubmit, handleChange, setFieldValue, touched, values, errors }) => {
              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="email">
                    <Form.Label>E-mail Address</Form.Label>
                    <Form.Control
                      required
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={touched.email && errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors?.email}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <PhoneInput
                      country="us"
                      inputClass={touched.phone && !errors?.phone && "valid"}
                      isValid={() => !(touched.phone && errors?.phone)}
                      value={values.phone}
                      onChange={(phone) => setFieldValue("phone", phone, true)}
                    />
                    {touched.phone && errors?.phone && <div className="error">{errors?.phone}</div>}
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      value={values.password}
                      onChange={handleChange}
                      isValid={touched.password && !errors.password}
                      isInvalid={touched.password && errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors?.password}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Retype Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      name="confirmPassword"
                      placeholder="Enter password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      isValid={touched.confirmPassword && !errors.confirmPassword}
                      isInvalid={touched.confirmPassword && errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors?.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <div className="button-container">
                    <Button primary rounded big block type="submit">
                      Register
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

export default RegisterInfoSecondForm;
