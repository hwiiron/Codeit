import "./customButton.css";
import PropTypes from "prop-types";

export const CustomButton = ({
  size,
  label,
  variant,
  backgroundColor,
  color,
}) => {
  const style = {
    backgroundColor,
    color,
  };
  return (
    <button
      className={[
        "custom-button",
        `custom-button--${size}`,
        `custom-button--${variant}`,
      ].join(" ")}
      style={style}
    >
      {label}
    </button>
  );
};

CustomButton.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
  backgroundColor: null,
  color: null,
  size: "md",
  variant: "outline",
};
