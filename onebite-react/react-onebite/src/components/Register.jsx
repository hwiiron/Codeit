import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
          name="name"
        />
      </div>

      <div>
        <input
          value={input.birth}
          onChange={onChange}
          type="date"
          name="birth"
        />
      </div>

      <div>
        <select value={input.country} onChange={onChange} name="country">
          <option></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} onChange={onChange} name="bio"></textarea>
      </div>
    </div>
  );
};

export default Register;
