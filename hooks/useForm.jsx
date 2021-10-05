import { useState } from "react";

// change initialFormValues to reflect initial form state in your app
const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  reason: "How Can I Help?",
  comments: "",
};

const useForm = (state = initialFormValues) => {
  const [formValues, setFormValues] = useState(state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const clearForm = () => {
    setFormValues(initialFormValues);
  }

  return [formValues, handleChange, clearForm];
};

export default useForm;
