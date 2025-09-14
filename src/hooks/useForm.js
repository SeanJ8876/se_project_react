import { useState } from "react";

export function useForm(defaultValues) {
  // Changed from useform to useForm
  const [values, setValues] = useState(defaultValues);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  }

  return {
    values,
    setValues,
    handleChange,
  };
}

export default useForm; // Now this matches the function name above
