import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  addressFirstPart: yup.string().required("Address is Required"),
  addressSecondPart: yup.string(),
  city: yup.string().required("City is Required"),
  state: yup.string().required("State is Required"),
  phoneNumber: yup.string().required("Phone Number is Required"),
  country: yup.string().required("Country is Required"),
});
