import { useState } from "react";
import FileInput from "./FileInput";
import { createFood } from "../api";

const INITIAL_VALUES = {
  title: "",
  calorie: 0,
  content: "",
  imgFile: null,
};

function FoodForm({ onSubmitSuccess }) {
  // const [title, setTitle] = useState("");
  // const [calorie, setCalorie] = useState(0);
  // const [content, setContent] = useState("");

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleCalorieChange = (e) => {
  //   const nextRating = Number(e.target.value) || 0;
  //   setCalorie(nextRating);
  // };

  // const handleContentChange = (e) => {
  //   setContent(e.target.value);
  // };

  const [values, setValues] = useState(INITIAL_VALUES);

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

    result = await createFood(formData);
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
      <button type="submit">확인</button>
    </form>
  );
}

export default FoodForm;
