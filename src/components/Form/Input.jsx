import PropTypes from "prop-types";
import React from "react";

const Input = ({
  type,
  name,
  id,
  value,
  placeholder,
  onClick,
  width,
  height,
  src,
  alt,
  max,
  min,
  maxLength,
  minLength,
  disabled,
  required,
  step,
  pattern,
  readOnly,
  className,
  ...rest
}) => {
  return (
    <input
      className={className}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onClick={onClick}
      width={width}
      height={height}
      src={src}
      alt={alt}
      max={max}
      min={min}
      maxLength={maxLength}
      minLength={minLength}
      disabled={disabled}
      pattern={pattern}
      required={required}
      step={step}
      readOnly={readOnly}
      {...rest}
    />
  );
};
Input.propTypes = {
  alt: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.string,
  id: PropTypes.string,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string,
  onClick: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  src: PropTypes.string,
  step: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
};
Input.defaultProps = {
  alt: "",
  disabled: false,
  height: "",
  id: "",
  name: "",
  onClick: () => {},
  pattern: "",
  placeholder: "",
  readOnly: false,
  required: true,
  src: "",
  type: "text",
  value: "",
  width: "",
  className: "",
};

export default Input;
