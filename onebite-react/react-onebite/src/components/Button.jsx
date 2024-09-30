const Button = ({ text, color = 'white', children }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  }

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
}

// Button.defaultProps = {
//   color: 'white',
// }

export default Button;