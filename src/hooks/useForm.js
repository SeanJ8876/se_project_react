import { useState } from "react";

export function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);

  function resetForm() {
    setValues(defaultValues);
  }

  return {
    values,
    setValues,
    resetForm,
  };
}

function handleChange(evt) {
  const { name, value } = evt.target;
  setValues({ ...values, [name]: value });
}

return {
  values,
  setValues,
  handleChange,
};

export default useForm;
