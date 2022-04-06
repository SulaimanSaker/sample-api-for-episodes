import React from "react";

import moment from "moment";

import { Formik } from "formik";
import * as yup from "yup";

import { Form } from "react-bootstrap";

import { Button } from "components/atoms";

import { Styles } from "./styles";

const schema = yup.object().shape({
  dueDate: yup.string().when("iDontKnow", {
    is: false,
    then: yup.string().required("Last Period Date is Required"),
  }),
});

const RegisterDueDateForm = ({ onNext }) => {
  return (
    <Styles>
      <section className="register-due-date-form">
        <div className="form">
          <Formik
            validationSchema={schema}
            initialValues={{
              dueDate: "",
              iDontKnow: false,
            }}
            onSubmit={(values) => {
              const newValues = { ...values };

              newValues.dueDate = moment(values.dueDate).format("DD-MM-YYYY");

              onNext(newValues);
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => {
              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                      <Form.Group controlId="dueDate">
                        <Form.Label>Due Date</Form.Label>

                        <Form.Control
                          required
                          type="date"
                          name="dueDate"
                          disabled={values.iDontKnow}
                          value={values.dueDate}
                          onChange={handleChange}
                          isValid={touched.dueDate && !errors.dueDate}
                          isInvalid={touched.dueDate && errors.dueDate}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors?.dueDate}
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

export default RegisterDueDateForm;
