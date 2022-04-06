import * as yup from "yup";

export const schema = yup.object().shape({
  holderName: yup.string().required("Card Holder Name is Required"),
  expirationDate: yup.date().required("Expiration Dat is Required"),
  cvv: yup.string().required("CVV is Required"),
});
