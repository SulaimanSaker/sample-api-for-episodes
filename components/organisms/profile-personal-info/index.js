import { ProfileAccordion } from "components/molecules";
import React from "react";
import { Styles } from "./styles";
import * as Yup from "yup";
import { FiAlertCircle } from "react-icons/fi";
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import PhoneInput from "react-phone-input-2";

function ProfilePersonalInfo() {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const ProfileFormSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Email is not valid").required("Required"),
    password: Yup.string().required("Required").min(6, "Password too short at least 6 char"),
    userName: Yup.string().required("Required"),
    birthdate: Yup.date("Not valid date"),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    userName: "",
    birthdate: "",
    phoneNumber: "",
  };

  const doSubmit = () => {};

  const content = () => {
    return (
      <div className="info__content">
        <div className="update__profile">
          <img src="/images/temp/expert.jpg" alt="profile" />
          <button className="update__image__btn font-size-18">Update Profile Image</button>
        </div>
        <div className="warning__box">
          <div>
            <FiAlertCircle size="1.5rem" color="var(--gray-12)" />
          </div>

          <span>
            Your username and profile image will be visible to all users as you post in the
            community so be sure to protect your privacy and avoid real name or other personal
            information.
          </span>
        </div>
        <div className="form__section">
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
                    <div className="col-sm-12 col-md-6 mb-6">
                      <Form.Group>
                        <Form.Label className="font-size-18">First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Enter first name"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.firstName && touched.firstName && (
                          <span className="form__error font-size-16">{errors.firstName}</span>
                        )}
                      </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-6">
                      <Form.Group>
                        <Form.Label className="font-size-18">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter Your Email"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                          <span className="form__error font-size-16">{errors.email}</span>
                        )}
                      </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-6">
                      <Form.Group>
                        <Form.Label className="font-size-18">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Enter Your Last Name"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.lastName && touched.lastName && (
                          <span className="form__error font-size-16">{errors.lastName}</span>
                        )}
                      </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-6">
                      <Form.Group>
                        <Form.Label className="font-size-18">Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter Your Password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <div className="password__change__section font-size-18">
                          {errors.password && touched.password && (
                            <span className="form__error font-size-16">{errors.password}</span>
                          )}
                          <a role="button" href="#">
                            Change password
                          </a>
                        </div>
                      </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-6">
                      <Form.Group>
                        <Form.Label className="font-size-18">Username</Form.Label>
                        <Form.Control
                          type="text"
                          name="userName"
                          id="userName"
                          placeholder="Enter Your Username"
                          value={values.userName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.userName && touched.userName && (
                          <span className="form__error font-size-16">{errors.userName}</span>
                        )}
                      </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-6">
                      <Form.Group>
                        <Form.Label className="font-size-18">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter Your Email"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                          <span className="form__error font-size-16">{errors.email}</span>
                        )}
                      </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-6">
                      <Form.Group>
                        <Form.Label className="font-size-18">birthdate</Form.Label>
                        <Form.Control
                          type="date"
                          name="birthdate"
                          id="birthdate"
                          placeholder="choose Your Birthdate"
                          value={values.birthdate}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.birthdate && touched.birthdate && (
                          <span className="form__error font-size-16">{errors.birthdate}</span>
                        )}
                      </Form.Group>
                    </div>
                    <div className="col-sm-12 col-md-6 mb-6">
                      <Form.Group>
                        <Form.Label className="font-size-18">Phone number</Form.Label>
                        <PhoneInput
                          country="us"
                          inputClass="phone"
                          isValid={() => !(touched.phoneNumber && errors?.phoneNumber)}
                          value={values.phoneNumber}
                          onChange={(phone) => setFieldValue("phoneNumber", phone, true)}
                        />
                        {errors.birthdate && touched.birthdate && (
                          <span className="form__error font-size-16">{errors.birthdate}</span>
                        )}
                      </Form.Group>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    );
  };
  return (
    <Styles>
      <ProfileAccordion key1={1} title="My Account" content={content()} />
    </Styles>
  );
}

export default ProfilePersonalInfo;
