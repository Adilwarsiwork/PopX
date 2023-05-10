export default function Validation(values) {
  const error = {};

  if (
    values.email === null ||
    values.email === "" ||
    values.email === undefined
  ) {
    error.email = "Email is required *";
  }

  if (
    values.password === null ||
    values.password === "" ||
    values.password === undefined
  ) {
    error.password = "Please Enter password *";
  }

  return error;
}
