import PropTypes from "prop-types";
import React from "react";

const Select = ({ children, name, id, multiple, size, required, className, ...rest }) => {
  return (
    <select className={className} name={name} id={id} required={required} multiple={multiple} size={size} {...rest}>
      {children}
    </select>
  );
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.number,
  required: PropTypes.bool,
  className: PropTypes.string,
};

Select.defaultProps = {
  id: "",
  multiple: false,
  name: "",
  size: "",
  required: true,
  className: "",
};

export default Select;
