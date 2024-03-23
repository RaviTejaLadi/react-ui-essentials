import PropTypes from "prop-types";
import React from "react";

const Label = (props, { children, htmlFor, className }) => {
  return (
    <label {...props} className={className} htmlFor={htmlFor}>
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
