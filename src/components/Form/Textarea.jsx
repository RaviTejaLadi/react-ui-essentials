import PropTypes from "prop-types";
import React from "react";

const Textarea = ({ className, children, id, name, rows, cols, minLength, maxLength, placeholder, ...rest }) => {
  return (
    <textarea
      className={className}
      id={id}
      name={name}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      {...rest}
    >
      {children}
    </textarea>
  );
};

Textarea.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cols: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  placeholder: PropTypes.string,
};

export default Textarea;
