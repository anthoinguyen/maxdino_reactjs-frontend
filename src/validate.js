import isEmpty from 'lodash/isEmpty';

const regexEmail = /^[a-z][a-z0-9_\.]{2,}@[a-z0-9]{2,}(\.[a-z]{2,}){1,2}$/;
const regexPhoneNumber = /^[0-9]{1,3}[0-9]{9,}$/;

const validateInput = (values) => {
  const errors = {};
  if (isEmpty(values.email)) {
    errors.email = { _error: 'Required' };
  } else if (!regexEmail.test(values.email)) {
    errors.email = { _error: 'Email invalid' };
  }
  if (isEmpty(values.password)) {
    errors.password = { _error: 'Required' };
  } else if (!values.password.length >= 6) {
    errors.password = { _error: 'Password is too short' };
  }
  if (isEmpty(values.name)) {
    errors.name = { _error: 'Required' };
  }
  if (isEmpty(values.title)) {
    errors.title = { _error: 'Required' };
  }
  if (isEmpty(values.content)) {
    errors.content = { _error: 'Required' };
  }
  if (isEmpty(values.newpassword)) {
    errors.newpassword = { _error: 'Required' };
  }
  if (isEmpty(values.repassword)) {
    errors.repassword = { _error: 'Required' };
  }
  return errors;
};

export default validateInput;