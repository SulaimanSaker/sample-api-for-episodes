import { Button, CounterWithTitle, CustomRadio, Radio } from "components/atoms";
import { Formik } from "formik";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Styles } from "./styles";
import * as Yup from "yup";

function OvulationResults() {
  const [checked, setChecked] = useState(false);

  const schema = Yup.object().shape({
    lastDaylastPerdiodDate: Yup.date("Not valid date"),
  });

  const initialValues = {
    lastDaylastPerdiodDate: "",
  };

  const doSubmit = () => {};

  return (
    <Styles>
      <div className="ovulation-results container">
        <Formik initialValues={initialValues} validationSchema={schema} onSubmit={doSubmit}>
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
                  <div className="col-12 col-xs-12 col-sm-6 col-md-3">
                    <div className="question font-size-30">
                      <div className="question-number ">1</div>
                      <p className="desc ">When was the first day of your last period?</p>
                      <Form.Group className="form-group">
                        <Form.Control
                          type="date"
                          name="lastDaylastPerdiodDate"
                          id="lastDaylastPerdiodDate"
                          placeholder="choose Your date"
                          value={values.lastDaylastPerdiodDate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.lastDaylastPerdiodDate && touched.lastDaylastPerdiodDate && (
                          <span className="form__error font-size-16">
                            {errors.lastDaylastPerdiodDate}
                          </span>
                        )}
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-12 col-xs-12 col-sm-6 col-md-3">
                    <div className="question font-size-30">
                      <div className="question-number ">2</div>
                      <p className="desc ">How long did it last?</p>
                      <CounterWithTitle initialValue={1} />
                    </div>
                  </div>
                  <div className="col-12 col-xs-12 col-sm-6 col-md-3">
                    <div className="question font-size-30">
                      <div className="question-number ">3</div>
                      <p className="desc ">How long is your menstrual cycle?</p>
                      <CounterWithTitle initialValue={28} label="days" />
                    </div>
                  </div>
                  <div className="col-12 col-xs-12 col-sm-6 col-md-3">
                    <div className="question font-size-30">
                      <div className="question-number ">4</div>
                      <p className="desc ">Are you planning to get pregnant?</p>
                      <div className="pregnant-radio-group">
                        <CustomRadio
                          id={1}
                          label="Yes"
                          name="pregnant"
                          value="Yes"
                          checked="true"
                          setChecked={setChecked}
                        />
                        <CustomRadio
                          id={2}
                          label="No"
                          name="pregnant"
                          value="No"
                          setChecked={setChecked}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-10 col-xs-10 col-sm-6 col-md-3 get-results-btn">
                    <Button primary rounded big block type="submit">
                      GET RESULTS
                    </Button>
                  </div>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </Styles>
  );
}

export default OvulationResults;
