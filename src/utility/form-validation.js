export const validate = (values) => {
  const errors = {};
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Enter Email';
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email = 'You have entered an invalid email address!';
  }

  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter Password';
  }

  if (!values.confirmPassword || values.confirmPassword.trim() === '') {
    errors.confirmPassword = 'Enter Confirm Password';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';     
  }

  return errors;
};
