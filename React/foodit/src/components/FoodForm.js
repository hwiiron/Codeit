import { useState } from "react";
import FileInput from "./FileInput";

function FoodForm() {
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

  const [values, setValues] = useState({
    title: "",
    calorie: 0,
    content: "",
    imgFile: null,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
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
