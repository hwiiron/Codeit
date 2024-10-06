import { useRef } from "react";

const FileInput = ({ name, value, onChange }) => {
  const inputRef = useRef();

  const handleChange = (e) => {
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;

    if (!inputNode) return;
    inputNode.value = "";
    onChange(name, null);
  };
  return (
    <>
      <input type="file" onChange={handleChange} ref={inputRef} />
      {value && <button onClick={handleClearClick}>x</button>}
    </>
  );
};

export default FileInput;
