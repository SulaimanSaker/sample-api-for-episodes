import React from "react";

import moment from "moment";

import { Formik } from "formik";
import * as yup from "yup";

import { Form } from "react-bootstrap";

import { Button } from "components/atoms";

import range from "helpers/range";

import { Styles } from "./styles";

const schema = yup.object().shape({
  periodDate: yup.string().when("iDontKnow", {
    is: false,
    then: yup.string().required("Last Period Date is Required"),
  }),
  periodLength: yup.string().required("Period Length is Required"),
  cycleLength: yup.string().required("Last Period Date is Required"),
});

const RegisterCycleForm = ({ onNext }) => {
  return (
    <Styles>
      <section className="register-cycle-form">
        <div className="form">
          <Formik
            validationSchema={schema}
            initialValues={{
              periodDate: "",
              iDontKnow: false,
              periodLength: "",
              cycleLength: "",
            }}
            onSubmit={(values) => {
              const newValues = { ...values };

              if (values.iDontKnow) {
                newValues.periodDate = null;
              } else {
                newValues.periodDate = moment(values.periodDate).format("DD-MM-YYYY");
                delete newValues.iDontKnow;
              }

              onNext(newValues);
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => {
              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <Form.Group controlId="periodDate">
                        <Form.Label>Last Period Date</Form.Label>
                        <Form.Control
                          required
                          type="date"
                          name="periodDate"
                          disabled={values.iDontKnow}
                          value={values.periodDate}
                          onChange={handleChange}
                          isValid={touched.periodDate && !errors.periodDate}
                          isInvalid={touched.periodDate && errors.periodDate}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.periodDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="col-12 col-md-6 mb-2 ">
                      <Form.Check
                        type="checkbox"
                        id="iDontKnow"
                        label="I Dont Know"
                        onChange={handleChange}
                        checked={values.iDontKnow}
                      />
                    </div>
                  </div>

                  <Form.Group controlId="periodLength">
                    <Form.Label>Period Length</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      name="periodLength"
                      placeholder="Enter Period Length"
                      value={values.periodLength}
                      onChange={handleChange}
                      isValid={touched.periodLength && !errors.periodLength}
                      isInvalid={touched.periodLength && errors.periodLength}
                    >
                      <option></option>
                      {range(1, 12).map((item, index) => (
                        <option key={index} value={item}>
                          {item} days
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors?.periodLength}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="cycleLength">
                    <Form.Label>Period Length</Form.Label>
                    <Form.Control
                      required
                      as="select"
                      name="cycleLength"
                      placeholder="Enter Period Length"
                      value={values.cycleLength}
                      onChange={handleChange}
                      isValid={touched.cycleLength && !errors.cycleLength}
                      isInvalid={touched.cycleLength && errors.cycleLength}
                    >
                      <option></option>
                      {range(21, 100).map((item, index) => (
                        <option key={index} value={item}>
                          {item} days
                        </option>
                      ))}
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {errors?.cycleLength}
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

export default RegisterCycleForm;
