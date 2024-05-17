import PropTypes from "prop-types";
import React from "react";

const Fieldset = ({ children, legendName, className, ...rest }) => {
  return (
    <fieldset className={className} {...rest}>
      <legend>{legendName}</legend>
      {children}
    </fieldset>
  );
};

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  legendName: PropTypes.string,
  className: PropTypes.string,
};

Fieldset.defaultProps = {
  legendName: "",
  className: "",
};

export default Fieldset;
