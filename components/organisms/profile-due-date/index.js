import React, { useState } from "react";
import { Styles } from "./styles";
import { ProfileAccordion } from "components/molecules";
import { Button, CustomCheckBox, Image } from "components/atoms";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";

function ProfileDueDate() {
  const [CheckBoxes, setCheckBoxes] = useState({
    delivered: false,
    miscarriage: false,
  });

  const ProfileFormSchema = Yup.object().shape({
    lastPeriodDate: Yup.date("Not valid date"),
  });

  const initialValues = {
    lastPeriodDate: "",
  };

  const doSubmit = () => {};

  const content = () => {
    return (
      <div className="profile__due__date__section">
        <div className="row first-row">
          <div className="col-xs-12 col-sm-6">
            <button
              className="item  mt-2 mb-2"
              onClick={() =>
                setCheckBoxes((prev) => ({ ...prev, delivered: !prev.delivered }))
              }
            >
              <CustomCheckBox checked={CheckBoxes.delivered} />

              <div className="  mb-2">
                <div className="d-flex align-items-center">
                  <div className="option-image mr-2">
                    <Image src="/images/register/delivered.png" alt="" />
                  </div>
                  <div className="text font-size-35">I Delivered</div>
                </div>
              </div>
            </button>
          </div>

          <div className="col-xs-12 col-sm-6">
            <button
              className="item  mt-2 mb-2"
              onClick={() =>
                setCheckBoxes((prev) => ({ ...prev, miscarriage: !prev.miscarriage }))
              }
            >
              <CustomCheckBox checked={CheckBoxes.miscarriage} />

              <div className=" mb-2">
                <div className="d-flex align-items-center">
                  <div className="option-image mr-2">
                    <Image src="/images/register/miscarriage.png" alt="" />
                  </div>
                  <div className="text font-size-35">
                    I had <div>miscarriage</div>
                  </div>
                </div>
              </div>
            </button>
          </div>

          <div className="form__section">
            <div className="form__section__content">
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
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="col-12 mb-6">
                        <Form.Group>
                          <Form.Label className="font-size-18">Last Period Date</Form.Label>
                          <Form.Control
                            type="date"
                            name="lastPeriodDate"
                            id="lastPeriodDate"
                            placeholder="choose Your Birthdate"
                            value={values.lastPeriodDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.lastPeriodDate && touched.lastPeriodDate && (
                            <span className="form__error font-size-16">
                              {errors.lastPeriodDate}
                            </span>
                          )}
                        </Form.Group>
                      </div>
                      <div className="col-12 font-size-18">
                        <Button primary rounded big block type="submit">
                          CALCULATE
                        </Button>
                      </div>
                      <div className="I_dont_have_date col-12 font-size-18">
                        <a href="/">I don&#8217;t have my due date</a>
                      </div>
                    </form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Styles>
      <ProfileAccordion key1={2} title="My Due Date" content={content()} />
    </Styles>
  );
}

export default ProfileDueDate;
