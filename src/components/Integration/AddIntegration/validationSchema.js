import * as yup from "yup";

export const integrationValidationSchema = yup.object({
  name: yup.string("Enter your name").required("Account name is required"),
  interval: yup.string("select interval").required("Interval is required"),
  addigyUserName: yup
    .string("Enter your addigy user name")
    .required("Addigy user name is required"),
  password: yup.string("Enter your password").required("Password is required"),
  clientId: yup.string("Enter your clientId").required("ClientId is required"),
  clientSecret: yup
    .string("Enter your clientSecret")
    .required("clientSecret is required"),
  description: yup
    .string("Enter your Description")
    .required("Description is required"),
});
