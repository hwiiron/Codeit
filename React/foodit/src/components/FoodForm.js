import { useState } from "react";
import FileInput from "./FileInput";
// import { createFood } from "../api";

const INITIAL_VALUES = {
  title: "",
  calorie: 0,
  content: "",
  imgFile: null,
};

function FoodForm({
  onSubmitSuccess,
  onSubmit,
  onCancel,
  initialValues = INITIAL_VALUES,
  initialPreview,
}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("calorie", values.calorie);
    formData.append("content", values.content);
    formData.append("imgFile", values.imgFile);

    let result;

    // result = await createFood(formData);
    result = await onSubmit(formData);
    const { food } = result;
    onSubmitSuccess(food);
    setValues(INITIAL_VALUES);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FileInput
        name="imgFile"
        value={values.imgFile}
        onChange={handleChange}
        initialPreview={initialPreview}
      />
      <input
        name="title"
        value={values.title}
        onChange={handleInputChange}
      ></input>
      <input
        type="number"
        name="calorie"
        value={values.calorie}
        onChange={handleInputChange}
      ></input>
      <input
        name="content"
        value={values.content}
        onChange={handleInputChange}
      ></input>
      {onCancel && <button onClick={onCancel}>취소</button>}
      <button type="submit">확인</button>
    </form>
  );
}

export default FoodForm;
