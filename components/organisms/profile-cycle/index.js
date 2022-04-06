import { ProfileAccordion } from "components/molecules";
import { Formik } from "formik";
import React from "react";
import { Form } from "react-bootstrap";
import { Styles } from "./styles";
import * as Yup from "yup";
import { Button } from "components/atoms";

const periodLengths = ["5 Days", "7 Days", "9 Days", "10 Days"];
const cycleLengths = ["28 Days", "30 Days", "35 Days", "40 Days"];

function ProfileCycle() {
  const ProfileFormSchema = Yup.object().shape({
    lastPerdiodDate: Yup.date("Not valid date"),
    periodLength: Yup.string("Not valid value"),
    cycleLength: Yup.string("Not valid value"),
  });

  const initialValues = {
    lastPerdiodDate: "",
    periodLength: "",
  };

  const doSubmit = () => {};

  const content = () => {
    return (
      <div className="cycle__content__container">
        <div className="cycle__content">
          <div className="cycle__content__header">
            <img src="/images/register/mom.png" alt="mom" />
            <span>I am Pregnant</span>
          </div>

          <div className="profile__cycle__form">
            <Formik
              initialValues={initialValues}
              validationSchema={ProfileFormSchema}
              onSubmit={doSubmit}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset,
                  setFieldValue,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 mb-6">
                        <Form.Group>
                          <Form.Label className="font-size-18">Last Period Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="lastPerdiodDate"
                            id="lastPerdiodDate"
                            placeholder="choose Your date"
                            value={values.lastPerdiodDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.lastPerdiodDate && touched.lastPerdiodDate && (
                            <span className="form__error font-size-16">
                              {errors.lastPerdiodDate}
                            </span>
                          )}
                        </Form.Group>
                      </div>

                      <div className="col-12 mb-6">
                        <Form.Group>
                          <Form.Label className="font-size-18">Period Length</Form.Label>
                          <Form.Control
                            required
                            as="select"
                            name="periodLength"
                            id="periodLength"
                            placeholder="Enter period Length"
                            value={values.periodLength}
                            onChange={handleChange}
                          >
                            <option></option>
                            {periodLengths?.map((value, index) => (
                              <option key={index} value={value}>
                                {value}
                              </option>
                            ))}
                          </Form.Control>
                          {errors.periodLength && touched.periodLength && (
                            <span className="form__error font-size-16">
                              {errors.periodLength}
                            </span>
                          )}
                        </Form.Group>
                      </div>

                      <div className="col-12 mb-6">
                        <Form.Group>
                          <Form.Label className="font-size-18">Cycle Length</Form.Label>
                          <Form.Control
                            required
                            as="select"
                            name="cycleLength"
                            id="cycleLength"
                            placeholder="Enter Cycle Length"
                            value={values.cycleLength}
                            onChange={handleChange}
                          >
                            <option></option>
                            {cycleLengths?.map((value, index) => (
                              <option key={index} value={value}>
                                {value}
                              </option>
                            ))}
                          </Form.Control>
                          {errors.cycleLength && touched.cycleLength && (
                            <span className="form__error font-size-16">
                              {errors.cycleLength}
                            </span>
                          )}
                        </Form.Group>
                      </div>
                      <div className="col-12">
                        <Button primary rounded big block type="submit">
                          CALCULATE
                        </Button>
                      </div>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Styles>
      <ProfileAccordion key1={2} title="Cycle" content={content()} />
    </Styles>
  );
}

export default ProfileCycle;
