import { useCallback, useState } from 'react';

function useForm() {
  const [valid, setValid] = useState(false);
  const [error, setError] = useState({});
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const { value, name } = event.target;
    setError({ ...error, [name]: event.target.validationMessage });
    setValid(event.target.closest('form').checkValidity());
    setValues({ ...values, [name]: value });

    function isEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
      return emailPattern.test(email);
    }

    if (name === 'email' && !isEmail(value)) {
      event.target.setCustomValidity(
        'Нужно указать e-mail адрес'
      );
    } else {
      event.target.setCustomValidity('');
    }
  };

  const reset = useCallback(
    (newValid = false, newError = {}, newValue = {}) => {
      setValid(newValid);
      setError(newError);
      setValues(newValue);
    },
    [setValid, setError, setValues]
  );

  return {
    valid,
    values,
    error,
    setValid,
    setValues,
    setError,
    handleChange,
    reset,
  };
}

export default useForm;
