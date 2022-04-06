import React from "react";

import moment from "moment";

import { Formik } from "formik";
import * as yup from "yup";

import { Form } from "react-bootstrap";

import { Button } from "components/atoms";

import range from "helpers/range";

import { Styles } from "./styles";

const schema = yup.object().shape({
  lastPeriodDate: yup.string().when("iDontKnow", {
    is: false,
    then: yup.string().required("Last Period Date is Required"),
  }),
  cycleLength: yup.string().required("Last Period Date is Required"),
});

const RegisterPredictForm = ({ onNext }) => {
  return (
    <Styles>
      <section className="register-predict-form">
        <div className="form">
          <Formik
            validationSchema={schema}
            initialValues={{
              lastPeriodDate: "",
              iDontKnow: false,
              cycleLength: "",
            }}
            onSubmit={(values) => {
              const newValues = { ...values };

              newValues.lastPeriodDate = moment(values.lastPeriodDate).format("DD-MM-YYYY");

              onNext(newValues);
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => {
              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <Form.Group controlId="lastPeriodDate">
                        <Form.Label>Last Period Date</Form.Label>
                        <Form.Control
                          required
                          type="date"
                          name="lastPeriodDate"
                          disabled={values.iDontKnow}
                          value={values.lastPeriodDate}
                          onChange={handleChange}
                          isValid={touched.lastPeriodDate && !errors.lastPeriodDate}
                          isInvalid={touched.lastPeriodDate && errors.lastPeriodDate}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.lastPeriodDate}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>

                    <div className="col-12 col-md-6 mb-2">
                      <Form.Check
                        type="checkbox"
                        id="iDontKnow"
                        label="I Dont Know"
                        onChange={handleChange}
                        checked={values.iDontKnow}
                      />
                    </div>
                  </div>

                  <Form.Group controlId="cycleLength">
                    <Form.Label>Cycle Length</Form.Label>
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
                        <option key={index}>{item} days</option>
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

export default RegisterPredictForm;
