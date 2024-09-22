import PropTypes from "prop-types";
import React from "react";
import Button from "../Button/Button";

const Submit = ({ children, ...props }) => {
  return (
    <Button type="submit" {...props}>
      {children}
    </Button>
  );
};

Submit.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Submit;
