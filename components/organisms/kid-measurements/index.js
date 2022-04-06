import React from "react";
import { Formik } from "formik";

import { Form } from "react-bootstrap";
import Lines from "./lines";
import { Styles } from "./styles";
import * as Yup from "yup";
import { Button } from "components/atoms";
import useMediaQuery from "components/particles/hooks/with-media-query";

function KidsMeasurements() {
  const mediaQuery = useMediaQuery();

  const schema = Yup.object().shape({
    kidName: Yup.string("Not valid value"),
  });

  const initialValues = {
    kidName: "",
  };

  const onSubmit = () => {};
  return (
    <Styles>
      <section id="kids-measurements" className="kids-measurements">
        <div className="container">
          <div className="kids-container">
            <div className="kids-measurements__content-container">
              <div className="kids-measurements__content">
                {mediaQuery.qMin960 && <Lines />}
                <Formik
                  onSubmit={onSubmit}
                  initialValues={initialValues}
                  validationSchema={schema}
                >
                  {({ handleSubmit, handleChange, values, touched, errors }) => {
                    return (
                      <Form noValidate onSubmit={handleSubmit} className="form">
                        <div className="choose-kid">
                          <div className="choose-kid-title font-size-30">
                            Choose The Name Of Your Kid
                          </div>

                          <Form.Group className="form__input">
                            <Form.Control
                              required
                              as="select"
                              className="custom-select"
                              name="kidName"
                              value={values.kidName}
                              onChange={handleChange}
                              isValid={touched.kidName && !errors.kidName}
                              isInvalid={touched.kidName && errors.kidName}
                            >
                              <option></option>
                              <option>Mahmouddo the mighty</option>
                              <option>Ola the mighty</option>
                              <option>Nada the mighty</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">
                              {errors?.kidName}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </div>
                        <div className="row kid-details">
                          <div className="col-12 col-xs-12 col-sm-12 col-md-2 ">
                            <div className="ruler-container">
                              <img
                                src="/images/icons/ruler.png"
                                alt="ruler"
                                className="ruler"
                              />
                            </div>
                          </div>
                          <div className="col-12 col-xs-12 col-sm-12 col-md-3">
                            <div className="kid-details-card font-size-35">
                              <div className="card-expected ">Expected </div>
                              <div className="card-expected  ">Weight </div>
                              <div className="card-measure-number">5.4kg</div>
                              <div className="card-percentile">
                                50<sup>th</sup> percentile
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-xs-12 col-sm-12 col-md-3">
                            <div className="kid-details-card font-size-35">
                              <div className="card-expected ">Expected </div>
                              <div className="card-expected  ">Height </div>
                              <div className="card-measure-number">58.42 cm</div>
                              <div className="card-percentile">
                                50<sup>th</sup> percentile
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-xs-12 col-sm-12 col-md-3">
                            <div className="kid-details-card font-size-35">
                              <div className="card-expected ">Expected </div>
                              <div className="card-expected  ">Head Size </div>
                              <div className="card-measure-number">34.29 cm</div>
                              <div className="card-percentile">
                                50<sup>th</sup> percentile
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="button-container">
                          <Button primary rounded big block>
                            Edit measurements
                          </Button>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Styles>
  );
}

export default KidsMeasurements;
