import { useState } from "react";

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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={values.title} onChange={handleChange}></input>
      <input
        type="number"
        name="calorie"
        value={values.calorie}
        onChange={handleChange}
      ></input>
      <input
        name="content"
        value={values.content}
        onChange={handleChange}
      ></input>
      <button type="submit">확인</button>
    </form>
  );
}

export default FoodForm;
