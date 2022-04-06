import React, { useState, useEffect } from "react";

import moment from "moment";

import { Formik, FieldArray } from "formik";
import * as yup from "yup";

import { Form } from "react-bootstrap";

import { Button } from "components/atoms";

import http from "services/http";
import { GET_CHILD_RELATION } from "constants/endpoints";

import { Styles } from "./styles";

const getDefaultKid = (relations) => ({
  name: "",
  gender: "",
  dob: "",
  relationId: relations?.find((r) => r.value === "Mother")?.id,
});

const schema = yup.object().shape({
  kids: yup
    .array()
    .default(() => [{}])
    .of(
      yup
        .object()
        .required()
        .shape({
          name: yup.string().required("Name is Required"),
          gender: yup.string().required("Gender is Required"),
          dob: yup.string().required("Birthday is Required"),
          relationId: yup.string().required("Relation is Required"),
        })
    ),
});

const RegisterYourKidForm = ({ onNext }) => {
  const [relations, setRelations] = useState([]);

  useEffect(() => {
    http.get(GET_CHILD_RELATION).then((res) => {
      setRelations(res.data.content);
    });
  }, []);

  return (
    <Styles>
      <section className="register-your-kid-form">
        <div className="form">
          <Formik
            validationSchema={schema}
            enableReinitialize
            initialValues={{
              kids: [getDefaultKid(relations)],
            }}
            onSubmit={(values) => {
              const newValues = { ...values };

              newValues.kids = values.kids.map((kid) => ({
                ...kid,
                id: 0,
                dob: moment(kid.dob).format("DD-MM-YYYY"),
              }));

              onNext(newValues);
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => {
              return (
                <Form noValidate onSubmit={handleSubmit}>
                  <FieldArray name="kids">
                    {({ push }) => (
                      <>
                        {values.kids.length > 0 &&
                          values.kids.map((kid, index) => {
                            return (
                              <div key={index}>
                                <div className="text-primary font-size-20 mb-2">
                                  Insert Your New kid Info
                                </div>
                                <Form.Group>
                                  <Form.Label>Child&rsquo;s Name</Form.Label>
                                  <Form.Control
                                    required
                                    name={`kids.${index}.name`}
                                    value={kid.name}
                                    onChange={handleChange}
                                    isValid={
                                      touched?.kids?.[index]?.name && !errors?.kids?.[index]?.name
                                    }
                                    isInvalid={
                                      touched?.kids?.[index]?.name && errors?.kids?.[index]?.name
                                    }
                                  />
                                  <Form.Control.Feedback type="invalid">
                                    {errors?.kids?.[index]?.name}
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group>
                                  <Form.Label>Birthday</Form.Label>
                                  <Form.Control
                                    required
                                    type="date"
                                    value={kid.dob}
                                    onChange={handleChange}
                                    name={`kids.${index}.dob`}
                                    isValid={
                                      touched?.kids?.[index]?.dob && !errors?.kids?.[index]?.dob
                                    }
                                    isInvalid={
                                      touched?.kids?.[index]?.dob && errors?.kids?.[index]?.dob
                                    }
                                  />
                                  {touched?.kids?.[index]?.dob && !errors?.kids?.[index]?.dob}
                                  <Form.Control.Feedback type="invalid">
                                    {errors?.kids?.[index]?.dob}
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group>
                                  <Form.Label>Child&rsquo;s Gender</Form.Label>
                                  <Form.Control
                                    required
                                    as="select"
                                    name={`kids.${index}.gender`}
                                    placeholder="Enter Period Length"
                                    value={kid.gender}
                                    onChange={handleChange}
                                    isValid={
                                      touched?.kids?.[index]?.gender &&
                                      !errors?.kids?.[index]?.gender
                                    }
                                    isInvalid={
                                      touched?.kids?.[index]?.gender &&
                                      errors?.kids?.[index]?.gender
                                    }
                                  >
                                    <option></option>
                                    <option>Male</option>
                                    <option>Female</option>
                                  </Form.Control>
                                  <Form.Control.Feedback type="invalid">
                                    {errors?.kids?.[index]?.gender}
                                  </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="relationId">
                                  <Form.Label>Relation</Form.Label>
                                  <Form.Control
                                    required
                                    as="select"
                                    name={`kids.${index}.relationId`}
                                    placeholder="Enter Relation"
                                    value={kid.relationId}
                                    onChange={handleChange}
                                    isValid={
                                      touched?.kids?.[index]?.relationId &&
                                      !errors?.kids?.[index]?.relationId
                                    }
                                    isInvalid={
                                      touched?.kids?.[index]?.relationId &&
                                      errors?.kids?.[index]?.relationId
                                    }
                                  >
                                    {relations?.map(({ id, value }) => (
                                      <option key={id} value={id}>
                                        {value}
                                      </option>
                                    ))}
                                  </Form.Control>
                                  <Form.Control.Feedback type="invalid">
                                    {errors?.kids?.[index]?.relationId}
                                  </Form.Control.Feedback>
                                </Form.Group>
                              </div>
                            );
                          })}

                        <div className="d-flex justify-content-center">
                          <Button primary onClick={() => push(getDefaultKid(relations))}>
                            Add Another Kid
                          </Button>
                        </div>
                      </>
                    )}
                  </FieldArray>

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

export default RegisterYourKidForm;
