import { useRef } from "react";

const FileInput = ({ name, value, onChange }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button>x</button>}
    </div>
  );
};

export default FileInput;
