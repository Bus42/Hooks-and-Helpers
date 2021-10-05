import { useState } from "react";

// change initialFormValues to reflect initial form state in your app
const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  comments: "",
};

const useForm = (state = initialFormValues) => {
  const [formValues, setFormValues] = useState(state);

  const handleChange = (e) => {
    //   account for radio and check boxes here
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const clearForm = () => {
    setFormValues(initialFormValues);
  };

  return [formValues, handleChange, clearForm];
};

export default useForm;
