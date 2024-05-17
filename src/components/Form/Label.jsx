import PropTypes from "prop-types";
import React from "react";

const Label = ({ children, htmlFor, className, ...rest }) => {
  return (
    <label className={className} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};
Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
};
Label.defaultProps = {
  className: "",
  htmlFor: "",
};

export default Label;
