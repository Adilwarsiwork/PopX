export default function Validation(values) {
  const error = {};
  const email_pattern =
    /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
  const phonenum = /^\d{10}$/;

  if (
    values.fullname === null ||
    values.fullname === "" ||
    values.fullname === undefined
  ) {
    error.fullname = "Full Name is required *";
  }

  if (
    values.phonenumber === null ||
    values.phonenumber === "" ||
    values.phonenumber === undefined
  ) {
    error.phonenumber = "Phone number is required *";
  } else if (!phonenum.test(values.phonenumber)) {
    error.phonenumber = "Please Enter valid 10 digit phone number *";
  }

  if (
    values.email === null ||
    values.email === "" ||
    values.email === undefined
  ) {
    error.email = "Email is required *";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Please enter valid email *";
  }

  if (
    values.password === null ||
    values.password === "" ||
    values.password === undefined
  ) {
    error.password = "Please Enter password *";
  }

  if (
    values.company === null ||
    values.company === "" ||
    values.company === undefined
  ) {
    error.company = "Please enter company name *";
  }
  if (
    values.agency === null ||
    values.agency === "" ||
    values.agency === undefined
  ) {
    error.agency = "Please select YES or NO*";
  }
  return error;
}
